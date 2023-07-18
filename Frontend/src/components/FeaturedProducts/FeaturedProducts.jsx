/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

export default function FeaturedProducts({ type }) {
    
  const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/products?populate=*`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                }
            });

            setData(res.data.data)

        } catch (err) {
            console.log(err)
        }
    }
    
  fetchData();
}, []);


    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>
                    {type} products
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi libero voluptas? Aperiam, ipsum porro delectus nihil voluptatum molestias quos.
                </p>
            </div>
            <div className="bottom">
                {data?.map(item => (
                    <Card key={item.id} item={item} />
                )
                )}
            </div>
        </div>
    )
}