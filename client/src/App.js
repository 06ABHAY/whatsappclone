import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId='842395098195-k9jjsnb48ssrokedaat0s7ss3uac6nvk.apps.googleusercontent.com'

  return (
  <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messenger/>
    </AccountProvider>
  </GoogleOAuthProvider>
  );
}

export default App;
