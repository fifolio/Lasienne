/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from '../hooks/useFetch';

export default function FeaturedProducts({ type }) {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

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
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}