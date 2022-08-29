import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <div>
      <h2>Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
