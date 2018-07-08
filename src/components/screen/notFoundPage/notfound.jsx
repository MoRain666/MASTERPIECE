import React from 'react';
import {Link} from 'react-router-dom';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            information: 'Hi, what have you forgotten here? Return to the start page!'
        };
    }

    typeWriter(selector) {
        let currentChar = 0;
        let txt = this.state.information;
        let speed = 150;
        const container = document.querySelector(selector);

        function writer() {
            if (currentChar < txt.length) {
                container.textContent += txt.charAt(currentChar);
                currentChar++;
                setTimeout(writer, speed);
            }
        }

        writer();
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', this.typeWriter.bind(this, '#NotFound'));
    }

    render() {
        return <div className="not-found-page-container">
            <h2 id='NotFound' className="not-found-heading"/>
            <img src={require('./img/superman.png')} alt='wrong way'/>
            <Link to="/">{'to Landing Page'.toUpperCase()}</Link>
        </div>
    }
}

export default NotFound;