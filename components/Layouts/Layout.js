export default function Layout({ children }){
    return(
        <div>
            <p>Header</p>
            { children }
            <p>Footer</p>
        </div>
    )
}