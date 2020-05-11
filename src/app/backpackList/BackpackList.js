import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBackpacks } from './action';
import AddIcon from '@material-ui/icons/Add';

import Backpack from './card/Card';
import { list } from './backpackList.module.scss';

const BackpackList = ({ loadBackpacks, backpacks }) => {
  useEffect(() => {
    loadBackpacks();
  }, []);
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }} className="padding">
      <Typography align="center" gutterBottom>
        <Button component={Link} to="/add" variant="contained" color="primary">
          <AddIcon />
          add backpack
        </Button>
      </Typography>
      <Container maxWidth="xl" className={list}>
        {backpacks.map((backpack) => (
          <Backpack
            title={backpack.title}
            description={backpack.description}
            photo={backpack.photo}
            price={backpack.price}
            discountPrice={backpack.discountPrice}
            discountPricePeriod={
              backpack.discountPricePeriod && backpack.discountPricePeriod.seconds
            }
            key={backpack.id}
          />
        ))}
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  backpacks: state.backpackList,
});
const mapDispatchToProps = { loadBackpacks };

export default connect(mapStateToProps, mapDispatchToProps)(BackpackList);
