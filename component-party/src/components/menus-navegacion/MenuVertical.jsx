import { useState } from 'react'

export const MenuVertical = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <h1>Menú Vertical</h1>



            <nav className="v-menu">
                <button onClick={handleToggleMenu} >Menú {JSON.stringify(isOpen)}</button>
                {
                    isOpen && (
                        <ul>
                            {
                                items.map(({ url, label }, i) => (
                                    <li key={i}>
                                        <a href={url}>{label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </nav>
        </>
    );
}