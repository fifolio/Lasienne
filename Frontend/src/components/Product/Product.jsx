/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export default function Product() {

    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    const dispatch = useDispatch()

    return (
        <div className="product">
            {loading ?
                "loading" :
                <>
                    <div className="left">
                        <div className="images">
                            <img src={import.meta.env.VITE_BASE_URL + data?.attributes.img?.data?.attributes?.url} onClick={() => setSelectedImg("img")} />
                            <img src={import.meta.env.VITE_BASE_URL + data?.attributes.img2?.data?.attributes?.url} onClick={() => setSelectedImg("img2")} />

                        </div>
                        <div className="mainImg">
                            <img src={import.meta.env.VITE_BASE_URL + data?.attributes[selectedImg]?.data?.attributes?.url} />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className="price">${data?.attributes?.price}</span>

                        <p>
                            {data?.attributes?.desc}
                        </p>

                        <div className="quantity">
                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button>
                            {quantity}
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <div className="add" onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.desc,
                            price: data.attributes.price,
                            img: data.attributes.img.data.attributes.url,
                            quantity,
                        })
                        )}>
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
                </>
            }
        </div>
    )
}