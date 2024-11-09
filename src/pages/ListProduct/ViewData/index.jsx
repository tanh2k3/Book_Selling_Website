import React from 'react';
import CardItem from '../../../components/CardItem';
import './styles.css';

function ViewData({ data = [] }) {

    return (
        <div className="viewdata">
            <h1>View Data</h1>
            { data.length === 0 && <p>No data</p> }
            <div className="datacontainer">
            {data.map((book, index) => (
                <CardItem key={index} item={book} />
            ))}
            </div>
        </div>
    )
  }
  
  export default ViewData;
  