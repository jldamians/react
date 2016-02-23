import React from 'react'

var dataSource = [
	{name: 'Superman' , power: 'Fly with underwear'},
	{name: 'Batman'   , power: 'Belt with gadgets'},
	{name: 'Spiderman', power: 'Jump like a monkey'},
	{name: 'Hulk'     , power: 'Angry with anyone'}
]

class Heroes extends React.Component {
	componentDidMount() {
		setTimeout(function() {
			this.setState({list: dataSource})
		}.bind(this), 5000)
	}

	state = {
		list: []
	}

	render() {
		if ( !this.state.list.length ) {
			return (<div>No Heroes!</div>)
		}

		return (
			<ul>
				{
					this.state.list.map(function(heroe, index) {
						return (
							<li key={index}>
								{heroe.name} the {heroe.power}!
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default Heroes