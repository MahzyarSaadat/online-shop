import Cart from "../../components/cart/cart";
import "./homePageStyle.css"
import {data} from "../../fakeData/fakeData"
import { useEffect, useState } from "react";
import axios from "axios";
import Basket from "../../components/cardBasket/cardBasket";
  
const HomePage = () => {

    const [productList , setProductList] = useState([]);
    const [basketList , setBasketList] = useState([]);


    useEffect(() => {   
        axios.get("https://fakestoreapi.com/products")
        .then((data) => {
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((err) => console.log(err))
    },[])

    return (
        <div  dir="rtl" className="d-flex gap-4 bg-light"> 
        {console.log(basketList)}
            <div className="w-25 h-100">
                <Basket
                    setBasketList={setBasketList}
                    basketList={basketList}
                />
            </div>

            <div className="w-75 h-100  d-flex gap-2 flex-wrap justify-content-center ">
                {productList.map(item => {
                    return(
                        <div key={`productKey-${item.id}`} className="cart--container">
                            <Cart 
                            productId={item.id}
                            productPrice={item.price}
                            productRateCount={item.rating.count}
                            productRate={item.rating.rate}
                            productCategory={item.category} 
                            productName={item.title}
                            productTag="موجود است"
                            productImg={item.image}
                            setBasketList={setBasketList}
                            basketList={basketList}
                            />
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;