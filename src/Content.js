import './App.css';
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function Content({itemsInCart,setItemsInCart}){
    return(
        <div className="Content">
            <Header/>
            <Section itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
        </div>
    );    
}

function Header(){
    return(
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    );
}

function Section({itemsInCart, setItemsInCart}){
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <ProductList itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>   
            </div>
        </section>
    );
}

export function ProductList({itemsInCart, setItemsInCart}){
    const productList =  require('./product_list.json').productList;
    //console.log(productList);
    return(
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                productList.map((product,index) => {
                    return(
                        <Product key={index} details={product} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
                    );
                })
            }
        </div>
    );
}

export function Product(props){
    const [prodState, setProdState] = useState(false);
    return(
        <div className="col mb-5">
            <div className="card h-100">
                <SaleBadge category={props.details.category}/>
                {/*Product Image */}
                <img className="card-img-top" src={props.details.imageURL} alt="..." />
                {/*Product Details */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/*Product Name */}
                        <h5 className="fw-bolder">{props.details.name}</h5>
                        {/*Product Review */}
                        <Rating rating={props.details.rating}/>
                        {/*Product Price */}
                        <Price offerPrice={props.details.offer_price} mrpPrice={props.details.mrp_price} category={props.details.category}/>
                    </div>
                </div>
                {/*Product Actions */}
                <ProductAction availablity={props.details.availablity} prodState={prodState} setProdState={setProdState} itemsInCart={props.itemsInCart} setItemsInCart={props.setItemsInCart}/>
            </div>
        </div>
    );
}

function SaleBadge(props){
    if(props.category == 'sale'){
        return(
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem"}, {right: "0.5rem"}}>Sale</div>
        )
    }
    return null;
}

function Rating(props){
    if(props.rating == null){
        return null;
    }else{
        return(
            <div className="d-flex justify-content-center small text-warning mb-2">
                {Array(props.rating).fill(props.rating).map(()=>{return <Star />})}
            </div>
        );
    }
    
}

function Star(){
    return(
        <div className="bi-star-fill"></div>
    );
}

function Price(props){
    if(props.category == "sale"){
        return(
            <div>
                <span className="text-muted text-decoration-line-through">{props.mrpPrice}</span>
                {props.offerPrice}
            </div>
        );
    }else{
        return(props.mrpPrice)
    }
}

function ProductAction({availablity,prodState,setProdState,itemsInCart,setItemsInCart}){
        return(
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className="btn btn-outline-dark mt-auto" onClick={()=> {
                        if(availablity){
                            if(!prodState && availablity){
                                setItemsInCart(itemsInCart+1)
                                toast("Product added to the cart!!")
                            }else{
                                setItemsInCart(itemsInCart-1)
                                toast("Product removed to the cart!!")
                            }
                            setProdState(!prodState);
                        }
                    }
                    }>
                        {(availablity)? ((!prodState)? "Add to Cart": "Remove from Cart") :"View Details"}
                    </button>
                </div>
            </div>
        )
}