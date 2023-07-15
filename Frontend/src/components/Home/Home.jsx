import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="featured" />
            <FeaturedProducts type="trending" />
        </div>
    )
}