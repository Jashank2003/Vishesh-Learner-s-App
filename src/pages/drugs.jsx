import React from 'react';

function DrugList({ drugs }) {
  return (
    <div>
      <h2 className='heading'>Legal Drugs for Sale to Hospitals</h2>
      <ul>
        {drugs.map(drugs => ( 
        <>
          <li key={drugs.id}>
          <img src={drugs.imgUrl} alt={drugs.description}/>
            {drugs.name} - {drugs.description}
          {drugs.mfgDate} - {drugs.expDate}
          </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default DrugList;