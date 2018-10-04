import React, {Component} from 'react';
import './Login.css';
import axios from 'axios';


class Login extends Component {

    state = {
        username:'',
        password:'',
        submitted:false
    }

    handleSubmit = (event) => {
        console.log(event);

        let postData = {
            username: this.state.username,
            password: this.state.password,
        }

        this.setState({submitted:true});

        axios.post('http://localhost:80/users/login', postData)
        .then(response=>{
            console.log(response);
        })

        event.preventDefault();
    }

    handleUsernameChange = (event)=>{
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        });
    }


    shouldComponentUpdate(){
        return this.state.submitted;
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table className="tbl">
                    <tbody>
                        <tr>
                            <th>
                                Username:
                            </th>
                            <td>
                                <input type="text" className="signin-input" onChange={this.handleUsernameChange} name="username"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Password:
                            </th>
                            <td>
                                <input type="password" className="signin-input" onChange={this.handlePasswordChange} name="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="submit" className="submit-btn" value="Submit"></input>
                            </td>
                        </tr>
                        </tbody>
                    </table>


                </form>
            </div>
        );
    }
}

export default Login;