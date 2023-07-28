import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const dataSession = useSession();
  const { status } = dataSession;
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }
  return children;
}
export default App;
