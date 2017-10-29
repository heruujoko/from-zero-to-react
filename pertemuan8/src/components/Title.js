import React, { Component } from 'react';

class Title extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1> Hai, {this.props.text}</h1>
                <h5>{this.props.greetings}</h5>
                <button onClick={() => this.props.hapusItem(this.props.index)}>Hapus</button>
            </div>
        )
    }

}
export default Title;