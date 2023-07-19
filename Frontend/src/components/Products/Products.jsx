/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { List } from "..";
import "./Products.scss";
import useFetch from '../hooks/useFetch';

export default function Products() {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value));
    };

    console.log(selectedSubCats)

    return (
        <div className="products">
            <div className="left" >
                <div className="filterItem">
                    <h2>Product Category</h2>
                    {data?.map((item, index) => (
                        <div key={index} className="inputItem">
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}

                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        {/* <span>$0 </span> */}
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span> ${maxPrice}</span>
                    </div>
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")} />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={() => setSort("desc")} />
                        <label htmlFor="desc">Price (Hightest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div>
    )
}