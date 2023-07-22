/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { List } from "..";
import "./Products.scss";
import useFetch from '../hooks/useFetch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
export default function Products() {

    // Model
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(150);
    const [sort, setSort] = useState('asc');
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value));
    };

    // Radio btns
    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    return (
        <div className="products">

            <div className="right">
                <img className="catImg" src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>

            <div className="filterBtn">
                <Button onClick={handleOpen}><FilterAltIcon style={{ color: 'white' }} /></Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="filterItem">
                        <h4>Product Category</h4>
                        {data?.map((item, index) => (
                            <div key={index} className="inputItem">
                                <Checkbox type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                        ))}

                        <h4>Filter by price</h4>
                        <div className="inputItem">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <span className='filterByPriceSpan'>${maxPrice}</span>
                            </div>
                            <Slider
                                aria-label="price"
                                defaultValue={75}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={5}
                                max={150}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />

                        </div>
                        <h4>Sort by</h4>
                        <div className="inputItem">
                            <Radio
                                type="radio"
                                id="asc"
                                value="asc"
                                name="sort-radio"
                                checked={sort === 'asc'}
                                onChange={handleSortChange}
                            />
                            <label htmlFor="radio-asc">Price (Lowest first)</label>
                        </div>
                        <div className="inputItem">
                            <Radio
                                type="radio"
                                id="desc"
                                value="desc"
                                name="sort-radio"
                                checked={sort === 'desc'}
                                onChange={handleSortChange}
                            />
                            <label htmlFor="radio-desc">Price (Hightest first)</label>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}