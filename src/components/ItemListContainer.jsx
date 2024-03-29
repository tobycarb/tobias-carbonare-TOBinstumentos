import React, {useState,useEffect  } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getDoc,doc, getFirestore,collection,getDocs,query,where,limit} from "@firebase/firestore"
const ItemListContainer = (props) => {
    const ItemsDATABASE=[{
      "id": 1,
      "producto": "amplificador",
      "price": 1098,
      "category": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando . Al contar con 3 canales, te permitirán alcanzar tonos limpios y reproducir todos los géneros de música.Este amplificador cuenta con un conector de entrada tipo XLR balanceado, Jack, lo que te asegurará tener buena calidad cuando hagas una grabación o una transmisión.",
      "stock": 1,
      "img": "https://http2.mlstatic.com/D_NQ_NP_901927-MLA49434504972_032022-O.webp",
      "categoria": "amp"
    }, {
      "id": 2,
      "producto": "guitarra electrica",
      "price": 1265,
      "category": "Glenmark Generics Inc., USA",
      "stock": 9,
      "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/grg1-444a37321c9eb2218d16494229008612-640-0.jpg",
      "categoria": "guit"
    }, {
      "id": 3,
      "producto": "guitarra acustica",
      "price": 979,
      "category": "Wyeth BioPharma Division of Wyeth Pharmaceuticals Inc., a subsidiary of Pfizer Inc.",
      "stock": 3,
      "img": "https://www.tiposdeguitarra.com/wp-content/uploads/2020/05/guitarraacu%CC%81stica-0-Somsak-Sudthangtum-40950045_l-scaled-1.jpg",
      "categoria": "acus"
    }, {
      "id": 4,
      "producto": "bajo",
      "price": 692,
      "category": "NCS HealthCare of KY, Inc dba Vangard Labs",
      "stock": 10,
      "img": "https://media.istockphoto.com/photos/closeup-photo-of-bass-guitar-player-picture-id651209608?k=20&m=651209608&s=612x612&w=0&h=AiB7XH40Akl40uf8alG9Imq4CQA-4wGAx8mvd4TOAKM=",
      "categoria":"bajo"
    }, {
      "id": 5,
      "producto": "piano",
      "price": 123,
      "category": "Woori Health Promotion Town",
      "stock": 2,
      "img": "https://dynamix-audio.com/wp-content/uploads/2019/11/Grand-Piano.jpg",
       "categoria":"piano"
    }, ];
      
      ;
      const {name}=useParams()
     
      let [items,setItems] = useState([]);
      const [itemsFire, setItemsFire]=useState([])
      useEffect(()=>{ 
        //  const db = getFirestore()
        // const itemsCollection= collection(db,"items");
        // const filteredCollection = query(itemsCollection, where("producto","==","piano"))
        // getDocs(filteredCollection).then(snapshot=>{
        //   const data = snapshot.docs.map (doc=>({
        //     id:doc.id,
        //     ...doc.data()
        //   }));
        // })





        const db = getFirestore()
        const itemsCollection= collection(db,"items");
        const itemsDocuments=
        getDocs(itemsCollection).then ((snapshot)=>{
          const data = snapshot.docs.map ((doc)=> ({id:doc.id, ...doc.data()})
          
          )
          setItems(data)
        })



        // const db = getFirestore()
        // const docRef = doc(db,"items","4EeyKBsnjJ6MifZpObkY")
        // getDoc (docRef).then((snapshot))
        
        let promiseItems = new Promise ((resolve,reject)=>{
        setTimeout(
            () => {
        resolve(itemsCollection)  ;
        
        },
        1000);
      });
      },
      [name])

    return ( 
        <>
        <ItemList items={items}/>
       
        <p>{props.greeting}</p>
        </>
     );
}
 
export default ItemListContainer;