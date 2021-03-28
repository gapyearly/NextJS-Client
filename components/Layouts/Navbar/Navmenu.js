const sitemap = require("./sitemap.json");

export default function NavMenu() {
  const navItems = sitemap.map((navItemInfo) => {
    return <NavItem key={navItemInfo.label} data={navItemInfo} />;
  });
  return <div>{navItems}</div>;
}

const NavItem = ({ data }) => {
  return (
    <div>
      <a>{data.label}</a>
    </div>
  );
};
