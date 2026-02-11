import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

import AuthContent from '../components/Auth/AuthContent';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';

function LoginScreen() {
   const [isAuthenticating, setIsAuthenticating] = useState(false);


const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed', 'Please check your credentials and try again.');
      setIsAuthenticating(false);
  } 
}

if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
}
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;