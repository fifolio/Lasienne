import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://placeholder.co/1200x801",
        "https://placeholder.co/1200x802",
        "https://placeholder.co/1200x803",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
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