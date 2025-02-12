export const MenuCategorias = ({items}) => {



    return ( 
        <>
        <h1>Menú vertical acordeón</h1>
        <nav>
            <ul>
                {
                    items.map(({icon, name}, i)=>(
                        <li key={i}className='fas fa-cog'>
                            <a href=""></a>
                        {name}</li>
                    ))
                }
            </ul>
        </nav>
        </>
     );
}