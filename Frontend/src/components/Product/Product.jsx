import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";

export default function Product() {

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    ]

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} onClick={() => setSelectedImg(0)} />
                    <img src={images[1]} onClick={() => setSelectedImg(1)} />

                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$900</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum ullam, eveniet reprehenderit inventore excepturi voluptatem! Animi neque labore quibusdam minima veritatis! Doloremque consectetur inventore commodi, sapiente sunt iure assumenda?</p>

                <div className="quantity">
                    <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity-1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(quantity+1)}>+</button>
                </div>

                <div className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </div>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}