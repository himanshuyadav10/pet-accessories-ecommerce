import { useParams, Link } from "react-router-dom";
import { useState, useEffect}  from "react";
import { useDispatch } from "react-redux";
import { callAPI } from "../utils/CallApi";
import {  ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/Constants";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch();

    const getProduct = () =>{
        callAPI(`data/products.json`) .then ((productResults) => {
            setProduct(productResults[id]);
        });
    }

    const addQuantityToProduct = () => {
        setProduct((product.quantity = quantity));
        return product;
      };
    
    useEffect(() =>{
        getProduct();
    }, []);

    if(!product?.title) return<h1>Loading Product ...</h1>

  return (product &&
    <div className="h-screen bg-littlepaws-grey">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
            <div className="grid grid-cols-10 gap-2">
                {/* left */}
                <div className="col-span-3 bg-white p-8 rounded m-auto">
                    <img src={`${product.image}`} />
                </div>
               
                {/* middle */}
                <div className="col-span-5 bg-white p-4 rounded divide-y divide-gray-400">
                    <div className="mb-3">
                        <ProductDetails product={product} ratings={true} /> 
                    </div>
                    <div className="text-base xl:text-lg mt-3">
                        {product.description}
                    </div>
                </div>
               
                {/* right */}
                <div className="col-span-2 rounded p-4 bg-white">
                    <div className="text-xl xl:text-2xl text-right text-red-500 front-semibold">{GB_CURRENCY.format(product.price)}</div>
                    <div className="text-base xl:text-lg text-right text-gray-500 line-through front-semibold">{GB_CURRENCY.format(product.oldPrice)}</div>
                    <div className="text-sm xl:text-base text-blue-500 front-semibold mt-3">Free Returns</div>
                    <div className="text-sm xl:text-base text-blue-500 front-semibold mt-1">Free Delivery</div>
                    <div className="text-base xl:text-lg text-green-700 front-semibold mt-1">In Stock</div>
                    <div className="text-base xl:text-lg ">Quantity
                        <select onChange={(e) => setQuantity(e.target.value)} className="p-2 rounded-md bg-white border focus:border-indigo-600">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <Link to={"/checkout"}>
                    <button onClick={() => dispatch(addToCart(addQuantityToProduct()))} className="btn">Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage