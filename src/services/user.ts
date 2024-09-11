const baseURL = "https://wfqjl6jv-7217.inc1.devtunnels.ms";

export const AuthService = () => {
  const SignUpService = async (user: SignUp) => {
    try {
      const response = await fetch(`${baseURL}/CreateUser`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Data received:", data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const SignInService = async (user: SignIn) => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Login Successfully:", data);
      return data;
    } catch (error) {
      console.error("Error logging user:", error);
    }
  };
  return { SignInService, SignUpService };
};
