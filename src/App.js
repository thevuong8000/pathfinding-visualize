import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Board from './Board';
import Node from './Node'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function App() {
	const [speedText, setSpeedText] = useState('Average');
	const [{speed}, dispatch] = useStateValue();
	const changeSpeed = (event) => {
		setSpeedText(event.target.value);
		let newSpeed = 0;
		switch(event.target.value){
			case 'Low':
				newSpeed = 60;
				break;
			case 'Average':
				newSpeed = 20;
				break;
			default:
				newSpeed = 5;
		}
		dispatch({
			type: actionTypes.SET_SPEED,
			speed: newSpeed,
		})
	}
	return (
		<div className="App">
			<Header></Header>
			<div className='title_text'><h1>Choose an Algorithm and Visualize</h1></div>
			<div className='visualizer'>
				<div className='options'>
					<div className='opt'>
						<h3>Speed</h3>
						<FormControl className='speed'>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={speedText}
								onChange={changeSpeed}
							>
								<MenuItem value='Low'>Slow</MenuItem>
								<MenuItem value='Average'>Average</MenuItem>
								<MenuItem value='Fast'>Fast</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
				<Board></Board>
				<div className='note'>
					<div className='note_opt'>
						<Node 
							key='unvisited-note'
							isNote={true}
							onMouseDown={() => {}}
							onMouseEnter={() => {}}
							onMouseUp={() => {}}
						></Node>
						<h3>Unvisited Node</h3>
					</div>
					<div className='note_opt'>
						<Node 
							key='visited-note'
							isNote={true}
							isVisited={true}
							onMouseDown={() => {}}
							onMouseEnter={() => {}}
							onMouseUp={() => {}}
						></Node>
						<h3>Visited Node</h3>
					</div>
					<div className='note_opt'>
						<Node 
							key='wall-note'
							isNote={true}
							isWall={true}
							onMouseDown={() => {}}
							onMouseEnter={() => {}}
							onMouseUp={() => {}}
						></Node>
						<h3>Wall</h3>
					</div>
					<div className='note_opt'>
						<Node 
							key='path-note'
							isNote={true}
							isPath={true}
							onMouseDown={() => {}}
							onMouseEnter={() => {}}
							onMouseUp={() => {}}
						></Node>
						<h3>Path</h3>
					</div>
				</div>
			</div>
		</div>

	);
}

export default App;
