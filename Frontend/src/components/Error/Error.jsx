import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <div>
                <center style={{ 'padding': '50px 0 10px 0', 'fontSize': 'x-large', 'textTransform': 'capitalize', 'fontWeight': 'bold', 'color': 'gray' }}>
                    <img src="error.jpg" width="500" />
                    <br />
                    <h5>
                        Oops! we couldn't find this page
                    </h5>
                    <div>
                        <Link to="/">
                            <button style={{
                                'padding': '10px 20px',
                                'margin': '20px 0 50px',
                                'fontSize': 'large',
                                'border': 'none',
                                'backgroundColor': 'lightblue',
                                'borderRadius': '30px',
                                'cursor': 'pointer',
                                'boxShadow': '1px 5px 20px gray'
                            }}>Return Home</button>
                        </Link>
                    </div>
                </center>
            </div>
        </>
    )
}