import { SubHeading, MenuItem } from "../../components";
import { wines, cocktails } from "../../constants";
import { menu } from "../../assets";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <section className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {wines.map((wine, i) => (
            <MenuItem
              key={wine.title + i}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={menu} alt="menu-img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {cocktails.map((cocktail, i) => (
            <MenuItem
              key={cocktail.title + i}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
