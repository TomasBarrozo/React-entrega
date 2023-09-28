import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <h4>Posada Las Lengas</h4>
      <ul>
        <li>Inicio</li>
        <li>Habitaciones</li>
        <li>Contacto</li>
      </ul>

      {/*WIDGET CARRO*/}
      <CartWidget />
    </div>
  );
};

export default Navbar;
