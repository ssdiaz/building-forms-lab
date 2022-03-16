// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="name"
            onChange={this.handleChange} 
            value = {this.state.name} />
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({type: "ADD_BAND", payload: formData })
  }
}

export default BandInput
