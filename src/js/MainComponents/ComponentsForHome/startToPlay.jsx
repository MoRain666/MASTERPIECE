import React from 'react';
class StartToPlay extends React.Component{
    render(){
        return <div id='start' className='LandingPage-StartPlay'>
            <button><a href="/game">{'play now'.toUpperCase()}</a></button>
        </div>
    }
}
export default StartToPlay;