import { useState, useEffect } from 'react'
import "./carrousel.css"

export const Carrousel = ({ imgList, autoPlay=false }) => {

    const [indice, setIndice] = useState(0);

    useEffect( ()=>{
        console.log("useEffect")
        if(!autoPlay) return;

        const indice = setInterval(()=>{
            handleSiguiente();
        }, 1000);

        return () =>{
            clearInterval(indice);
        }

   }, [indice, autoPlay] );

    const handleAnterior = () =>{
        const newIndex = (indice === 0) ? imgList.length -1 : indice -1;
        setIndice(newIndex)
    }
    const handleSiguiente = () =>{
        const newIndex = (indice===imgList.length -1) ? 0 : indice +1;
        setIndice(newIndex)
    }

    const handleGoToSlide = (idx) =>{
        setIndice(idx);
    }

    return (
        <>
            <h2>Carrousel</h2>
            {/* Para el último paso, poner: onMouseEnter y onMouseLeave */}
            <div className="carousel" >
                <div className="carousel-container" style={{ transform: `translateX(-${indice*100}%)` }}>
                    {
                        imgList.map( (img, i) => (
                            <div className="carousel-slide" key={i}>
                                <img src={img.src} alt={`imagen ${i+1}`} />
                            </div>
                        ))
                    }
                </div>
                <div className="carousel-controls">
                    <button onClick={handleAnterior}>Anterior</button>
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
                <div className="carousel-indicators">
                    {
                        imgList.map((img, i)=>(
                            <button onClick={()=>handleGoToSlide(i)} key={i}>{i+1}</button>
                        ))
                    }
                </div>
            </div>
        </>
    );
}