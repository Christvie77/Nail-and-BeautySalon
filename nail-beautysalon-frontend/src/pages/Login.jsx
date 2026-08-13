import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Temporary user for frontend testing.
        // This will later come from the Spring Boot API.
        const user = {
            id: 1,
            name: 'Vincent',
            email: email,
            role: 'EMPLOYEE',
        };

        login(user);

        navigate('/employee/dashboard');
    };

    return (
        <main className="auth-page">

            <Container>

                <div className="auth-card">

                    <div className="auth-header">

                        <p className="auth-eyebrow">
                            NAIL & BEAUTY
                        </p>

                        <h1>Welcome back</h1>

                        <p>
                            Sign in to access your account.
                        </p>

                    </div>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Email address
                            </Form.Label>

                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>
                                Password
                            </Form.Label>

                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Enter your password"
                                required
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="auth-button w-100"
                        >
                            Sign In
                        </Button>

                    </Form>

                </div>

            </Container>

        </main>
    );
}

export default Login;