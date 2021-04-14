// Redirects authentication to backend flow.
import redirect from "nextjs-redirect";

const Redirect = redirect(
  `${process.env.NEXT_PUBLIC_BACKEND_API}/connect/google`
);
export default function GoogleRedirect() {
  return <Redirect></Redirect>;
}
