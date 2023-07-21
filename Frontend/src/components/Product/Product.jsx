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
import { Grid } from "@mui/material";
import { Loading, More } from "..";

export default function Product() {

    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    const dispatch = useDispatch()

    return (
        <div className="product">
            <Grid sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {loading ?
                        <Loading /> :
                        <>
                            <Grid item xs={12} sm={12} md={7}>
                                <div className="left">
                                    <div className="images">
                                        <img src={item.attributes?.img?.data.attributes.url} onClick={() => setSelectedImg("img")} />
                                        <img src={item.attributes?.img2?.data.attributes.url} onClick={() => setSelectedImg("img2")} />

                                    </div>
                                    <div className="mainImg">
                                        <img src={data?.attributes[selectedImg]?.data?.attributes?.url} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
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
                            </Grid>
                        </>
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <More/>
                </Grid>
            </Grid>

        </div>
    )
}