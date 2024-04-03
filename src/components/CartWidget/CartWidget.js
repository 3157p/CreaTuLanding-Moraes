import cart from "./assets/cart.jpg"
const CartWidget = () =>{

    return(
        <>
        <label>
        <img src={cart} width='48' height='48' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></img>
        0
        </label>
        
        </>
    )
}

export default CartWidget