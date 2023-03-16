import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit={handleLogin}>
              Login
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

