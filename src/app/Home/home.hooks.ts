"use client";
import { useRouter } from "next/navigation";

export default function useHomepageHooks() {
  const router = useRouter();

  const login = () => {
    console.log("clicked");
    router.push("/");
  };
  return {
    login,
  };
}
