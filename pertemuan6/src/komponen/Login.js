import React, {Component} from 'react';

class Login extends Component {

    constructor(){
        super()
        this.state = {
            email: "herujoko@mail.co.id",
            password: "12345"
        }
    }

    onPasswordChange(e){
        
        console.log('set state menjadi = '+e.target.value);
        // this.state.password = "1234";
        // render / view hanya berubah jika state di rubah melalui setState
        this.setState({
            password: e.target.value
        });
    }

    onEmailChange(e){
        
        console.log('set email menjadi = '+e.target.value);
        // this.state.password = "1234";
        // render / view hanya berubah jika state di rubah melalui setState
        this.setState({
            email: e.target.value
        });
    }

    render(){
        console.log('render ulang');
        return (
            <div>
                <input value={this.state.email} onChange={(e) => this.onEmailChange(e)} />
                <input type="password" value={this.state.password} onChange={(e) => this.onPasswordChange(e)}/>
                <button>login</button>
            </div>
        )
    }

}

export default Login;