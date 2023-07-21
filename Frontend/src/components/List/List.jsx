/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, Loading } from '..'
import useFetch from "../hooks/useFetch";
import "./List.scss";

export default function List({ catId, subCats, maxPrice, sort }) {

    const { data, loading, error } = useFetch(`/products?populate=*}
    `);


    console.log(data)


    return (
        <div className="list">
            {loading ?
                <Loading /> : 
                data?.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
        </div>
    )
}