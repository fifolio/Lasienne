import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis dolorem, officia ducimus perferendis laboriosam eum similique dicta, perspiciatis inventore quis aut. Architecto dignissimos illo.
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis dolorem, officia ducimus perferendis laboriosam eum similique dicta, perspiciatis inventore quis aut.
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">
                        <img src="/icon.png" width="20px" style={{ marginRight: '6px', marginBottom: '-3px' }} />
                        Crystals
                    </span>
                    <span className="copyright">&copy; {new Date().getFullYear()} All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" />
                </div>
            </div>
        </div>
    )
}