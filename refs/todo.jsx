import React from 'react'
import ReactDOM from 'react-dom'
import Task from './task'

class ToDo extends React.Component {
	componentDidMount() {
		const el = ReactDOM.findDOMNode(this.refs.first)
		console.log(el)
	}

	render() {
		return (
			<ul>
				<Task ref='first' name='Introduction' done />
				<Task name='Chapter 1 - First component' done />
				<Task name='Chapter 2 - Properties' />
				<Task />
			</ul>
		)
	}
}

export default ToDo