/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, Loading } from '..'
import useFetch from "../hooks/useFetch";
import "./List.scss";

export default function List({ catId, subCats, maxPrice, sort }) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}}`);

    // &[filters][categories][id]=${catId}${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    // &[filters][price][$lte]=${maxPrice}&sort=price:${sort ? sort : 'desc'

    console.log(2, catId, data)


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