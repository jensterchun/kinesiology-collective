import React, { Component } from 'react';
// import SearchBar from '../searchBar/SearchBar';

class Header extends Component {

  renderCloseIcon = () => {
    return ( <svg className="close-icon" viewBox="0 0 20 20">
    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    )
  }

  renderMenuIcon = () => {
    return <svg className="menu-icon" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  }

  constructor(props) {
  super(props);
    this.state = {
      menu: false
    };
    this.onOpenMenu = this.onOpenMenu.bind(this);
  }

  onOpenMenu = () => {
    this.setState( () => {
      document.getElementById('nav').classList.add('menu-visible');
      document.getElementById('contain').classList.add('menu-margin');
      //  return { menu: !prevState.menu };
      // this works too, but I couldn't figure how to use it with remove.
    })
  }
  onCloseMenu = () => {
    this.setState ( () => {
      document.getElementById('nav').classList.remove('menu-visible');
      document.getElementById('contain').classList.remove('menu-margin');
    })
  }
  // onShift = () => {
  //   this.setState ( () => {
  //     return document.getElementById('contain').classList.add('menu-margin');
  //   })
  // }

  render() {

    // let activeMenuClass = (this.state.menu ? ' menu-visible' : '');

    return (
      <div className="header-container">

        <div className="page-title">
            <a href="/" className="title-link">

              KC<span>&nbsp;|</span>

              <div className="title">
                <span>Kinesiology&nbsp;</span>
                <span>Collective</span>
              </div>

            </a>
        </div>

        <div className="header-btn-container">
            {/* <SearchBar /> */}
            <button className="menu-btn" onClick={this.onOpenMenu.bind(this)} >
              { this.renderMenuIcon() }
            </button>

          {/* {`btn-container ${activeMenuClass}`} */}
          <div id="nav" className="btn-container">

            <div>
              <button className="close-btn" onClick={this.onCloseMenu.bind(this)}>
                { this.renderCloseIcon() }
              </button>

              <ul className="menu-content">
                <li><a href="/">Home</a></li>
                <li><a href="/articles">Articles</a></li>
                {/* <li><a href="/tags">Tags</a></li> */}
                {/* <li><a href="/authors">Authors</a></li> */}
                <li><a href="/about">About us</a></li>
                <li><a href="/subscribe">Subscribe</a></li>
              </ul>
            </div>

            <div className="nav-bottom">
            
              <p>Help us continue creating relevant and up-to-date content!</p>

              <div>
                <a href="/support">Support us</a>
              </div>

              <div>
                <a href="/developer">Developer</a>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    );
  }
}

export default Header;