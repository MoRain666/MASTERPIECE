import React from 'react';
import {Link} from 'react-router-dom';
class NotFound extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            information:'Hi, what have you forgotten here? Return to the start page!'
        };
    }
    typeWriter(selector) {
        let currentChar = 0;
        let txt = this.state.information;
        let speed = 150;
        const container = document.querySelector(selector);
        function writer(){
            if (currentChar < txt.length) {
                container.textContent += txt.charAt(currentChar);
                currentChar++;
                setTimeout(writer, speed);
            }
        }
        writer();
    }
    
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', this.typeWriter.bind(this, '#NotFound'));
    }

    render(){
        return <div  className="NotFound">
            <h2 id='NotFound'> </h2>
            <Link to="/">{'to Landing Page'.toUpperCase()}</Link>
            <img src={require('../../img/NotFound//384636.png')} alt='wrong way'/>
      </div>
    }
}
export default NotFound;