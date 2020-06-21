import React from 'react';

const Card = (props) => {
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={props.image} alt='avart' />
                </div>  
            </div>
        </div>
);};
export default Card;

            