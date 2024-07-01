import { Link } from 'react-router-dom';

// material-ui

// project import
import useAuth from '@base/hooks/useAuth';

// ================================|| REGISTER ||================================ //

const Register = () => {
  const { isLoggedIn } = useAuth();

  return <div>Register</div>;
};

export default Register;
