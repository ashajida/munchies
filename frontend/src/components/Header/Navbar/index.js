import { useState, useContext, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi"; 
import { GiCookingPot } from "react-icons/gi";
import { Header, Nav, IconsWrapper, Logo, MenuBtn, Links, NavLink, NavContainer, NavWrapper } from "./Navbar.elements";
import AuthContext from "../../../providers/AuthContext";
import { useHistory } from "react-router-dom";

const NavBar = () => {

    const [NavControl, setNavControl] = useState(false); 
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const history = useHistory();

    const handleClick = () => {
        setNavControl(!NavControl);
    }

    const handleLogout = () => {
        
        fetch('/api/logout')
        .then(res => res.json())
        .then(res => {
            localStorage.removeItem('isAuth');
            setIsAuth(false);
            history.push('/');
        });
        
    }

    return (
        <Header>
            <NavContainer>
                <Nav>
                    <IconsWrapper>
                        <Logo><GiCookingPot />EzPzMeals</Logo>
                        <MenuBtn onClick={handleClick}>{ NavControl ?  <GrClose/> : <BiMenuAltRight/> }</MenuBtn>
                    </IconsWrapper>
                    <Links navControl={NavControl}>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/recipes">Recipes</NavLink>
                        {isAuth && <NavLink to="/dashboard">Dashboard</NavLink>}
                        {isAuth && <NavLink onClick={handleLogout}>Logout</NavLink>}
                   </Links>
                 </Nav>
            </NavContainer>
        </Header>
    );
}


export default NavBar;