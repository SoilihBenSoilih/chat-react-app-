import React, { Component, Fragment } from 'react'

class Formulaire extends Component {

  state = {
      message:'',
      length: this.props.length
  }

  createMessage = () => {
      const { addMessage, pseudo, length } = this.props

      const message = {
          pseudo : pseudo,
          message : this.state.message
      }

      addMessage(message)

      
     //reset
     this.setState({ message:'', length })
  }

  handleChange = (event) => {
      const message = event.target.value
      this.state.message = message
      const length = this.props.length - message.length
      this.state.length = length
      this.setState({ message, length })
  }

  handleKeyUp = (event) => {
        if(event.key === 'Enter'){
            this.createMessage()
        }
  }

  handleSubmit = (event) => {
     event.preventDefault();
     this.createMessage()

  }

  render () {

    return (
      <Fragment>
          <form 
            className="form"
            onSubmit = {this.handleSubmit}>
            <textarea 
            required
            maxlength={this.state.length}
            value={this.state.message}
            onChange = {this.handleChange}
            onKeyUp = {this.handleKeyUp} />
            <div className="info">
                {this.state.length}
            </div>
            <button type="submit">
                ENVOYER!
            </button>
          </form>
      </Fragment>
    )
  }
}

export default Formulaire
