import React, { Component } from 'react';

export const ConditionalRenderingChild = (item) => {
    return (
        <div>
            <p onClick={item.paraClick}>my name is {item.first} and {item.Age } year old.</p>
        </div>
    );
}


