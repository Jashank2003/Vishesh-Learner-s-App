import React from 'react';

function Card({item}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={item.name} src={process.env.PUBLIC_URL + item.imgPath} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Card;