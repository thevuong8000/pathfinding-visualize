import React from 'react';
import './Node.css'

function Node({ row, col, isFinish, isStart, isWall, 
    onMouseDown, onMouseEnter, onMouseUp, isVisited, isPath, isNote }) {
    const extraClassName = (isFinish ? 'node-finish'
                        : isStart ? 'node-start'
                        : isWall ? 'node-wall'
                        : isVisited ? 'note-visited'
                        : isPath ? 'note_path'
                        : '').concat(isNote ? '   node-note' : '');
    // console.log("render",row,col,`node ${extraClassName}`);
    // if(row > 0 && col > 0) console.log(document.getElementById(`node-${0}-${0}`).className);
    return (
        <td 
            id={`node-${row}-${col}`} 
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={onMouseUp}
            onDragStart={(e) => e.preventDefault()}
        ></td>
    )
    
}

export default Node
