import '../styles/Works.css'
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Works(){
    return(
        <div className='page-container'>
            <h1>PROJECTS</h1>
            <h3>Over the years, we have been able to accompany the best.</h3>
            <p>Discover step by step how we were there to launch your favorite brands.</p>
            <div id="study-cases-container">
                <div className='study-case-card'>
                    <h5>PLATON</h5>
                    <Link to ="/works/platon-study-case"><button className='btn btn-dark'>more</button></Link>
                </div>

                <div className='study-case-card'>
                    <h5>SOLANE</h5>
                    <Link to ="/works/solane-study-case"><button className='btn btn-dark'>more</button></Link>
                </div>

                <div className='study-case-card'>
                    <h5>SEDAL</h5>
                    <Link to ="/works/sedal-study-case"><button className='btn btn-dark'>more</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Works;