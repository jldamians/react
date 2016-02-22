import React from 'react'
import ReactDOM from 'react-dom'
import Image from './image'

class App extends React.Component {
	render() {
		return (
			<div>
				<Image src='https://avatars1.githubusercontent.com/u/7682177?v=3&s=460' alt='Amazing Image' />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))