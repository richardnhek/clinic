import React, { Component } from 'react';
import { Link, Router, Switch, Route } from 'react-router-dom';
import ClinicService from "./ClinicService";
import AboutP from "./AboutPage";
class NavBar extends Component {
    render() {
        return (
            <nav>
            <nav class="nav">
                <div class="aboveContainer" id="abC">
                    <div class="scblDiv">
                    <a href="#" class="locationBtn">
                        <div>
                            <image/>
                            <text>ទីតាំងការងារ</text>
                        </div>
                    </a>
                    <a href="#" class="contactBtn">
                        <div>
                            <image/>
                            <text>ទំនាក់ទំនង</text>
                        </div>
                    </a>
                    <a href="#" class="bookBtn">
                        <div>
                            <image/>
                            <text>កក់ការពិគ្រោះ</text>
                        </div>
                    </a>
                    <a href="#" class="shopBtn">
                        <div>
                            <image/>
                            <text>ទិញ</text>
                        </div>
                    </a>
                    </div>
                    <div class="langDiv">
                        
                    </div>
                </div>
                <div class="container">
                    <div class="logo">
                        <Link to="/"><img className="imgLogo"></img></Link>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            <li>
                                {/* <a href="#" id="homeL">ទំព័រដំបូង</a>*/}
                                <Link to="/">ទំព័រដំបូង</Link>
                            </li>
                            <li><Link to="/about">អំពី​ពួក​យើង</Link></li>
                            <li><a href="#" id="promoL">ប្រម៉ូសិន</a></li>
                            <li><a href="#" id="treatL">ការព្យាបាល</a></li>
                            <li><a href="#" id="priceL">តម្លៃ</a></li>
                            <li><a href="#" id="productL">ផលិតផល</a></li>
                        </ul>
                    </div>
                    <div className="s130">
                        <form>
                            <div class="inner-form">
                                <div class="input-field first-wrap">
                                    <input id="search" type="text" placeholder="រកព័ត៌មានពី
 មុន, ស្លាកស្នាម...." />

                                    <div class="svg-wrapper">
                                        <button id="search_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="searchButton">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="menuDiv">
                    <span class="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    </div>

                </div>
            </nav>
            <Switch>
                <Route path="/about" component={AboutP} />
            </Switch>
            </nav>

        )
    }
}
export default NavBar;