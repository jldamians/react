import React from 'react'

import MixinES from './mixin.es'
import MixinFR from './mixin.fr'

const Hello = React.createClass({
	mixins: [MixinES, MixinFR],

	componentDidMount: function(){
		console.log('Hello World!')
	},

	render: function() {
		return <span>Mixin!</span>
	}
})

export default Hello