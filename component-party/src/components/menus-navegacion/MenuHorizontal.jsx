import "./menus.css"

export const MenuHorizontal = ({items}) => {

    

    return ( 
        <>

            <h1>Menú horizontal</h1>
            <nav className="h-menu">
                <ul>
            {
                items.map( ({label, url}, idx) =>(
                    
                    <li key={idx}>
                        <a href={url}>{label}</a>
                        </li>
                ))
            }
                </ul>
            </nav>
        </>
     );
}