import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom'


class Connexion extends Component {

    state = {
        pseudo:'',
        goTochat:false
    }

    handleChange = (event) => {
        const pseudo = event.target.value
        this.state.pseudo = pseudo
        this.setState({ pseudo })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ goTochat : true })
    }

    render() {

        if(this.state.goTochat === true && this.state.pseudo !== ''){
           return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return(
            <Fragment>
                <div className="connexionBox">
                    <form className="connexion" onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="Pseudo"
                        value={this.state.pseudo} 
                        onChange={this.handleChange}
                        required/>
                        <button type="submit">GO</button>
                    </form>
                </div>
            </Fragment>
        )
    }

}

export default Connexion;