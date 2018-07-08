import React from 'react';

class GamePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshots: [
                require('../img/screenshots/gameplay1.jpg'),
                require('../img/screenshots/gameplay2.jpg'),
                require('../img/screenshots/gameplay3.jpg'),
                require('../img/screenshots/gameplay4.jpg')
            ]
        };
    }

    render() {
        const list = this.state.screenshots.map((item, index) => {
            return <li key={index}><img src={item} alt={`gameplay${index + 1}`}/></li>
        });
        return <div id='gamePlay' className='gamePlay'>
            <h2>Here are a few screenshots of the gameplay</h2>
            <ul>
                {list}
            </ul>
        </div>
    }
}

export default GamePlay;