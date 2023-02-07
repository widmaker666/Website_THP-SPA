import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import worksList from '../data/worksList';

function StudyCase(){

    const studyCaseSlug = useParams().studyCaseSlug;
    const [ studyToDisplay, setStudyToDisplay ] = useState(worksList.find(work => work.slug === studyCaseSlug));
    
    return(
        <div className='page-container'>
            {/* <h1>Current page : WORK {studyToDisplay.name}</h1> */}
            <h1>{studyToDisplay.name}</h1>
            <h3>{studyToDisplay.title}</h3>
            <p>{studyToDisplay.description}</p>
        </div>
    )
}

export default StudyCase;