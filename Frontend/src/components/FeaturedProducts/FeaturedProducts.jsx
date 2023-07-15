import Card from "../Card/Card";
import "./FeaturedProducts.scss"

export default function FeaturedProducts({ type }) {

    const data = [
        {
            id: 1,
            img: 'https://placeholder.co/250',
            title: 'Title here',
            oldPrice: 32,
            price: 12
        },
        {
            id: 2,
            img: 'https://placeholder.co/250',
            title: 'Title here',
            oldPrice: 32,
            price: 12
        },
        {
            id: 3,
            img: 'https://placeholder.co/250',
            title: 'Title here',
            oldPrice: 32,
            price: 12
        },
        {
            id: 4,
            img: 'https://placeholder.co/250',
            title: 'Title here',
            oldPrice: 32,
            price: 12
        },
    
    ];



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
                {data?.map(item => (
                    <Card key={item.id} item={item} />
                )
                )}
            </div>
        </div>
    )
}