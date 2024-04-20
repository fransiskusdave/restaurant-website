import { SubHeading } from "../../components";
import { welcome } from "../../assets";

import "./Header.css";

const Header = () => (
  <section className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volupat
        Morbi Facilisis Quam Scalerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__header-img app__wrapper_img">
      <img src={welcome} alt="header-img" />
    </div>
  </section>
);

export default Header;
