import React, { useState } from 'react';
import '../activitiesStyle.css';
import Navbar from './navbar';
import Select from "react-select";

export default function Activities() {
    const [activityData, setActivityData] = useState("");
    // const [typeData, setTypeData] = useState("");
    const [participantsData, setparticipantsData] = useState('');
    const [priceData, setPriceData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [selected, setSelected] = useState(null);

    const handleChange = (selectedOption: any) => {
        setSelected(selectedOption);
    }

    const options = [
        { value: "", label: "" },
        { value: "busywork", label: "Busywork" },
        { value: "social", label: "Social" },
        { value: "charity", label: "Charity" },
        { value: "education", label: "Education" },
        { value: "recreational", label: "Recreational" }
    ];

    const handleClick = async () => {
        setIsLoading(true);

        try {
            /* @ts-ignore */
            if (selected.value != null) {
                /* @ts-ignore */
                const bla = "https://www.boredapi.com/api/activity" + "?type=" + selected.value;
                const response = await fetch(bla);
                const result = await response.json();
                setActivityData(result.activity);
                setparticipantsData(result.participants);
                setPriceData(result.price);
                setSelected(result.type);
            }

        } catch (err) {
            /* @ts-ignore */
            setErr("first select type of activity you would like to try");
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div>
            <Navbar />
            {err && <h2>{err}</h2>}
            <h1 className='h1Main'>Clicking on this button will give you some innuendo</h1>
            <button className='button' onClick={handleClick}>Get Inspired</button>

            {isLoading && <h2>Loading...</h2>}

            <div className='mainDiv'>
                <h2 className='children'>Activity: {activityData}</h2>
                {/* <h2 className='children'>Price: {priceData}</h2> */}
                <h2 className='children'>Participants: {participantsData}</h2>
                <Select className='select' options={options} onChange={handleChange} />
            </div>

        </div>
    );
}