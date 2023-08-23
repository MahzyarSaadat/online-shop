import Cart from "../../components/cart/cart";
import "./homePageStyle.css"
import {data} from "../../fakeData/fakeData"
import { useEffect, useState } from "react";
import axios from "axios";
  
const HomePage = () => {

    const [productList , setProductList] = useState([]);

    useEffect(() => {   
        axios.get("https://fakestoreapi.com/products")
        .then((data) => {
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div  dir="rtl" className="bg-light d-flex gap-2 flex-wrap justify-content-center"> 
            {productList.map(item => {
                return(
                    <div key={`productKey-${item.id}`} className="cart--container">
                        <Cart 
                        productPrice={item.price}
                        productRateCount={item.rating.count}
                        productRate={item.rating.rate}
                        productCategory={item.category} 
                        productName={item.title}
                        productTag="موجود است"
                        productImg={item.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage;