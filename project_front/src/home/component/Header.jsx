import React from "react";
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <div>
            {/* <!--::header part start::--> */}
    <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/"> <img src="img/logo.png" alt="logo" /> </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="blog.html" id="navbarDropdown_1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <Link className="dropdown-item" to="category.html"> Shop Catagory</Link>
                                        <Link className="dropdown-item" to="single-product.html">product details</Link>
                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="blog.html" id="navbarDropdown_3"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <Link className="dropdown-item" to="login.html"> login</Link>
                                        <Link className="dropdown-item" to="tracking.html">tracking</Link>
                                        <Link className="dropdown-item" to="checkout.html">product checkout</Link>
                                        <Link className="dropdown-item" to="cart.html">shopping cart</Link>
                                        <Link className="dropdown-item" to="confirmation.html">confirmation</Link>
                                        <Link className="dropdown-item" to="elements.html">elements</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="blog.html" id="navbarDropdown_2"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        blog
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <Link className="dropdown-item" to="blog.html"> blog</Link>
                                        <Link className="dropdown-item" to="single-blog.html">Single blog</Link>
                                    </div>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact.html">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hearer_icon d-flex">
                            <Link id="search_1" to="javascript:void(0)"><i className="ti-search"></i></Link>
                            <Link to=""><i className="ti-heart"></i></Link>
                            <div className="dropdown cart">
                                <Link className="dropdown-toggle" to="#" id="navbarDropdown3" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-cart-plus"></i>
                                </Link>
                                {/* <!-- <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="single_product">
    
                                    </div>
                                </div> --> */}
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="search_input" id="search_input_box">
            <div className="container ">
                <form className="d-flex justify-content-between search-inner">
                    <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                    <button type="submit" className="btn"></button>
                    <span className="ti-close" id="close_search" title="Close Search"></span>
                </form>
            </div>
        </div>
    </header>
    {/* <!-- Header part end--> */}
        </div>
    )
}

export default Header