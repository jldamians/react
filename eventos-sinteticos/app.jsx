import React from 'react'
import ReactDOM from 'react-dom'
import Links from './link'

class App extends React.Component {
	render() {
		return (
			<div>
				<Links url='https://github.com/saavedrajl' caption='saavedrajl' />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))