import Pill from "@components/Buttons/Pill";

export default function RolePill({ role }) {
  let color;
  if (role === "Admin") color = "darkBg";
  if (role === "Staff") color = "blueBg";
  if (role === "Mentor") color = "greenBg";
  if (role === "Contributor") color = "redBg";
  if (!color) return <></>;
  return <Pill color={color}>{role}</Pill>;
}
