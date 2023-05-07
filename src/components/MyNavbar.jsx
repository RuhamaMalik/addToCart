import { Container, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Badge } from '@mui/material';
import { AiFillHome } from "react-icons/ai";
import { useSelector } from 'react-redux';
const MyNavbar = () => {
    const cartState = useSelector((state) => state.cartReducer);
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand ><img src={logo} style={{ width: "3em" }} />ecomApp</Navbar.Brand>
                    <div>
                        <NavLink className='text-light text-decoration-none m-3' to='/'><AiFillHome size={26} onMouseOver={({ target }) => target.style.color = "#f2b527"}
                            onMouseOut={({ target }) => target.style.color = "white"} /></NavLink>
                        
                         <NavLink className='text-light text-decoration-none' to='/cart'>
                        <Badge badgeContent={cartState.cartItems.length} color="warning">
                       <Icon.CartFill size={26} onMouseOver={({ target }) => target.style.color = "#f2b527"}
                            onMouseOut={({ target }) => target.style.color = "white"} />

                        </Badge>
                        </NavLink>

                    </div>




                </Container>
            </Navbar>

            <Outlet />

        </>
    )
}

export default MyNavbar