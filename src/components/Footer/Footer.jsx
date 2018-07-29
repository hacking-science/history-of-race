import React, { Component } from "react";
import "./Footer.css";
import config from "../../../data/SiteConfig";
import BlogLogo from "../BlogLogo/BlogLogo";
import BlogLogo2 from "../BlogLogo2/BlogLogo2";
import BlogPicture from "../BlogPicture/BlogPicture";

class Footer extends Component {
  render() {
    const PoweredBy = props => {
      const { show } = props;
      if (show) {
        return (
          <section className="poweredby">
            Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
          </section>
        );
      }
      return null;
    };

    const { promoteGatsby } = this.props;
    const { label, url, year } = this.props.copyright;
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
            <a href="https://www.consented.co.uk/">Consented</a> & <a href="https://www.hackingeducation.io/">hackingEducation</a> &copy;{" "}
          {year || new Date().getFullYear()}
            <p>Email: info@raceinbritain.org</p>
        </section>
          <section>
          <BlogLogo2 logo={config.siteLogohE} title={config.siteTitle} />
          </section>
          <section>
              <BlogLogo logo={config.siteLogoConsented} title={config.siteTitle} />
          </section>
        {/*<PoweredBy show={promoteGatsby} />*/}
      </footer>
    );
  }
}

export default Footer;
