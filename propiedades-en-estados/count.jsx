import React from 'react'

class Count extends React.Component {
	state = {
		count: this.props.total
	}

	handleClick = (event) => {
		this.setState({count: this.state.count + 1})
	}

	render() {
		return <small onClick={this.handleClick}>{this.state.count}</small>
	}
}

export default Count

