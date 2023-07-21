import { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import axios from "axios";


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [photos, setPhotos] = useState([]);

    const fetchRandomPhotos = async () => {

        try {
            const accessKey = "Ny605zUXYY14kJF1EywrvXh82Us6NSLtz1zOluMS4Yc";
            const url = "https://api.unsplash.com/photos/random";
            const query = "fashion,beauty,style,jewelry,makeup";
            const res = await axios.get(url, {
                params: {
                    query,
                    count: 11,
                    client_id: accessKey,
                    orientation: 'landscape',
                },
            });

            setPhotos(res.data)

        } catch (err) {
            console.log("Error fetching photos:", err)
        }
    }

    useEffect(() => {
        fetchRandomPhotos()
    }, []);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider">


                <div className="banner">
                    <h1>
                        Crystals Marketplace
                    </h1>
                    <p>
                        Beyond Classic
                    </p>
                </div>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {photos?.map((photo) => {
                    return (
                        <img key={photo.id} src={photo.urls.regular} alt={photo.description} />
                    )
                })}
            </div>



            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>

        </div>
    )
}