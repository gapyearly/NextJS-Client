export default function PageTitle ({children}) {
    return (
        <h1 className="header">{children}</h1>
        // currently in global css, could pass in colours but ehhhhhhhhh low priority
    );
}