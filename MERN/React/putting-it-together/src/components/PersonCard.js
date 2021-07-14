import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.age
        };
    }
    formatCount = () => {
        const {count} = this.state;
        
        return this.setState({count: count+1})
    }
    render() {
        return (
        <div>
            <h1>{ this.props.lastName }, { this.props.firstName } </h1>
            <p>Age: { this.state.count}</p>
            <p>Hair Color: { this.props.color }</p>
            <button onClick={ this.formatCount }>Birthday Button for {this.props.name}</button>
        </div>
        );
    }
}
    
export default PersonCard;