import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <>
      <button onClick={handleGetData}>Display Smurf Results</button>
      {/* <form>
        <input
          name="name"
          type="text"
          placeholder="Smurf's Name"
          value={}
          onChange={}
        />
        <button>Create a Smurf</button>
      </form> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList,
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(SmurfForm);
