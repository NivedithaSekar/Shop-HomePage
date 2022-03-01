import './App.css';

//Components in NavigationBar - Brand, NavigatorButton, NavigatorContent(Shopping, ShoppingCart)
export function NavigationBar({itemsInCart}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Brand />
                {/**Navigator button appears for  width<992px*/}
                <NavigatorButton/>
                <NavigatorContent itemsInCart={itemsInCart} />
            </div>
        </nav>
    );
}

export function Brand(){
    return(
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
    );
}

export function NavigatorButton(){
    return(
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    );
}

export function NavigatorContent({itemsInCart}){
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <Shopping />
            </ul>
            <ShoppingCart itemsInCart={itemsInCart}/>
        </div>
    );
}

//Categories of Shopping products available
export function Shopping(){
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All Products</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
            </ul>
        </li>
    );
}

//High level view of the shopping cart - Number of Products in Cart
export function ShoppingCart({itemsInCart}){
    return(
        <div className="d-flex">
            <button className="btn btn-outline-dark">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{itemsInCart}</span>
            </button>
        </div>
    );
}