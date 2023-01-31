import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            {err && <h2>{err}</h2>}

            <button onClick={handleClick}>Fetch data</button>

            {isLoading && <h2>Loading...</h2>}

            <div>
                <h2>{activityData}</h2>
                <h2>{priceData}</h2>
                <h2>{participantsData}</h2>
                <h2>{typeData}</h2>
            </div>

        </div>
    );
}