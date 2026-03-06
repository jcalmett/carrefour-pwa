import { useState } from "react";
import CarrefourUsers from "./apps/CarrefourUsers";
import CarrefourAdmin from "./apps/CarrefourAdmin";

const V="#00843D", AM="#FFD100", BL="#FFFFFF";

export default function App() {
  const [app, setApp] = useState(null);

  if (app === "users") return <CarrefourUsers />;
  if (app === "admin") return <CarrefourAdmin />;

  return (
    <div style={{
      minHeight:"100vh", background:V,
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center",
      fontFamily:"Segoe UI, Arial, sans-serif", padding:"24px"
    }}>
      <div style={{
        background:BL, borderRadius:20, padding:"40px 32px",
        maxWidth:380, width:"100%", textAlign:"center",
        boxShadow:"0 8px 40px rgba(0,0,0,.25)"
      }}>
        <div style={{
          width:80, height:80, borderRadius:"50%",
          background:V, margin:"0 auto 20px",
          display:"flex", alignItems:"center", justifyContent:"center"
        }}>
          <span style={{fontSize:36}}>🛒</span>
        </div>
        <h1 style={{
          fontSize:22, fontWeight:900, color:V,
          fontFamily:"Georgia,serif", marginBottom:6
        }}>
          Carrefour <span style={{fontStyle:"italic", fontWeight:400}}>express</span>
        </h1>
        <p style={{color:"#666", fontSize:13, marginBottom:32}}>
          Seleccioná la aplicación
        </p>

        <button
          onClick={() => setApp("users")}
          style={{
            width:"100%", padding:"16px", borderRadius:12, border:"none",
            background:V, color:BL, fontWeight:800, fontSize:16,
            cursor:"pointer", marginBottom:12,
            boxShadow:"0 4px 14px rgba(0,132,61,.3)"
          }}
        >
          🏷️ Ver Ofertas
        </button>

        <button
          onClick={() => setApp("admin")}
          style={{
            width:"100%", padding:"16px", borderRadius:12,
            border:`2px solid ${V}`, background:BL,
            color:V, fontWeight:800, fontSize:16,
            cursor:"pointer"
          }}
        >
          ⚙️ Panel Gerente
        </button>
      </div>
    </div>
  );
}
