import React from 'react'

class Content extends React.Component {
	render() {
		return (
			<section>
				<ul>
					{this.props.children}
				</ul>
				<span>Tasks: {this.props.children.length}</span>
			</section>
		)
	}
}

export default Content