import React from 'react';

export class FirstComponent extends React.Component{
    render(){
        const veriler=this.props.myListe.map((element,index)=>{
            return(
                <li key={index}>
                    {index+1}.eleman={element}
                </li>
            )
        })
        return(
            <div>
                ilk component <br/>
                <ul>
                    {veriler}
                </ul>
            </div>
        );
    }
}