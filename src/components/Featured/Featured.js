import React from 'react';
import Button from '@mui/material/Button';



function Featured(props){
    return(
        <div id={props.id}>
            <div id="featured_container">

                <Button variant = "contained" id ="reelButton">Play</Button>
                <h4>featured demo</h4>
                <p>description</p>
            </div>
        </div>
    )
}
export default Featured;