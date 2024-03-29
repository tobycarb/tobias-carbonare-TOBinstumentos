import React from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
const ItemList = (props) => {
    
    return ( 
        <>
        <div>
            <h2 class="text-center">ItemList</h2>
            
            </div>
        {
            props.items.map(
                cadaItem=>{
                    return <div class="card cartera "style={{width:500}} key={cadaItem.id}>
                        <p class="text-center h3 card-title cartera">{cadaItem.producto}</p>
                        <p class="cartera">{cadaItem.category}</p>
                        <img class="card-img cartera" style={{width:450,height:400}} src={cadaItem.img} alt="" />
                        <p class="h2 cartera">${cadaItem.price}</p>
                        <Link class="text-center h3 cartera" to={`item/${cadaItem.id}`} ><button class="cartera" style={{width:300}}>ver detalles</button></Link>

                      
                    </div>
                })
        }
        </>
     );
}
 
export default ItemList;