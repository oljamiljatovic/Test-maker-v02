import React from 'react';
import Option from './Option';
const Options = (props)=> {
    return (
        <div>
             <button
             onClick = {props.handleDeleteOptions}>
                RemoveAll
            </button>
            {props.options.length === 0 && <p>Please add</p>}

        {
            props.options.map((option)=>(

            <Option
            key={option}
            optionText ={option}
            handleDeleteOption = {props.handleDeleteOption}
            />
            ))
        }
        </div>
    );
};

export default Options;