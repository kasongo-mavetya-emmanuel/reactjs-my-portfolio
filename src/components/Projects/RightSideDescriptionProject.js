import CustomButton from "../UI/CustomButton/CustomButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./RightSideDescriptionProject.module.css";

const RightSideDescriptionProject = (props) => {
  return (
    <div className={classes["right-side-container"]}>
      <div className={classes["left-preview"]}>HIV EOERI</div>
      <div className={classes["right-description"]}>
        <div>
          <H3 text={props.title} />
        </div>
        <div>{props.techStack.map((e) => e)}</div>
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
