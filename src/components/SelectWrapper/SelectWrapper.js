import React from "react";
import Select from "react-select";
import "./SelectWrapper.css";

const SelectWrapper = (props) => {
    return (
        <Select
        name="form-field-name"
        value={props.select}        
        options={props.options}
        onChange={props.onChange}
      />
    )
};

export default SelectWrapper;
