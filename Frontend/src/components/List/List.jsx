import { Card } from '..'
import "./List.scss";

export default function List() {

    const data = [
        {
            id: 1,
            img: "https://placeholder.co/800",
            img2: "https://placeholder.co/801",
            title: "product title",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://placeholder.co/800",
            img2: "https://placeholder.co/801",
            title: "product title",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://placeholder.co/800",
            img2: "https://placeholder.co/801",
            title: "product title",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://placeholder.co/800",
            img2: "https://placeholder.co/801",
            title: "product title",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className="list">
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}