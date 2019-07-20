import React from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, NavLink,
  MDBSideNavLink, MDBSideNavNav, MDBSideNav,
  MDBIcon, MDBContainer
} from "mdbreact";

class DoubleNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };

    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <div className="fixed-sn light-blue-skin">
        <MDBSideNav
          logo="/mountain_logo.png"
          triggerOpening={this.state.toggleStateA}
          breakWidth={this.state.breakWidth}
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          mask="strong"
          fixed
        >
          <li>
            <ul className="social">
              <li><a href="https://www.messenger.com/t/sebastienchagnonofficial"> <MDBIcon fab icon="facebook-messenger" /> </a></li>
              <li><a href="https://github.com/ChagnonSebastien"> <MDBIcon fab icon="github" /> </a></li>
              <li><a href="https://gitlab.com/ChagnonSebastien"> <MDBIcon fab icon="gitlab" /> </a></li>
            </ul>
          </li>
          <MDBSideNavNav>
            <MDBSideNavLink topLevel to="/" exact>
              <MDBIcon icon="home" className="mr-2" /> Home
            </MDBSideNavLink>
            <MDBSideNavLink topLevel to="/trails">
              <MDBIcon icon="mountain" className="mr-2" /> Trails
            </MDBSideNavLink>
            <MDBSideNavLink topLevel to="/contact">
              <MDBIcon icon="envelope" className="mr-2" /> Contact me
            </MDBSideNavLink>
          </MDBSideNavNav>
        </MDBSideNav>
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div
                onClick={this.handleToggleClickA}
                key="sideNavToggleA"
                style={{
                  lineHeight: "32px",
                  marginRight: "1em",
                  verticalAlign: "middle"
                }}
              >
                <MDBIcon icon="bars" color="white" size="2x" />
              </div>
            </MDBNavItem>
            <NavLink className="d-none d-md-inline" style={{ paddingTop: 5 }} to="/">
              Sébastien Chagnon
            </NavLink>
          </MDBNavbarNav>
          <MDBNavbarNav right style={specialCaseNavbarStyles}>
            <MDBNavItem active>
              <MDBNavLink to="#!">
                <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                <div className="d-none d-md-inline">Contact</div>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <main style={mainStyle}>
          <MDBContainer fluid className="mt-0">
            {this.props.children}
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default DoubleNavigationPage;