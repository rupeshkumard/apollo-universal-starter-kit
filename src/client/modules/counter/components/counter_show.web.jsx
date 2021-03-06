import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';

const CounterShow = ({ loading, count, addCount, reduxCount, onReduxIncrement }) => {

  if (loading) {
    return (
      <div className="text-center">
        Loading...
      </div>
    );
  } else {
    return (
      <div>
        <Helmet
          title="Apollo Starter Kit - Counter"
          meta={[{
            name: 'description',
            content: 'Apollo Fullstack Starter Kit - Counter example page'
          }]}/>
        <div className="text-center mt-4 mb-4">
          Current count, is {count.amount}. This is being stored server-side in the database and using Apollo
          subscription for real-time updates.
          <br/>
          <br/>
          <Button id="graphql-button" color="primary" onClick={addCount(1)}>
            Click to increase count
          </Button>
          <br/>
          <br/>
          <br/>
          <br/>
          Current reduxCount, is {reduxCount}. This is being stored client-side with Redux.
          <br/>
          <br/>
          <Button id="redux-button" color="primary" onClick={onReduxIncrement(1)}>
            Click to increase reduxCount
          </Button>
        </div>
      </div>
    );
  }
};

CounterShow.propTypes = {
  loading: PropTypes.bool.isRequired,
  count: PropTypes.object,
  addCount: PropTypes.func.isRequired,
  reduxCount: PropTypes.number.isRequired,
  onReduxIncrement: PropTypes.func.isRequired,
};

export default CounterShow;