import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://neemans.com/cdn/shop/files/ND-RLSneakers-HaleBlack-_WebOptimized_a_1000x.jpg?v=1702516659";




const Home = () => {
    const productList = [{ name: "Mac Book", price: 12000, imgSrc: img1, id: "ckjcakjc32389cdksj" }, { name: "Black Shoes", price: 400, imgSrc: img2, id: "ckjsdcakjc32389cdksj" }]

    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options })
        dispatch({
            type: "calculatePrice",

        })
        toast.success("Added To Card")

    }
    return (
        <div className='home'>
            {
                productList.map((i) => (
                    <ProductCard key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} id={i.id} handler={addToCartHandler} />
                ))
            }
        </div>
    )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
)

export default Home