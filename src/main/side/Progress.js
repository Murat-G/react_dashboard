import React from 'react';
import ProgressBar from './ProgressBar';
import {progressStyle} from './Progress.style';

const Progress = () => {
    return (
        <div style={progressStyle.container}>
            <div style={progressStyle.containerTop}>
               <p style={progressStyle.title}> HEDEFİN </p> 
            </div>
            <>
                <ProgressBar />
            </>
        </div>
    )
}

export default Progress;