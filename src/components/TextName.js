import React, { Component } from 'react';


class TextName extends Component {

	render() {

		const {value} = this.props
		return (
			<div className="text">
				Привет: 
				{this.props.text}
				
			</div>

		);
	}
		
	
}

export default TextName;