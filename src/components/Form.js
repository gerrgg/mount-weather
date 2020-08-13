import React, { Component } from 'react'
import '../sass/form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'

class Form extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
            <div id="search-location" className="wrapper">
                <form>
                    <button type="button"><FontAwesomeIcon icon={faLocationArrow} /></button>
                    <input id="search-bar" type="text" name="query" placeholder="Petoskey, Michigan" />
                    <button type="button"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        )
    }
}

export default Form