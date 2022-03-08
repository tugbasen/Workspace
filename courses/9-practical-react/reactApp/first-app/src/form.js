import React from "react";

export class Form extends React.Component{

    birseyYap(e){
        e.preventDefault();
        const deger=document.getElementById('input').value;
        console.log(deger);
        this.props.yeniliste(deger);
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>this.birseyYap(e)}>
                    <input type="text" id="input"/>
                </form>
                <button onClick={this.birseyYap} >gönder</button>
            </div>
        )
    }
}