import React, { useContext } from 'react';
import './Header.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import AlgorithmButton from './AlgorithmButton';

function Header() {
    const [{algorithm}, dispatch] = useStateValue();
    
    
    const setAlgorithm = (algo) => {
        dispatch({
            type: actionTypes.SET_ALGO,
            algorithm: algo,
        });
        // console.log(algorithm)
    }

    return (
        <div className='header'>
            <a className='title header_button' href='/'>Pathfinder Visualizer</a>
            <div className='pick-algorithm'>
                <AlgorithmButton
                    title='Breath-First Search'
                    isChosen={algorithm === 'bfs'}
                    onClick={() => setAlgorithm('bfs')}
                />
                <AlgorithmButton
                    title='Depth-First Search'
                    isChosen={algorithm === 'dfs'}
                    onClick={() => setAlgorithm('dfs')}
                />
                <AlgorithmButton
                    title='Dijkstra Algorithm'
                    isChosen={algorithm === 'dijkstra'}
                    onClick={() => setAlgorithm('dijkstra')}
                />
                <AlgorithmButton
                    title='A* Algorithm'
                    isChosen={algorithm === 'a-star'}
                    onClick={() => setAlgorithm('a-star')}
                />
            </div>
            <div className='tools'>
                <div className='clear_buttons'>
                    <div 
                        className='header_button clear_button'
                        onClick={() => document.getElementById('clear-board').click()}
                    >Clear Board</div>
                    <div 
                        className='header_button clear_button'
                        onClick={() => document.getElementById('clear-path').click()}
                    >Clear Path</div>
                </div>
                
                <div 
                    className='header_button start_button' 
                    onClick={() => document.getElementById('start-algorithm').click()}
                >Visualize</div>
            </div>
        </div>
    )
}

export default Header
