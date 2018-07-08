import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linksName: ['Gameplay', 'About developers', 'Who and what did'],
            linksRout: ['gamePlay', 'developers-info-container', 'duties-container']
        };
    }

    render() {
        const list = this.state.linksName.map((item, index) => {
            return <li key={index}><a href={`#${this.state.linksRout[index]}`}>{item}</a></li>;
        });
        return <div className='header-container'>
            <header className='header-item'>
                <div className="header-logo">{'masterpiece'.toUpperCase()}</div>
                <ul className='header-link'>
                    {list}
                </ul>
            </header>
            <div id='start' className='start-play'>
                <Link className='start-play-button' to="/pregame">{'play now'.toUpperCase()}</Link>
            </div>
        </div>
    }
}

export default Header;