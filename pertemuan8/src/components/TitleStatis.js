import React, { Component } from 'react';

class TitleStatis extends Component {

    constructor() {
        super();
        this.state = {
            text: "Jauzi"
        }
    }

    render() {
        return (
            <h1> Hai, {this.state.text}</h1>
        )
    }

}
export default TitleStatis;