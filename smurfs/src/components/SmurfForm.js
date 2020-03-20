import React, { useState } from "react";
import { connect } from "react-redux";
import { getData, postData } from "../actions";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  // number can't use string
  const [age, setAge] = useState(null);
  const handleAgeChange = e => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const [height, setHeight] = useState("");
  const handleHeightChange = e => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  // get server data
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  // send data to server
  const handleSubmit = e => {
    e.preventDefault();
    props.postData({ name: name, age: age, height: height, id: Date.now() });
    props.getData();
  };
  return (
    <>
      <button onClick={handleGetData}>Display Smurf Results</button>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Smurf's Name"
          value={props.name}
          onChange={handleNameChange}
        />
        <input
          name="age"
          type="tel"
          placeholder="Age"
          value={props.age}
          onChange={handleAgeChange}
        />
        <input
          name="height"
          type="text"
          placeholder="Height (cm)"
          value={props.height}
          onChange={handleHeightChange}
        />
        <button onClick={handleSubmit}>Create a Smurf</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList,
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData, postData })(SmurfForm);
