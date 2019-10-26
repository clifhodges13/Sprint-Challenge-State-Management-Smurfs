import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import Smurf from './Smurf';

function SmurfsList(props) {

  useEffect(() => {
    props.getSmurfs()
  }, [props.isPosting, props.delete])

  return (
    <div>
      {props.smurfs.map((smurf, index) => {
        return <Smurf key={index} smurf={smurf} />
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    isPosting: state.isPosting,
    delete: state.delete
  }
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfsList);