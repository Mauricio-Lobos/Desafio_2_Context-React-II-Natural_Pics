import "../assets/css/galeria.css";
import Heart from "./Heart";
import { Context } from "../Context";
import { useContext } from "react";

export default function Home() {
   const {fotos, setFotos} = useContext(Context);

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((photo, i) =>{
        return(
          <div
          className="foto"
          style={{backgroundImage: `url('${photo.src}')`}}
          onClick={() => {
            const foto = fotos[i];
            const estadoActualDeLike = foto.liked;
            if (estadoActualDeLike) foto.liked = false;
            else foto.liked = true;
            setFotos([...fotos]);
          }}>
            {photo.liked ? (
              <Heart filled={"red"}/>
            ) : (
              <Heart/>
            )}
          </div>
        )
      })}
    </div>
  );
}
