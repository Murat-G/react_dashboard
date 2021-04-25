import React from 'react';
import {workStyle} from './WorkingElement.style';

const WorkingElement = ({item}) => {
    return (
        <div style={workStyle.container}>
            <div style={workStyle.containerLeft}>
                <div style={workStyle.imageContainer}>
                    <img src={item.imageURL} alt="1"  width="80%" height="auto" />
                </div>
                <div style={workStyle.topicContainer}> 
                    <p style={workStyle.topicText}>{item.name}</p>
                    <p style={workStyle.topicText}>{item.subject}</p>    
                    <p style={workStyle.topicText}>{item.title}</p>    
                </div>    
            </div>
            
            <div style= {workStyle.containerRight}>
                <div style={workStyle.completeContainer}> 
                    <p style={workStyle.dateText}>Takvime göre</p>
                    <p style={workStyle.dateText}>{item.date} gün geridesin</p>    
                    <p style={workStyle.completeButton}>Eksiğini Tamamla</p>    
                </div>  
                <div style={workStyle.gradeContainer}> 
                    <div style={workStyle.gradeSubContainer}>
                        <p style={workStyle.topText}> % {item.level1} </p>
                        <p style={workStyle.bottomText}> % {item.level2} </p>
                        <p style={workStyle.bottomText}> Yeterlik </p>
                    </div>
                    <div style={workStyle.gradeSubContainer}>
                        <img 
                            src="http://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Pie-Chart-PNG-Transparent-Image.png" 
                            alt='grfk'
                            width="90em"
                            height="auto"
                        />
                    </div>
                    <div style={workStyle.gradeSubContainer}>
                        <p style={workStyle.topText}> % {item.level3} </p>
                        <p style={workStyle.bottomText}> % {item.level4} </p>
                        <p style={workStyle.bottomText}> Kapsam </p>
                    </div>
                </div>    
            </div>

        </div>
    )
}

export default WorkingElement;