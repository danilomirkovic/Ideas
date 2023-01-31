import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../activitiesStyle.css';
import Navbar from './navbar';

export default function Activities() {
    const [activityData, setActivityData] = useState("");
    const [typeData, setTypeData] = useState("");
    const [participantsData, setparticipantsData] = useState('');
    const [priceData, setPriceData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');


    const handleClick = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('http://www.boredapi.com/api/activity/');

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();

            setActivityData(result.activity);
            setparticipantsData(result.participants);
            setPriceData(result.price);
            setTypeData(result.type);
        } catch (err) {
            /* @ts-ignore */
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div>
             <Navbar />
            {err && <h2>{err}</h2>}
            <h1 className='h1Main'>Clicking on the button will give you some suggestion on what you can do</h1>
            <button className='button' onClick={handleClick}>Get Inspired</button>

            {isLoading && <h2>Loading...</h2>}

            <div className='mainDiv'>
                <h2 className='children'>Activity: {activityData}</h2>
                {/* <h2 className='children'>Price: {priceData}</h2> */}
                <h2 className='children'>Participants: {participantsData}</h2>
                {/* <select>
                    <option value='busywork'>Filter</option>
                    <option value='social'>Social</option>
                    <option value='charity'>Charity</option>
                    <option value='recreational'>Recreational</option>
                    <option value='education'>Education</option>
                </select> */}
            </div>

        </div>
    );
}