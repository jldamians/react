import React from 'react'
import ReactDOM from 'react-dom'
import Tasks from './tasks'
import Task from './task'

class ToDo extends React.Component {
	render() {
		return (
			<div>
				<Tasks>
					<Task ref='first' name='Introduction' done />
					<Task name='Chapter 1 - First component' done />
					<Task name='Chapter 2 - Properties' />
					<Task />
				</Tasks>
			</div>
		)
	}
}

export default ToDo