import React from 'react';
import '../inputs/inputs.css';

const inputs = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value)} 
                value={props.value} 
                type={props.type} 
                placeholder={props.placeholder} />
        </div>
    );
};

export default inputs;