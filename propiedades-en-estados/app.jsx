import React from 'react'
import ReactDOM from 'react-dom'
import Count from './count'

class App extends React.Component {
	render() {
		return (
			<div>
				<Count total={0} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))