import React, { useState, useEffect } from 'react'
import './Board.css'
import Node from './Node'
import { bfs, dfs, dijkstra, Astar, getShortestPath } from './Algorithm/Pathfinder';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const ROWS = 20;
const COLUMNS = 32;

function Board() {
    const [START_ROW, setStartRow] = useState(10);
    const [START_COL, setStartCol] = useState(6);
    const [FINISH_ROW, setFinishRow] = useState(10);
    const [FINISH_COL, setFinishCol] = useState(25);
    const [{algorithm, speed}, dispatch] = useStateValue();
    const [grid, setGrid] = useState([]);
    const [mouseDown, setMouseDown] = useState(false);
    const [setStart, setSetStart] = useState(false);
    const [setFinish, setSetFinish] = useState(false);

    const getInitGrid = () => {
        const grid = [];
        for (let row = 0; row < ROWS; row++) {
            const currentRow = [];
            for (let col = 0; col < COLUMNS; col++) {
                currentRow.push(createNode(col, row));
            }
            grid.push(currentRow);
        }
        return grid;
    }

    const createNode = (col, row) => {
        return {
            col,
            row,
            isStart: row === START_ROW && col === START_COL,
            isFinish: row === FINISH_ROW && col === FINISH_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };

    const handleMouseDown = (row, col) => {
        if(grid[row][col].isStart){
            setSetStart(true);
        } else if(grid[row][col].isFinish){
            setSetFinish(true);
        } else{
            const newGrid = getNewGridWithWallToggled(grid, row, col);
            setGrid(newGrid);
            setMouseDown(true);
        }
    }
    
    const handleMouseEnter = (row, col) => {
        if(setStart){
            console.log('set start to', row, col);
            document.getElementById(`node-${START_ROW}-${START_COL}`)
                    .className = 'node '
                    .concat(grid[START_ROW][START_COL].isWall ? 'node-wall' : '');
            document.getElementById(`node-${row}-${col}`)
                    .className += ' node-start';
            grid[START_ROW][START_COL].isStart = false;
            grid[row][col].isStart = true;
            setStartRow(row);
            setStartCol(col);
        } else if(setFinish){
            document.getElementById(`node-${FINISH_ROW}-${FINISH_COL}`)
                    .className = 'node '
                    .concat(grid[FINISH_ROW][FINISH_COL].isWall ? 'node-wall' : '');
            document.getElementById(`node-${row}-${col}`)
                    .className += ' node-finish';
            grid[FINISH_ROW][FINISH_COL].isFinish = false;
            grid[row][col].isFinish = true;
            setFinishRow(row);
            setFinishCol(col);
        } else{
            if (!mouseDown) return;
            // grid[row][col].isWall = !grid[row][col].isWall;
            const newGrid = getNewGridWithWallToggled(grid, row, col);
            setGrid(newGrid);
        }
    }
    
    const handleMouseUp = () => {
        setMouseDown(false);
        setSetStart(false);
        setSetFinish(false);
    }

    const getNewGridWithWallToggled = (grid, row, col) => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        if(node.isFinish) return grid;
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        return newGrid;
    };
    
    useEffect(() => {
        setGrid(getInitGrid());
    }, []);

    const animate = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, speed * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className +=
                    ' node-visited';
                    // console.log("visiting");
            }, speed * i);
        }
    }

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
            const node = nodesInShortestPathOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className += 
            ' node-shortest-path';
            }, 3 * speed * i);
        }
    }

    const findPath = () => {
        const visitedNodesInOrder = algorithm === 'bfs' ? bfs(grid, START_ROW, START_COL)
                                    : algorithm === 'dfs' ? dfs(grid, START_ROW, START_COL)
                                    : algorithm === 'dijkstra' ? dijkstra(grid, START_ROW, START_COL)
                                    : Astar(grid, START_ROW, START_COL);
        const nodesInShortestPathOrder = getShortestPath(grid, FINISH_ROW, FINISH_COL);
        animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const clearBoard = (delWall) => {
        let nodes = document.getElementsByClassName('node');
        for(let i = 0; i < nodes.length; i++){
            if(nodes[i].className.includes('node-note')) continue;
            nodes[i].className = 'node '
                                .concat(!delWall && 
                                    nodes[i].className.includes('node-wall') 
                                    ? 'node-wall' : '');
        }
        const newGrid = grid.map(row => row.map(node => {
            return {
                ...node,
                isWall: delWall ? false : node.isWall,
                previousNode: null,
                isVisited: false,
            }
        }));
        // const newGrid = grid.filter((row, idx) => idx % 2 === 1);
        console.log(newGrid);
        setGrid(newGrid);
        // console.log(grid);
        document.getElementById(`node-${START_ROW}-${START_COL}`).className = 'node node-start';
        document.getElementById(`node-${FINISH_ROW}-${FINISH_COL}`).className = 'node node-finish';
    }

    return (
        <div>
        <table className='board'>
            <tbody>
            {grid.length ? grid.map((row, rowIdx) => {
                return (
                    <tr className='row' key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                            // console.log("rewrite");
                            const {row, col, isWall, isStart, isFinish} = node;
                            return (
                                <Node 
                                    key={nodeIdx}
                                    row={row}
                                    col={col}
                                    isFinish={isFinish}
                                    isStart={isStart}
                                    isWall={isWall}
                                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                                    onMouseUp={() => handleMouseUp()}
                                ></Node>
                            )
                        })}
                    </tr>
                )
            }) : <div>Nothing here</div>}
            </tbody>
        </table>
        <button id='start-algorithm' className='hidden' onClick={findPath}>button</button>
        <button id='clear-board' className='hidden' onClick={() => clearBoard(true)}>clear</button>
        <button id='clear-path' className='hidden' onClick={() => clearBoard(false)}>clear</button>
        </div>
    )
}

export default Board;
