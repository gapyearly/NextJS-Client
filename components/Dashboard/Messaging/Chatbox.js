import { useAuth } from "@contexts/auth";

export default function Chatrooms() {
  const { user } = useAuth();
  console.log(user);
  return <div>Enter</div>;
}
