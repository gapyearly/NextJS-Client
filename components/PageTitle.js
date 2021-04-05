export default function PageTitle({ children }) {
  return (
    <header>
      <h1 className="header">{children}</h1>
    </header>
    // currently in global css, could pass in colours but ehhhhhhhhh low priority
  );
}
