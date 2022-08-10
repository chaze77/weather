import React, { useEffect, useReducer } from "react";
import CardList from "./components/CardList/CardList";
import Input from "./components/Input/Input";

const App = () => {
  const initialState = {
    inputValue: "",
    editingCity: "",
    citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_CITY": {
        const newState = {
          ...state,
          citiesList: [...state.citiesList, action.payload],
        };
        return newState;
      }
      case "DELETE_CITY": {
        const oldArray = state.citiesList;
        const newArray = oldArray.filter((item) => item !== action.payload);

        console.log("action.payload", action.payload);
        
        return { ...state, citiesList: newArray };
      }

      case "CHANGE_INPUT_VALUE": {
        return { ...state, inputValue: action.payload };
      }

      case "RESET_INPUT_VALUE": {
        console.log("new", initialState.inputValue);
        return { ...state, inputValue: initialState.inputValue };
      }

      case "EDIT_CITY": {
        return {
          ...state,
          inputValue: action.payload,
          editingCity: action.payload,
        };
      }
      case "EDIT_CITY_DONE": {
        const { editingCity } = state;
        const oldArray = state.citiesList;
        const filteredArray = oldArray.filter((item) => item !== editingCity);
        const newArray = [...filteredArray, action.payload];

        console.log("action.payload", action.payload);

        return {
          ...state,
          citiesList: newArray,
          inputValue: initialState.inputValue,
          editingCity: initialState.editingCity,
        };
      }

      default:
        return initialState;
    }
  };
  console.log(initialState.inputValue);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList, inputValue, editingCity } = state;
  console.log("state", state);
  console.log("initialState", initialState);

  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);

  return (
    <div className="container">
      <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
      <CardList citiesList={citiesList} dispatch={dispatch}  />
    </div>
  );
};

export default App;
