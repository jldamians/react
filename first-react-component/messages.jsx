import React from 'react'
import Hello from './hello'

class Messages extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello React</h1>
				<Hello name='Luis' />
			</div>
		)
	}
}

export default Messages	