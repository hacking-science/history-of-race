import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import Img from "gatsby-image";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import MainContent from "../layouts/MainContent/MainContent";

class IndexTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {

    return (
      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <MainHeader cover={this.props.data.headerImage}>
              <MainNav overlay={config.siteCover}>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
              <div className="vertical">
                <Img
                  title="History of race"
                  alt="Teenager of colour and policemean"
                  sizes={this.props.data.headerImage.sizes}
                />
                <div className="main-header-content inner">
                  <PageTitle text={config.siteTitle} />
                  <PageDescription text={config.siteDescription} />
                  <SocialMediaIcons
                    urls={config.siteSocialUrls}
                    color="currentColor"
                  />
                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}
              >
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
              <div className="inner">
                  <MainContent></MainContent>
                  <br></br>
                  <br></br>
                  <br></br>
              </div>
          </div>
          {/*<div className="inner">*/}
            {/*<MainContent></MainContent>*/}
          {/*</div>*/}
          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

export default IndexTemplate;

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/cover/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`