import React from 'react'
import ReactMixin from 'react-mixin'

import MixinES from './mixin.es'
import MixinFR from './mixin.fr'

class Hello extends React.Component{
	componentDidMount() {
		console.log('Hello World!')
	}

	render() {
		return <span>Mixin!</span>
	}
}

ReactMixin(Hello.prototype, MixinES)
ReactMixin(Hello.prototype, MixinFR)

export default Hello