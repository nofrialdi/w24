import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data } = useSession();
  const { accessToken } = data;

  console.log(accessToken)
  return <div>Access Token: {accessToken}</div>;
}