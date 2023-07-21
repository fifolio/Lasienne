/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import useFetch from '../hooks/useFetch';
import Grid from '@mui/material/Grid';
import './More.scss';
import { Loading } from "..";

export default function MoreProducts() {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=normal`);
    return (
        <div className='more'>
            <div className="top">
                <h1>
                    Discover More
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
                                        <Grid item className="moreItem">
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