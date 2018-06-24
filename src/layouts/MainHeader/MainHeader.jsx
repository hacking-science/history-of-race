import React from "react";
import classNames from "classnames";
import "./MainHeader.scss";

class MainHeader extends React.Component {
  render() {
    const { children } = this.props;

    const classes = classNames("main-header", this.props.className);

    return (
      <header className={classes}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
