import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBackpackList } from './action';
import AddIcon from '@material-ui/icons/Add';

import Card from './card/Card';
import { list } from './backpackList.module.scss';

const BackpackList = ({ loadBackpackList, backpacks, history }) => {
  useEffect(() => {
    loadBackpackList();
  }, []);

  const handleEdit = (id) => () => {
    history.push(`edit:${id}`);
  };
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }} className="padding">
      <Typography align="center" gutterBottom>
        <Button component={Link} to="/add" variant="contained" color="primary">
          <AddIcon />
          add Card
        </Button>
      </Typography>
      <Container maxWidth="xl" className={list}>
        {backpacks.map((backpack) => (
          <Card
            title={backpack.title}
            description={backpack.description}
            photo={backpack.photo}
            price={backpack.price}
            discountPrice={backpack.discountPrice}
            discountPricePeriod={
              backpack.discountPricePeriod && backpack.discountPricePeriod.seconds
            }
            key={backpack.id}
            id={backpack.id}
            handleEdit={handleEdit}
          />
        ))}
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  backpacks: state.backpackList,
});
const mapDispatchToProps = { loadBackpackList };

export default connect(mapStateToProps, mapDispatchToProps)(BackpackList);
