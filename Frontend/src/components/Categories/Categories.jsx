import { Link } from 'react-router-dom'
import "./categories.scss"

export default function Categories() {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://placeholder.co/800" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://placeholder.co/800" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://placeholder.co/800" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://placeholder.co/800" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://placeholder.co/800" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://placeholder.co/800" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}