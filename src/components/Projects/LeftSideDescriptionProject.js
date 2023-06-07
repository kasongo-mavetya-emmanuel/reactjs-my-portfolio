import CustomButton from "../UI/CustomButton/CustomButton";
import CustomOutlinedButton from "../UI/CustomOutlinedButton/CustomOutlinedButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./LeftSideDescriptionProject.module.css";
import BodyRegular from "../UI/BodyRegular/BodyRegular";

const LeftSideDescriptionProject = (props) => {
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
    <div className={classes["left-side-container"]}>
      <div className={classes["left-description"]}>
        <div>
          <H3 text={props.title} />
        </div>
        <div className={classes["tech-left-stack"]}>
          {props.techStack.map((e, index) => {
            return (
              <div key={index} className={classes["tech-left-stack-item"]}>
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
      <div className={classes["right-preview"]}>
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
    </div>
  );
};

export default LeftSideDescriptionProject;
