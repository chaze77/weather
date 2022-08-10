import React from 'react';
import Card from '../Card/Card';

const CardList = ({citiesList, dispatch}) => {
    return (
        <div className="cardposition">
        {citiesList.map((city) => (
          <Card key={city} city={city} dispatch={dispatch}/>
        ))}
      </div>
    );
};

export default CardList;