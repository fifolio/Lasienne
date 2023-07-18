/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import "./Card.scss";

export default function Card({ item }) {

    return (
        <Link className='link' to={`/product/${item?.attributes.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img src={import.meta.env.VITE_BASE_URL + item.attributes?.img?.data.attributes.url} className='mainImg' />
                    <img src={import.meta.env.VITE_BASE_URL + item.attributes?.img2?.data.attributes.url} className='secondImg' />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className='prices'>
                    <h3>${item?.attributes.oldPrice || item?.attributes.price + 35}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}