import React, { Component } from "react";

const Aos =(props)=>{

    
        const{personeller}=props;
        const personellerListesi=personeller.map(personel=>{
            return(
                <div className="Aos"  key={personel.id}>
                <h4>Adı : {personel.ad}</h4>
                <h4>Soyadı : {personel.soyad}</h4>
            </div>
            )
        })
        return(
            <div>
                {personellerListesi}
            </div>
        )

}

export default Aos;