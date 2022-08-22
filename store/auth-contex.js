import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  const value = {
    authToken,
    isAuthenticated: !!authToken,
    authenticate: setAuthToken,
    logout: () => setAuthToken(null),
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthProvider should be a parrent to use its context.");
  }

  return context;
}
