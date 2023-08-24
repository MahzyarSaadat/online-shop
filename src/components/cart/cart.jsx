import {FaStore , FaStar , FaSackDollar} from "react-icons/fa6";
import { Button } from "react-bootstrap";
import "./cart.css"

const Cart = (props) => {
    return(
        <div className="w-100 bg-light p-3">
            <div className="w-100 h-65 position-relative">
                <img className="w-100 h-100" src={props.productImg} />
                <div className="position-absolute top-0 right-4 text-white  bg-danger px-3 ">
                    <span>{props.productTag}</span>
                </div>
            </div>
            <h4 className="mt-2 card-textContent">{props.productName}</h4>
            <p>
                <FaStore/>
                <span>{props.productCategory}</span>
            </p>
            <div className="d-flex align-items-center">
                <FaStar/>
                <h5>{props.productRate}</h5>
                <span>
                    (
                    <span>{props.productRateCount}</span>
                    نظر
                    )
                </span>
            </div>

            <div className="d-flex justify-content-between">
                <div>
                    <Button variant="outline-danger"
                        onClick={() => props.setBasketList([...props.basketList , 
                            {
                                productName: props.productName,
                                productPrice: props.productPrice,
                                productId : props.productId
                            }
                    ])}
                    >+</Button>
                </div>
                <div className="d-flex align-items-center gap-1">
                    <h3 className="fs-5">
                        <span>{props.productPrice}</span>
                        <FaSackDollar/>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Cart;