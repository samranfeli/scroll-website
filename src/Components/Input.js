import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.main}>
      <label>{props.label}</label>
      <input
        className={classes.input}
        placeholder={props.placeholder}
        style={{ width: props.small && "93%" }}
      />
    </div>
  );
};

export default Input;
