import React from 'react'
import './AlgorithmButton.css'

function AlgorithmButton({title, onClick, isChosen}) {
    return (
        <div 
            className={'algorithm header_button' + (isChosen ? ' chosen_algo' : '')} 
            onClick={onClick}
        >
            <h3>{title}</h3>
        </div>
    )
}

export default AlgorithmButton
