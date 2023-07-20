import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Terror"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Fantasía">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Suspenso">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Aventura">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

