import React, {Component} from 'react';

class Card extends Component {

    render() {
        
        return (
            <div style={{margin: '1em'}}>
            <img width="75" src="https://avatars2.githubusercontent.com/u/25266038?v=4" alt="" />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Essay Hanson</div>
                <div>N.</div>
            </div>
            </div>
        );
    }
}

export default Card;
