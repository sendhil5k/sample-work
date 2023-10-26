import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosFetch = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Axios fetch </h3>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default AxiosFetch;