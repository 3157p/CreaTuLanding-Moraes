import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Carne</button>
                <button>Achuras</button>
                <button>Materiales</button>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar