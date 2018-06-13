import React from 'react';
class WhatWeDid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Vlad:['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
            Nastya:['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']
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