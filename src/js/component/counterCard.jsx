import React from "react";

const CounterCard = (props) => {

	return (
		<>
            <div className="card d-flex justify-content-center align-items-center me-2" style={{width: '4em', height: '4em'}}>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
		</>
	);
};

export default CounterCard;
