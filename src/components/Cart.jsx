import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
    return (
        <div className='cart'>
            <main>
                <CartItem />
            </main>
            <aside>
                <h2>Subtotal: ${2000}</h2>
                <h2>Shipping: ${200}</h2>
                <h2>Tax: ${20}</h2>
                <h2>Total: ${200}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
    <div className="cartItem">
        <img src={imgSrc} alt='Item' />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{1}</p>
            <button onClick={() => increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
)

export default Cart