import Cookies from 'js-cookie';

const SignOut = () => {
  Cookies.remove('user');
};

export default SignOut;
