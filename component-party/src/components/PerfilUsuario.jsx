
    // const userData = {

    //     nombre: 'El Barto',
    //     email: 'elbarto@fox.com',
    //     img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    //     direccion: {
    //     calle: 'Calle Falsa 123',
    //     ciudad: 'Springfield',
    //     codigoPostal: '12345'
    //     }
    //     };
    
const PerfilUsuario = ({userData}) => {
    
const {nombre, email, img, direccion} = userData;

const {calle, ciudad, codigoPostal} = direccion;
    return ( 
        <>
        <div className="Card">
            <h2>{nombre}</h2>
            <img className="Img-card" src={img} alt={nombre} />
            <p><b>Email:</b> {email}</p>
            <p><b>Dirección:</b></p>
            <p>
                <b>Calle:</b> {calle} <br/>
                <b>Ciudad:</b> {ciudad} <br/>
                <b>Código postal:</b> {codigoPostal} <br/>
            </p>
        </div>
        </>
     );
}
 
export default PerfilUsuario;