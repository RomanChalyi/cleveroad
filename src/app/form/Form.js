import React, { useState } from 'react';
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
import { showErrorMessage, addProduct } from '../action';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';

import { backgroundForm, cardMedia, buttonGroup } from './form.module.scss';

const Form = ({ showErrorMessage, addProduct, history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [discountPricePeriod, setDiscountPricePeriod] = useState(new Date());
  const [useDiscount, setUseDiscountPrice] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDetails = (e) => setDescription(e.target.value);
  const handleChangeDiscountPrice = (e) => setDiscountPrice(e.target.value);
  const handleChangeUseDiscount = (e) => setUseDiscountPrice(e.target.checked);
  const handleChangeDiscountPeriod = (date) => setDiscountPricePeriod(date);
  const handleChangePrice = (e) => {
    const { value } = e.target;
    if (isFinite(value)) {
      setPrice(value);
    }
    return null;
  };

  const handleChangePhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };

  const validateForm = () => [title, description, photo, price].every((data) => data.trim() !== '');

  const handleClick = () => {
    if (validateForm()) {
      if (!useDiscount) {
        return addProduct({ title, description, photo, price }, history);
      } else {
        return addProduct(
          {
            title,
            description,
            photo,
            price,
            discountPrice,
            discountPricePeriod,
          },
          history
        );
      }
    }
    setError(true);
    return showErrorMessage('The form has been filled out incorrectly');
  };

  return (
    <Container className="padding">
      <Container className={backgroundForm} style={{ border: '1px solid' }} maxWidth="sm">
        <CardMedia
          className={cardMedia}
          style={
            photo
              ? {}
              : error
              ? { background: '#636363', border: '1px solid red' }
              : { background: '#636363' }
          }
          image={photo}
          title="backpack"
        >
          {!photo && (
            <Typography variant="h3" component="h4">
              NO IMAGE
            </Typography>
          )}
          <IconButton
            style={{ position: 'absolute', top: '5px', right: '5px', transform: 'scale(2)' }}
            color="primary"
          >
            <label>
              <i style={{ display: 'none' }}>attach_file</i>
              {photo ? <EditIcon /> : <AddIcon />}
              <input style={{ display: 'none' }} onChange={handleChangePhoto} type="file" />
            </label>
          </IconButton>
        </CardMedia>
        <Typography align="center" variant="h6" component="p">
          Title:
        </Typography>
        <TextField
          error={error && !title.trim()}
          onChange={handleChangeTitle}
          value={title}
          id="form-title"
          fullWidth
          variant="outlined"
          rows="1"
        />
        <Typography align="center" variant="h6" component="p" gutterBottom>
          Description:
        </Typography>
        <TextField
          value={description}
          onChange={handleChangeDetails}
          fullWidth
          id="form-description"
          multiline
          rows="4"
          variant="outlined"
          error={error && !description.trim()}
        />

        <Typography align="center" variant="h6" component="p">
          Price:
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <Input
            error={error && !price.trim()}
            id="price"
            color="primary"
            value={price}
            onChange={handleChangePrice}
            startAdornment={
              <InputAdornment variant="standard" position="start">
                $
              </InputAdornment>
            }
          />
        </div>

        <Typography align="center" variant="h6" component="p">
          Use discountPrice
          <Checkbox
            checked={useDiscount}
            onChange={handleChangeUseDiscount}
            name="checkedB"
            color="primary"
          />
        </Typography>
        <div style={{ display: 'flex' }}>
          <Slider
            defaultValue={discountPrice}
            onChange={handleChangeDiscountPrice}
            aria-labelledby="discountPrice"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={99}
            disabled={!useDiscount}
          />
          <Typography
            style={{ marginLeft: '10px' }}
            color={useDiscount ? 'inherit' : 'textSecondary'}
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
            label="discountPrice Period"
            value={discountPricePeriod}
            onChange={handleChangeDiscountPeriod}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            disabled={!useDiscount}
          />
        </MuiPickersUtilsProvider>
        <div className={buttonGroup}>
          <Button onClick={handleClick} variant="contained" color="primary">
            Add
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
const mapDispatchToProps = { showErrorMessage, addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
