import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return (
        <div>
            <h1>{ this.props.name } </h1>
            <p>Age: { this.props.age }</p>
            <p>Hair Color: { this.props.color }</p>
            
        </div>
        );
    }
}
    
export default PersonCard;