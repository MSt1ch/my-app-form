import React, { Component } from 'react';


class Input extends Component {
	state = {value: ''}

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  clickHandler = (e) => {
  	e.preventDefault();
  	// let element = document.getElementsByClassName("popup-wrap");
  	// element.classList.toggle("hidden");
  }
  render() {
  	const {value = undefined} = this.state

  	const {className, type, name, placeholder} = this.props
  	return (
			<div>
				{value && className === "fname" ? <div className="text">Привет: {value}</div> : <div className="hidden"></div>}
				<input
					className={className}
					type={type}
					name={name}
					placeholder={placeholder}
					value={className === "fname" ? value : undefined}
					onChange={className === "fname" ? this.handleChange : undefined}
					onClick={this.clickHandler}
				/>
			</div>
		);
  }
		
	
}

export default Input;