import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";
import "../../styles/navbar.css";
const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemList">
                    <ItemListContainer 
                        itemUno = "Terror"
                        itemDos = "Fantasía"
                        itemTres = "Suspenso"
                        itemCuatro = "Aventura"
                    />
                </nav>

                <div className="containerCart">
                    <CartWidget />
                </div>

                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;