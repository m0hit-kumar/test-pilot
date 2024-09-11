"use client";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services";
import { useDispatch, useSelector } from "react-redux";
import { setUser, UserSlice } from "@/store";
import { user } from "@/store/selectors/user";
export default function useHomepageHooks() {
  const dispatch = useDispatch();
  const userCred = useSelector(user);
  const { SignInService, SignUpService } = AuthService();

  const router = useRouter();
  const login = async (user: SignIn) => {
    const signedUser = await SignInService(user);
    console.log("signedUser:", signedUser);
    if (signedUser) {
      const userdata: UserSlice = {
        userId: signedUser.id,
        email: signedUser.email,
        userName: signedUser.username,
        signedIn: true,
      };
      dispatch(setUser(userdata));
      console.log("rediux", userCred);
      router.push("/");
    }
  };

  const signUp = (user: SignUp) => {
    SignUpService(user);
  };
  return {
    login,
    signUp,
  };
}
