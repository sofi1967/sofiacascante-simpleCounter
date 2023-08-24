import React, {useState, useEffect} from "react";
import CounterCard from "./counterCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const SecondsCounter = () => {

    const [seconds, setSeconds] = useState(0)
	const [secondsString, setSecondsString] = useState("")

    useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		  }, 1000);
		return () => clearInterval(interval);
    }, []);

    useEffect(() => {
		setSecondsString(String(seconds).padStart(6, '0') )
    }, [seconds]);
	
	return (
		<>
					
			<div className="d-flex justify-content-center mt-3">
				<CounterCard content={<FontAwesomeIcon icon={faClock}/>}/>
				<CounterCard content={secondsString[0]}/>
				<CounterCard content={secondsString[1]}/>
				<CounterCard content={secondsString[2]}/>
				<CounterCard content={secondsString[3]}/>
				<CounterCard content={secondsString[4]}/>
				<CounterCard content={secondsString[5]}/>
			</div>
		</>
	);
};

export default SecondsCounter;
