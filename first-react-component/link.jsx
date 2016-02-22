import React from 'react'

/*class Link extends React.Component {
	render() {
		return (
			<a href={this.props.url}>
				{this.props.caption}
			</a>
		)
	}
}*/

var Link = React.createClass({
	render: function(){
		return(
			<a href={this.props.url} className={this.props.color}>
				<label>{this.props.caption}</label>
			</a>
		) 
	}
})

export default Link