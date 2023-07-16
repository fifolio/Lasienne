import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import "./Cart.scss";

export default function Cart(){

    const data = [
        {
            id: 1, 
            img: "https://placeholder.co/400",
            title: "title here 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis.",
            isNew: true,
            oldPrice: 324,
            price: 220
        },
        {
            id: 1, 
            img: "https://placeholder.co/400",
            title: "title here 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae consequuntur labore rem optio ducimus repellendus,",
            isNew: true,
            oldPrice: 324,
            price: 220
        }
    ]

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 25)}...</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
            ))}

            <div className="total">
                <span>Subtotal</span>
                <span>$235</span>
            </div>
            <button>PROCEED TO CHECKOUT</button> 
            <span className="reset">Reset Cart</span>
        </div>
    )
}