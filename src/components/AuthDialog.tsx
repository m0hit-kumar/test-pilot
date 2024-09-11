import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { useState } from "react";
import useHomepageHooks from "@/app/Home/home.hooks";
import { DialogClose } from "@radix-ui/react-dialog";

interface IAuthDialog {
  label: string;
}
const AuthDialog = ({ label }: IAuthDialog) => {
  const [user, setUser] = useState<SignUp>({
    username: "",
    email: "",
    password: "",
  });
  const { login, signUp } = useHomepageHooks();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((preValue) => ({ ...preValue, [id]: value }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{label}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Sign Up or Login</DialogTitle>
          <DialogDescription>
            Create a new account or sign in to your existing one.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup" className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="username"
                    placeholder="John Doe"
                    onChange={handleInputChange}
                    value={user.username}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={user.email}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  value={user.password}
                  id="password"
                  type="password"
                  onChange={handleInputChange}
                />
              </div>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => {
                    signUp(user);
                  }}
                >
                  Sign Up
                </Button>
              </DialogClose>
            </div>
          </TabsContent>
          <TabsContent value="login" className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={handleInputChange}
                  value={user.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => login(user)}
                >
                  Login
                </Button>
              </DialogClose>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
export default AuthDialog;
