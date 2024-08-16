import React from "react";


function NovoComentario(){

    return (

        <div style={{display: "flex", border: "2px solid black", width: '17rem', height: '20rem', justifyContent: 'center'}}>


            <div>

                <p style={{display: 'flex', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 600}}> Amanda Nunes</p>
                <span style={{color: 'gold', marginLeft: '5px;', display: "flex", justifyContent: 'center', fontSize: '1.5rem'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>


                <span style={{textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6rem', display: 'flex', justifyContent: 'flex-end'}}>
                    Comprei minha primeira rosa do <br />
                    deserto neste site e estou <br />
                    completamente encantada! A <br />
                    planta chegou em perfetias <br />
                    condições, saudável e bem <br />
                    embalada. Além disso, o <br />
                    atendimento do cliente foi excepcional.
                </span>

            </div>

        </div>

    )


        
    


}

export default NovoComentario;