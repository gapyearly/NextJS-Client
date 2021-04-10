import { useRouter } from "next/router";
import { useAuth } from "@contexts/auth";
import { useEffect } from "react";
import { route } from "next/dist/next-server/server/router";

const provider = "google";
export default function Redirect() {
  const router = useRouter();
  const { providerLogin, user } = useAuth();
  // When the router is ready, it'll attempt to login with parameters
  useEffect(() => {
    if (router.isReady) {
      providerLogin(router.query, provider)
        .then((newuser) => {
          if (!newuser.signupCompletion) {
            return router.push("/signup/additional-info");
          }

          // TODO: Redirect them somewhere lmao
          // Make sure to check if full account setup has been completed
          const redirect = window.sessionStorage.getItem("redirect");
          if (!redirect) return router.push("/");
          const sanatized = redirect.replaceAll(":", " ");
          router.push(sanatized);
        })
        .catch((err) => {
          // TODO: Eventually push to an error page
          router.push("/");
          console.log(err);
        });
    }
  }, [router]);
  return <p>Loading {user}</p>;
}
