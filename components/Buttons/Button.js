import Link from "next/link";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ color, href, type, children, onClick }) {
  const Button = (
    <button
      className={`${styles[color]} ${styles.clickable}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
  const LinkHOC = (children) => {
    return <Link href={href}>{children}</Link>;
  };
  if (href) return LinkHOC(Button);
  return Button;
}
Button.propTypes = {
  color: PropTypes.oneOf(["blueBg", "greenBg", "darkBg", "redBg"]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
