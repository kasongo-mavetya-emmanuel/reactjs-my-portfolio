import CustomButton from "../UI/CustomButton/CustomButton";
import CustomOutlinedButton from "../UI/CustomOutlinedButton/CustomOutlinedButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./RightSideDescriptionProject.module.css";
import BodyRegular from "../UI/BodyRegular/BodyRegular";

const RightSideDescriptionProject = (props) => {
  function handleOpenSourceCode(e) {
    e.preventDefault();
    if (props.sourceCodeLink) {
      window.open(props.sourceCodeLink);
    }
  }

  function handleOpenLive(e) {
    e.preventDefault();

    if (props.liveLink) {
      window.open(props.liveLink);
    }
    if (props.previewLink) {
      window.open(props.previewLink);
    }
  }
  return (
    <div className={classes["right-side-container"]}>
      <div className={classes["left-preview"]}>
        {" "}
        {props.screenShots.map((e, index) => {
          return (
            <img
              key={index}
              data-src={e.src}
              alt={e.altText}
              className={e.classes}
            />
          );
        })}
      </div>
      <div className={classes["right-description"]}>
        <div>
          <H3 text={props.title} />
        </div>
        <div className={classes["tech-right-stack"]}>
          {props.techStack.map((e, index) => {
            return (
              <div key={index} className={classes["tech-right-stack-item"]}>
                <BodyRegular text={e} />
              </div>
            );
          })}
        </div>
        <div>
          <Paragraph>{props.description}</Paragraph>
        </div>
        <div className={classes["buttons-wrapper"]}>
          <CustomButton
            text={`${props.liveLink ? "Live" : "Preview"}`}
            onClick={handleOpenLive}
          />
          {props.isSourceCode && (
            <CustomOutlinedButton
              text={"Source Code"}
              onClick={handleOpenSourceCode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSideDescriptionProject;
