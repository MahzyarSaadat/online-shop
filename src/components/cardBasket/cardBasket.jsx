import { Button } from "react-bootstrap";
import "./cardBasketStyle.css"

const Basket = (props) => {
    return(
        <div className="d-flex flex-column w-100 bakset-container bg-white rounded">
            <div className=" d-felx flex-column gap-2 w-100 min-height-75">
                {props.basketList.map(item => {
                    return(
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="card-textContent w-75">{item.productName}</h5>
                            <div> 
                                <span>{item.productPrice}</span>
                                <Button className="fs-7" variant="danger"
                                    onClick={() => props.setBasketList(props.basketList.filter(product => product.productId != item.productId))}
                                >حذف</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex min-height-25 flex-column justify-content-center align-items-center pb-2">   
                <h3 className="text-center">
                    <span>
                        {props.basketList.reduce((sum , current) => sum + current.productPrice , 0) }
                        $
                    </span>
                </h3>
                <div className="button-container w-75">
                    <Button className="w-100" variant="danger">خرید</Button>
                </div>
            </div>
        </div>
    )
}

export default Basket;