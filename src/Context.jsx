import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
    const [fotos, setFotos] = useState([]);

    const getFotos = async () =>{
        const res = await fetch("/fotos.json");
        const data = await res.json();
        const photos = data.photos.map((photo) => {
            return {
                src: photo.src.tiny,
                liked:false
            };
        });
        setFotos(photos);
    };

    useEffect(() => {
        getFotos();
    }, []);

    const estadoGlobal = {
        fotos,
        setFotos
    };
    return <Context.Provider value={estadoGlobal}> {children} </Context.Provider>
}