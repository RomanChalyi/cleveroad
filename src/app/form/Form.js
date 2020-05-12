import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  IconButton,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Slider,
  Checkbox,
  Input,
  Button,
  CardMedia,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns';
import { showErrorMessage, addProduct, loadingStart, loadingEnd } from '../action';
import { editProduct } from './action';
import { BackpackDB } from '../../firebaseConfig';
import {
  backgroundForm,
  cardMedia,
  buttonGroup,
  iconButton,
  displayNone,
  icon,
} from './form.module.scss';
import { checkFormData, getDatabaseDate } from '../../utils/index';

const Form = ({
  showErrorMessage,
  addProduct,
  history,
  isEdit,
  loadingStart,
  loadingEnd,
  editProduct,
}) => {
  useEffect(() => {
    if (isEdit) {
      const { pathname } = history.location;
      const id = pathname.slice(6);
      loadingStart();
      BackpackDB.doc(id)
        .get()
        .then((querySnapshot) => {
          loadingEnd();
          const data = querySnapshot.data();
          if (data.discountPrice) {
            data.discountPeriod = new Date(data.discountPeriod.seconds * 1000);
            return setFormData({ ...data, error: false, useDiscount: true });
          }
          return setFormData({
            ...data,
            error: false,
            useDiscount: false,
            discountPrice: 0,
            discountPeriod: new Date(),
          });
        });
    }
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: '',
    price: '',
    discountPrice: 1,
    discountPeriod: new Date(),
    useDiscount: false,
    error: false,
  });

  const handleChangeTitle = (e) => setFormData({ ...formData, title: e.target.value });

  const handleChangeDetails = (e) => setFormData({ ...formData, description: e.target.value });

  const handleChangeDiscountPrice = (e, newValue) =>
    setFormData({ ...formData, discountPrice: newValue });

  const handleChangeUseDiscount = (e) =>
    setFormData({ ...formData, useDiscount: e.target.checked });

  const handleChangeDiscountPeriod = (date) => setFormData({ ...formData, discountPeriod: date });

  const handleChangePrice = (e) => {
    if (isFinite(e.target.value)) {
      return setFormData({ ...formData, price: e.target.value });
    }
    return null;
  };

  const handleChangePhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
  };

  const showError = () => {
    setFormData({ ...formData, error: true });
    return showErrorMessage('The form has been filled out incorrectly');
  };

  const handleClick = () => {
    if (checkFormData(formData)) {
      const dbData = getDatabaseDate(formData);
      return isEdit ? editProduct(dbData, history) : addProduct(dbData, history);
    }
    return showError();
  };

  return (
    <Container className="padding">
      <Container className={backgroundForm} maxWidth="sm">
        <CardMedia
          className={cardMedia}
          style={
            formData.photo
              ? {}
              : formData.error
              ? { background: '#636363', border: '1px solid red' }
              : { background: '#636363' }
          }
          image={formData.photo}
          title="backpack"
        >
          {!formData.photo && (
            <Typography variant="h3" component="h4">
              NO IMAGE
            </Typography>
          )}
          <IconButton className={iconButton} color="primary">
            <label>
              <i className={displayNone}>attach_file</i>
              {formData.photo ? <EditIcon className={icon} /> : <AddIcon className={icon} />}
              <input className={displayNone} onChange={handleChangePhoto} type="file" />
            </label>
          </IconButton>
        </CardMedia>
        <Typography align="center" variant="h6" component="p">
          Title:
        </Typography>
        <TextField
          error={formData.error && !formData.title.trim()}
          onChange={handleChangeTitle}
          value={formData.title}
          id="form-title"
          fullWidth
          variant="outlined"
          rows="1"
        />
        <Typography align="center" variant="h6" component="p" gutterBottom>
          Description:
        </Typography>
        <TextField
          value={formData.description}
          onChange={handleChangeDetails}
          fullWidth
          id="form-description"
          multiline
          rows="4"
          variant="outlined"
          error={formData.error && !formData.description.trim()}
        />

        <Typography align="center" variant="h6" component="p">
          Price:
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <Input
            error={formData.error && !formData.price.toString().trim() && !!formData.price}
            id="price"
            color="primary"
            value={formData.price}
            onChange={handleChangePrice}
            startAdornment={
              <InputAdornment variant="standard" position="start">
                $
              </InputAdornment>
            }
          />
        </div>

        <Typography align="center" variant="h6" component="p">
          Use Discount
          <Checkbox
            checked={formData.useDiscount}
            onChange={handleChangeUseDiscount}
            name="checkedB"
            color="primary"
          />
        </Typography>
        <div style={{ display: 'flex' }}>
          <Slider
            value={formData.discountPrice}
            onChange={handleChangeDiscountPrice}
            aria-labelledby="discountPrice"
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={99}
            disabled={!formData.useDiscount}
          />
          <Typography
            style={{ marginLeft: '10px' }}
            color={formData.useDiscount ? 'inherit' : 'textSecondary'}
            align="center"
            variant="h5"
            component="p"
          >
            %
          </Typography>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            disablePast
            variant="dialog"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="discountPeriod"
            value={formData.discountPeriod}
            onChange={handleChangeDiscountPeriod}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            disabled={!formData.useDiscount}
          />
        </MuiPickersUtilsProvider>
        <div className={buttonGroup}>
          <Button onClick={handleClick} variant="contained" color="primary">
            {isEdit ? 'Edit' : 'Add'}
          </Button>
          <Button component={Link} to="/" variant="contained" color="secondary">
            Cancel
          </Button>
        </div>
      </Container>
    </Container>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { showErrorMessage, addProduct, editProduct, loadingStart, loadingEnd };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
