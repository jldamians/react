import React from 'react'
import Task from './task'

class ToDo extends React.Component {
	render() {
		return (
			<ul>
				<Task name='Introduction' done />
				<Task name='Chapter 1 - First component' done />
				<Task name='Chapter 2 - Properties' done={false} />
				<Task />
			</ul>
		)
	}
}

export default ToDo