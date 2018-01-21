import React, { Component } from 'react';


class Input extends Component {
	state = {value: ''}

  // handleChange = (e) => {
  //   this.setState({value: e.target.value})
  // }
  // clickHandler = (e) => {
  // 	e.preventDefault();
  // 	// let element = document.getElementsByClassName("popup-wrap");
  // 	// element.classList.toggle("hidden");
  // }
  render() {
  	 // const {value = undefined} = this.state

  	const {className, type, name, placeholder, onClick, onChange} = this.props
  	return (
			<div>
				
				<input
					className={className}
					type={type}
					name={name}
					placeholder={placeholder}
					// value={className === "fname" ? value : undefined}
					 onChange={onChange}
					onClick={onClick}
				/>
			</div>
		);
  }
		
	
}

export default Input;