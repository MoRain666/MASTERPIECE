import React from 'react';
class WhatWeDid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Vlad:['Landing Page', 'Deploy', 'Riddles(arithemetic, sequence, translator)', 'NotFound Page', 'Score', 'Registration Page', 'Final Page'],
            Nastya:['Game Animation', 'Riddles(choosecolour and some corrections)', 'Modal dialog in game','Interaction of components', 'Code refactoring', 'Full canvas']
        };
    }
    render(){
        const VladList = this.state.Vlad.map((value, index) =>{
            return <li key={index}>{value}</li>
        });
        const NastyaList = this.state.Nastya.map((value, index) =>{
            return <li key={index}>{value}</li>
        });
        return <div id='job' className='LandingPage-job'>
            <div className='LandingPage-person-work'>
                <h3>Vlad:</h3>
                <ul>
                    {VladList}
                </ul>
            </div>
            <div className='LandingPage-person-work'>
                <h3>Nastya:</h3>
                <ul>
                    {NastyaList}
                </ul>
            </div>
        </div>
    }
}
export default WhatWeDid;