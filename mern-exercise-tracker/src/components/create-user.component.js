import React, { Component } from 'react';
import axios from 'axios'

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState ({
            username: '' //so you stay on page. you want to stay on page so u can enter more users
        })
    }

    render() {
        return (
            <div>
              <h1>Create New User</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username: </label>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
            </div>
        )
    }
}

