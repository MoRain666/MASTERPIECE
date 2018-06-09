import React from 'react';
class GamePlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {screenshots:[
            require('../../../img/LandingPage/screenshots/gameplay1.jpg'),
            require('../../../img/LandingPage/screenshots/gameplay2.jpg'),
            require('../../../img/LandingPage/screenshots/gameplay3.jpg'),
            require('../../../img/LandingPage/screenshots/gameplay4.jpg')
        ]};
    }

    render(){
        const list = this.state.screenshots.map((item, index) =>{
            return <li key={index}><img src={item} alt={`gameplay${index + 1}`}/></li>
        })
        return <div id='gamePlay' className='LandingPage-GamePlay'>
            <h2>Here are a few screenshots of the gameplay</h2>
            <ul>
                {list}
            </ul>
        </div>
    }
}
export default GamePlay;