import React from 'react'
import ReactDOM from 'react-dom'
import Messages from './messages'
import Links from './link'

class App extends React.Component {
	render() {
		const url = 'http://soyjavi.com'

		return (
			<div>
				<Messages />
				<nav>
					<Links url={url} color='red' caption='My site' />
					<br />
					<Links url='https://github.com/soyjavi' color='green' caption='My github' />
					<br />
					<Links url='https://github.com/saavedrajl' caption='saavedrajl' />
				</nav>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))