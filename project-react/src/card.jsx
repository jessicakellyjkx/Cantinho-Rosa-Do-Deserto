import React from "react";
import imgRosa from './assets/rosa.jpg'


function NewCard(){

    return (
      <div style={{display: "flex", flexDirection: "column", border: '2px solid red', width: '20vw', height: '20vw', padding: '10px'}}>
        <img src={imgRosa} alt="rosa" style={{width: '15vw', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}></img>
      <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>
        <p style={{fontSize: '1.4rem', fontWeight: '600', margin: 0}}>Rosa do Deserto</p>
        <span style={{fontSize: '1.6rem', color: "red", fontWeight: 600, marginTop: '10px'}}>R$ 90,00</span>
      </div>
    
      <span style={{fontSize: '1.5rem', border: '2px solid red', height: '2.8rem', marginTop: '10px', width: '35%', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', left: '35%'}}>
        <a href="https://www.youtube.com/" style={{textDecoration: 'none', color: 'black', fontWeight: '600'}}>Comprar</a>
      </span>
    </div>
    
      );


}



export default NewCard;