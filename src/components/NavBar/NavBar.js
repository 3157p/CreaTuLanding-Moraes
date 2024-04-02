import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>Ecommerce Carnes</h3>
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