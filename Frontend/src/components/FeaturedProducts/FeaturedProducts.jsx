/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import useFetch from '../hooks/useFetch';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./FeaturedProducts.scss";
import { Loading } from "..";

export default function FeaturedProducts({ type }) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    console.log(data, loading, error)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>
                    {type} products
                </h1>
            </div>

            <Grid sx={{ flexGrow: 1 }}>
                <div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {error
                            ? "Something went wrong!"
                            : loading
                                ? <Loading />
                                : data?.map((item) => (
                                    <>
                                        <Grid item className="productItem">
                                            <Card item={item} key={item.id} />
                                        </Grid>
                                    </>
                                ))}
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}