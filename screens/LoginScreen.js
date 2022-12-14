import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAuth } from "../store/auth-contex";
import { logIn } from "../utils/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useAuth();

  async function loginHandler(payload) {
    setIsAuthenticating(true);

    try {
      const authToken = await logIn(payload);
      authenticate(authToken);
    } catch (err) {
      Alert.alert(
        "Authentication faild!",
        "Could not log you in, please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
