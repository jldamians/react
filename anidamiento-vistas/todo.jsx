import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Content from './content'
import Task from './task'

class ToDo extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Content>
					<Task ref='first' name='Introduction' done />
					<Task name='Chapter 1 - First component' done />
					<Task name='Chapter 2 - Properties' />
				</Content>
				<footer>Copyright...</footer>
			</div>
		)
	}
}

export default ToDo