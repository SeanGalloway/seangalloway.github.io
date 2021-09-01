import React from 'react';
import '../css/ImageHolder.css';

function ImageHolder(props: {url: string}) {
    return(
        <>
            <div id={"profile-pic-container"}>
                <div id="top-right-box"></div>
                <div id="bottom-left-box"></div>
                <img id="medium-img" src={props.url} alt={"Profile"}/>
            </div>
        </>
    )
}

export default ImageHolder;