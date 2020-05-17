import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.para1} {props.username}</p>
            <p>{props.para2}</p>
        </div>
    )
}

export default userOutput;