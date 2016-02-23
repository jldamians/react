import React from 'react'

class Task extends React.Component {
	// definimos los tipos de datos para 'name' y 'done'
	// definimos que 'name' es requerido
	static propTypes = {
		name: React.PropTypes.string.isRequired,
		done: React.PropTypes.bool
	}

	// definimos el valor por defecto para 'done'
	static defaultProps = {
		done: false
	}

	// definimos estados para el componente
	state = {
		updated: false
	}

	// definimos el evento click
	// cuando el estado 'updated' sea modificado, se agregara un nuevo elemento 'small' a 'li'
	// son utiles para contener datos en el componente
	handleClick = (event) => {
		this.setState({updated: true})
	}

	render() {
		return (
			<li className={this.props.done ? 'done' : null} onClick={this.handleClick}>
				{this.props.name}&nbsp;
				{this.state.updated ? <small>(Updated...)</small> : null}
			</li>
		)
	}
}

export default Task