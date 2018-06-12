import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {linksName: ['Gameplay', 'About developers', 'Who and what did'],
                    linksRout: ['gamePlay', 'about', 'job']};
    }

    render(){
        const list = this.state.linksName.map((item, index)=>{
            return <li key={index}><a href={`#${this.state.linksRout[index]}`}>{item}</a></li>;
        });
        return <div className='LandingPage-Promo-and-Header'>
            <header className='LandingPage-Header'>
                <div className="LandingPage-Header-Logo"><a id='#top' href="#top">{'masterpiece'.toUpperCase()}</a></div>
                <ul className='LandingPage-Header-Links-List'>
                {list}
                </ul>
            </header>
            <div id='start' className='LandingPage-StartPlay'>
                <Link className='button' to="/game">{'play now'.toUpperCase()}</Link>
            </div>
        </div>
    }
}
export default Header;