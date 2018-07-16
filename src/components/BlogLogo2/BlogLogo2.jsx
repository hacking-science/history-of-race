import React, { Component } from "react";
import Link from "gatsby-link";
import "./BlogLogo2.css";

class BlogLogo2 extends Component {
    render() {
        const { logo, url, title } = this.props;
        if (logo) {
            return (
                <Link className="blog-logo-2" to={url || "/"}>
                    {/* style={{ boxShadow: "none" }}> */}
                    <img src={logo} alt={title} />
                </Link>
            );
        }
        return null;
    }
}

export default BlogLogo2;
