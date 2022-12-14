import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useAuth();

  async function signupHandler(payload) {
    setIsAuthenticating(true);

    try {
      const authToken = await createUser(payload);
      authenticate(authToken);
    } catch (err) {
      Alert.alert(
        "Authentication faild!",
        "Could not create user, please check your input or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
