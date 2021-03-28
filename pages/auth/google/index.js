// Redirects authentication to backend flow.
import redirect from "nextjs-redirect";
export default redirect(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/connect/google`
);
