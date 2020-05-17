import React from 'react';

const userInput = (props) => {
    return(
        <input type="text" onChange={props.changeMethod} defaultValue={props.userName}></input>
    )
}

export default userInput;