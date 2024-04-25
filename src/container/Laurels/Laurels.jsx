import { SubHeading } from "../../components";
import { awards } from "../../constants";
import { laurels } from "../../assets";

import "./Laurels.css";

const AwardCard = ({ imgUrl, title, subtitle }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <section className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {awards.map((award) => (
          <AwardCard {...award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={laurels} alt="laurels" />
    </div>
  </section>
);

export default Laurels;
