import React from 'react';
import { Input, Typography, Button, Divider} from 'antd';
import './index.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../services/firebase/firebase';

const { Title } = Typography;

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            headline: '',
            email: '',
            password: ''
        }

        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChangeInput = e => {
        const { name, value } = e.target;
        this.setState({ 
            [name]: value
        })
     
    }

    handleRegister(e) {
        const { email, password } = this.state
        createUserWithEmailAndPassword(auth, email, password)
    }
    render() {
        return (
            <div className="auth_register_container">
                <Title level={2}>
                    Register
                </Title>

                <div>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="headline"
                        placeholder="Headline"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <div>
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleChangeInput}
                    />
                </div>

                <Divider />

                <Button 
                    type='primary'
                    onClick={this.handleRegister}
                    >
                    Register
                </Button>

            </div>
        )
    }
}

export default Register