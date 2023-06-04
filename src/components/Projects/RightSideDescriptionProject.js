import CustomButton from "../UI/CustomButton/CustomButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./RightSideDescriptionProject.module.css";
import BodyRegular from "../UI/BodyRegular/BodyRegular";

const RightSideDescriptionProject = (props) => {
  return (
    <div key={props.key} className={classes["right-side-container"]}>
      <div className={classes["left-preview"]}>{props.screenShots}</div>
      <div className={classes["right-description"]}>
        <div>
          <H3 text={props.title} />
        </div>
        <div className={classes["tech-right-stack"]}>
          {props.techStack.map((e, index) => {
            return (
              <div className={classes["tech-right-stack-item"]}>
                <BodyRegular text={e} key={index} />
              </div>
            );
          })}
        </div>
        <div>
          <Paragraph>{props.description}</Paragraph>
        </div>
        <div>
          <CustomButton text={"Preview"} />
        </div>
      </div>
    </div>
  );
};

export default RightSideDescriptionProject;
