import React, { useState } from "react";

const Input = ({ dispatch, inputValue, editingCity }) => {
  // const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };

  const handleOnAdd = () => {
    dispatch({
      type: "ADD_CITY",
      payload: inputValue,
    });
    // dispatch({
    //   type: "RESET_INPUT_VALUE",
    //   payload: inputValue,
    // });
  };

  const handleOnDone = () => {
    dispatch({
      type: "EDIT_CITY_DONE",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE",
      payload: inputValue,
    });
  };

  

  return (
    <div className="inputWrap">
      <input className="inp" onChange={handleOnChange} value={inputValue} />
      

      {editingCity ? (
        <button className="btn" onClick={handleOnDone}>
          done
        </button>
      ) : (
        <button className="btn" onClick={handleOnAdd}>
          +
        </button>
      )}
    </div>
  );
};

export default Input;
