import React from 'react';
import {Link} from 'react-router-dom';

class StartToPlay extends React.Component {
    render() {
        return (
            <div id='start' className='LandingPage-StartPlay'>
                <Link className='button' to="/game">{'play now'.toUpperCase()}</Link>
            </div>
        )
    }
}

export default StartToPlay;