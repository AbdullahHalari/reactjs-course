import React,{Component}from 'react';

export const User = (props) => {
    return (
        <div>
            {props.name} {props.email} {props.contact}
        </div>
    );
};
export default User
