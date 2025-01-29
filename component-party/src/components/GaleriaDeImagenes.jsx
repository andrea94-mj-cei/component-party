const GaleriaDeImagenes = ({imageList}) => {
    
    // const {src, alt} = imageList;
    
    return ( 
        <>
        {imageList.map(({src, alt}, i) => (
            <div>
            <h3>Nombre: {alt}</h3>
            <img key={i} src={src} alt={alt} />
            </div>
        ))} 
        </>
     );
}
 
export default GaleriaDeImagenes;