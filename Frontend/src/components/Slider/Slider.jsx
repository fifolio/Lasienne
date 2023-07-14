import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.unsplash.com/photo-1583039949243-e4119fa27a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1409&q=80",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {data?.map((img) => {
                    return (
                       <img key={img.id} src={img} />
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