import CustomButton from "../UI/CustomButton/CustomButton";
import H3 from "../UI/H3/H3";
import Paragraph from "../UI/Paragraph/Paragraph";
import classes from "./LeftSideDescriptionProject.module.css";

const LeftSideDescriptionProject = (props) => {
  return (
    <div className={classes["left-side-container"]}>
      <div className={classes["left-description"]}>
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
      <div className={classes["right-preview"]}>HIV EOERI</div>
    </div>
  );
};

export default LeftSideDescriptionProject;
