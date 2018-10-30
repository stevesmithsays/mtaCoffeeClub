import React, {Component} from 'react';
import '../styles/scss/Header.scss';
import { Link } from 'react-router-dom';


class Header extends Component  {
  constructor(){
    super();

    this.state= {
      showNav: false,
    }

    this.showNav = this.showNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  showNav(e){
    e.preventDefault();

    this.setState({showNav: true}, () => {
      document.addEventListener('click', this.closeNav);
    });
  }

  closeNav(e){
    this.setState({showNav: false}, () => {
      document.removeEventListener('click', this.closeNav);
    });
  }
  render(){
    return(
    <div className="header-component">
      <div className="header-body">        
          <div className="site-logo">        
            <Link to="/home">
              <div className="logo-bod">
                <span className="logo-span">Mount Atlas</span>
              </div>
            </Link>          
        </div>

        <div className="nav-container">                 
            <nav className="site-nav">
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><a href="http://mountatlas.club/#/">Shop</a></li>
              </ul>
            </nav>          
        </div>
        {
          this.state.showNav 
          ? (
            <div className="dropnav-container">
              <nav className="dropnav">                
                  <div><Link to="/about">About</Link></div>
                  <div><Link to="/blog">Blog</Link></div>
                  <div><Link to="/schedule">Schedule</Link></div>
                  <div><a href="http://mountatlas.club/#/">Shop</a></div>
              </nav>
          </div>        
        ) 
        : (
          null
          )
        }
        <div className="menu-btn-container">
          <div className="menu-btn" onClick={this.showNav}>            
          </div>
        </div>

      </div>
    </div>
    )
  }
}

export default Header;