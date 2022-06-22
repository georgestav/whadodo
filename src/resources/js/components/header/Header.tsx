import React, {useEffect} from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAPIUserContext from "../../common/hooks/useAPIUserContext";
import useAPIError from "../../common/hooks/useAPIError";
import useAPISuccess from "../../common/hooks/useAPISuccess";
import axios, {AxiosError} from "axios";

const Header = () => {
    const { options, addOptions } = useAPIUserContext();
    const { addError } = useAPIError();
    const { addSuccess } = useAPISuccess();

    useEffect(()=>{
        // attempt to get user info
        axios.post('/user').then((res)=>{
            addOptions(res.data);
            // addSuccess({message: "Welcome Back " + res.data.name}); // TODO reactivate for deployment
        }).catch((onrejected)=>{
            if (onrejected instanceof AxiosError) {
                // addError({ ...onrejected.response?.data });
            }
            if (onrejected instanceof Error) {
                // return addError({message: onrejected.message});
            }
        })
    },[])
    const displayLogin = () =>{
        if(!options){
            return <Link className="nav-link" title="Login" to="/login">Login</Link>;
        }
    }
    const displayProfile = () =>{
        if(options){
            return <Link className="nav-link ms-auto me-5" title="Profile" to="/profile"><i className="fa-regular fa-user"></i></Link>;
        }
    }

    return (
        <Navbar bg="dark" variant="dark">
                <Nav className="ms-5 w-100">
                    <Link className="navbar-brand" title="Home" to="/">Whadodo</Link>
                    <Link className="nav-link" title="About us" to="/about-us">About us</Link>
                    {displayLogin()}
                    {displayProfile()}
                {/* Navigation links go here */}
                </Nav>
        </Navbar>
    );
};

export default Header;
