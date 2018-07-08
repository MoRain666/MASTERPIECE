import React from 'react';

class CompletedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Vlad: [
                'Landing Page',
                'Deploy',
                'Riddles(arithmetic, taskSequence, taskTranslator)',
                'NotFound Page',
                'Score',
                'Registration Page',
                'Final Page'
            ],
            Nastiya: [
                'Game animation and logic',
                'Riddles(choose colour and some corrections)',
                'Modal dialog in game',
                'Interaction of components',
                'Code refactoring',
                'Full canvas'
            ]
        };
    }

    render() {

        const VladList = this.state.Vlad.map((value, index) => {
            return <li key={index}>{value}</li>
        });

        const NastiyaList = this.state.Nastiya.map((value, index) => {
            return <li key={index}>{value}</li>
        });

        return <div id="duties-container" className='duties-container'>
            <div className='personal-duties-container'>
                <h3>Vlad:</h3>
                <ul>
                    {VladList}
                </ul>
            </div>
            <div className='personal-duties-container'>
                <h3>Nastiya:</h3>
                <ul>
                    {NastiyaList}
                </ul>
            </div>
        </div>
    }
}

export default CompletedWork