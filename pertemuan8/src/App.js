import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import TitleStatis from './components/TitleStatis';

class App extends Component {

    constructor() {
        super()
        this.state = {
            sapaan: [
                {
                    text: "Heru",
                    greetings: "Good Morning"
                },
                {
                    text: "Joko",
                    greetings: "Good Afternoon"
                },
                {
                    text: "Jauzi",
                    greetings: "Good Night"
                },
                {
                    text: "Rizal",
                    greetings: "Good Evening"
                }
            ]
        }
    }

    hapusItem(index) {
        let tmp_sapaan = this.state.sapaan;
        tmp_sapaan.splice(index, 1);
        this.setState({
            sapaan: tmp_sapaan
        });
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.sapaan.map((sapa, index) => {
                        return <Title
                            text={sapa.text}
                            greetings={sapa.greetings}
                            hapusItem={this.hapusItem.bind(this)}
                            index={index} />
                    })
                }
            </div>
        );
    }
}

export default App;
