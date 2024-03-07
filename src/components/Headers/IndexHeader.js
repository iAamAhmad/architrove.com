/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/pexels-expect-best-323780.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <div className="row hero_inside_div">
              <div className="col-md-4 ">
                <button className="hero-button">FLOOR PLANS</button>
                <button className="hero-button">GRAPHIC DESIGNS</button>
                <button className="hero-button">MATTERPORT SERVICES</button>
              </div>
              <div className="col-md-4">
                <button className="hero-button">PHOTO EDITING</button>
                <button className="hero-button">VIRTUAL TOURS</button>
                <button className="hero-button">BIM SERVICES</button>
              </div>
              <div className="col-md-4">
                <button className="hero-button">VIDEO EDITING</button>
                <button className="hero-button">VIRTUAL STAGING</button>
                <button className="hero-button">CGI / ARTIST IMPRESSIONS</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
