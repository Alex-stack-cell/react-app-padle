import "./Showcase.css";
import Title from "./Title";
import Introduction from "./Introduction";

const Showcase = (props) => {
  return (
    <div className="hero">
      <Title className="hero__title" title={props.pageTitle} />
      <Introduction content={props.pageIntro} />
    </div>
  );
};

export default Showcase;
