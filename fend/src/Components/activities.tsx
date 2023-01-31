import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Activities() {
  const [activityData, setActivityData] = useState("");
  const [typeData, setTypeData] = useState("");
  const [participantsData, setparticipantsData] = useState('');
  const [priceData, setPriceData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const json = await response.json();
      setActivityData(json.activity);
      setTypeData(json.type);
      setparticipantsData(json.participants);
      setPriceData(json.price);
    }
    fetchData();
  }, []);  
  // console.log(typeData);
  
  return (

    <div>
      <p>activity</p>{activityData}<br/>
      <p>type of activity</p>{typeData}<br/>
      <p>how many people</p>{participantsData}<br/>
      <p>is it free</p>{priceData}
    </div>
  );
}