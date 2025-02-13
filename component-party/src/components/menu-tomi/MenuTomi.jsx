import {useState} from 'react';

export const MenuTomi = ({itemsCategorias}) =>{

    const [openCategories, setOpenCategories] = useState({});

    /* utilizando el indice en vez del nombre de categoría
    {
        0: false,
        1: true,
        2: false
    }

    */
    
    const handleOpenCategory = (idx) =>{

        setOpenCategories((prevState)=>({
            ...prevState,
            [idx]: !prevState[idx]
        }))

    }

    return(
        <>
            <nav className='menu-tomi'></nav>
            <pre>{JSON.stringify(openCategories, null, 2)}</pre>
            <ul>
                {
                    itemsCategorias.map( ({name, icon, items}, idx) =>(
                        <li key={idx}>
                            {/* le mandamos información al botón con: ()=> */}
                            <button onClick={()=>handleOpenCategory(idx)}>
                            <i className={`fas ${icon}`}></i> 
                            {/* para poner espacios en formato js */}
                            {" "}{name}{" "} 
                            <i className={`fas ${openCategories[idx] ? "fa-chevron-up" 
                                                                     : "fa-chevron-down"}`}></i>
                            </button>

                            {openCategories[idx] && <SubMenu submenus = {items}/>}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}

const SubMenu = ({submenus}) =>{
    return(
        <ul className='submenu-tomi'>
            {
                submenus.map(({url, label}, idx)=>(
            <li key={idx}>
                <a href={url}> {label} </a>
            </li>))
            }
        </ul>
    )
}