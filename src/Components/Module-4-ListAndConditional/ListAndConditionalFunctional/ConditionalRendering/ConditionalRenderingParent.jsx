import React, { useState } from 'react';
import { ConditionalRenderingChild, setPersonData } from './ConditionalRenderingChild';

export const ConditionalRenderingParent = () => {
    
    const [personData, setpersonData] = useState({
        person: [
            { name: 'khan', age: 20 },
            { name: 'shaikh', age: 21 },
            { name: 'pathan', age: 22 },
            
        ]
    });
    const handleOnParaClick = () => {
        setPersonData({
            person: [
                { name: 'khan', age: 20 },
                { name: 'shaikh', age: 21 },
                { name: 'pathan', age: 22 },

            ],
        });
    };
    
    
        return (
            <div>
                {/* <button on onClick={handlerNameChange}>Change State</button> */}
                <ConditionalRenderingChild
                    first={personData.person[0].name}
                    Age={personData.person[0].age}
                    paraClick={handleOnParaClick}
                />
                <ConditionalRenderingChild
                    first={personData.person[1].name}
                    Age={personData.person[1].age}
                />
                <ConditionalRenderingChild
                    first={personData.person[2].name}
                    Age={personData.person[2].age}
                />
            </div>
        );
    }


