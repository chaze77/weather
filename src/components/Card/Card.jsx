import React, { useEffect, useState } from "react";
import { API_KEY } from "../../settings/settings";

const Card = ({ city, dispatch }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [city]);

  if (!data) {
    return null;
  }

  const { name, weather, main } = data;
  const { descripton, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const handleOnDelete = () => {
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const handleOnEdit = () => {
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
  };

  return (
    <div className="card">
      <div className="action_btn_wrap">
        <button className="action_btn" onClick={handleOnDelete}>
          X
        </button>
        <button className="action_btn" onClick={handleOnEdit}>EDIT</button>
      </div>
      <div className="maininfo">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div className="title">{name}</div>
        <div className="descripton">{descripton}</div>
        <div className="temperature">{Math.ceil(temp)}</div>
      </div>
      <div className="information">
        <div>humidity:{humidity}</div>
        <div>feels like:{feels_like} </div>
      </div>
    </div>
  );
};

export default Card;
