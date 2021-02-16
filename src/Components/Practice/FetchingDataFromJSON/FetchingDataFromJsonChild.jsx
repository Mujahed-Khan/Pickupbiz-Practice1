import React from 'react';
import {Card, Button} from 'react-bootstrap'
export const FetchingDataFromJsonChild = ({itemCurrent}) => {
    return (
        <div>
            <div class="card" style={{width:'18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
                    <h5 class="card-title">{{ itemCurrent.name }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Button varient="primary">Click Me</Button>
  </div>
</div>
        </div>
    );
};

