/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


import "./Card.scss";

export default function Card({ item }) {

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (

        <Link className='link' to={`/product/${item?.id}`} onClick={scrollUp}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>⭐ New Season</span>}
                    <img src={item.attributes?.img?.data.attributes.url} className='mainImg' />
                    <img src={item.attributes?.img2?.data.attributes.url} className='secondImg' />
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