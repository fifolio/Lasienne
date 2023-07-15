import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";

export default function Home() {
    return (
        <div className="home">
            {/* <Slider /> */}
            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
        </div>
    )
}