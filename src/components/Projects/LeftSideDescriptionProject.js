import CustomButton from "../UI/CustomButton/CustomButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./LeftSideDescriptionProject.module.css";
import BodyRegular from "../UI/BodyRegular/BodyRegular";

const LeftSideDescriptionProject = (props) => {
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
        <div>
          <CustomButton text={"Preview"} />
        </div>
      </div>
      <div className={classes["right-preview"]}>{props.children}</div>
    </div>
  );
};

export default LeftSideDescriptionProject;
