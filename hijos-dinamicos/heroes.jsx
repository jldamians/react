import React from 'react'

var dataSource = [
	{name: 'Superman' , power: 'Fly with underwear'},
	{name: 'Batman'   , power: 'Belt with gadgets'},
	{name: 'Spiderman', power: 'Jump like a monkey'},
	{name: 'Hulk'     , power: 'Angry with anyone'}
]

class Heroes extends React.Component {
	state = {
		list: []
	}

	fetchData = () => {
		setTimeout(function() {
			//alert('cambiando...')
			this.setState({list: dataSource})
		}.bind(this), 2000)
	}

	handleReset = () => {
		this.setState({list: []})
	}

	handleFetch = () => {
		this.fetchData()
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		if( !this.state.list.length ) {
			return(
				<div>
					No Heroes!
					<br />
					<button onClick={this.handleFetch}>Fetch</button>
				</div>
			)
		} else {
			return(
				<div>
					<ul>
						{
							this.state.list.map(function(heroe, index){
								return(
									<li key={index}>
										{heroe.name} the {heroe.power}!
									</li>
								)
							})
						}
					</ul>
					<button onClick={this.handleReset}>Reset</button>
				</div>
			)
		}
	}
}

export default Heroes