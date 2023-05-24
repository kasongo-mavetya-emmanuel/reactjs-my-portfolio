import classes from "./SkillIcon.module.css";

const SkillIcon = (props) => {
  return (
    <div className={classes["icon-wrapper"]}>
      <img className={classes["icon"]} src={props.source} alt={props.alt} />
    </div>
  );
};

export default SkillIcon;
