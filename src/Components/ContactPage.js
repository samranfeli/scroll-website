import classes from "./ContactPage.module.css";
import Input from "./Input";

const ContactPage = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
      <div className={classes.inline}>
        <Input placeholder="Enter your name" label="First Name" small={true} />
        <Input
          placeholder="Enter your last name"
          label="Last Name"
          small={true}
        />
      </div>
      <Input placeholder="Enter your address" label="Email Address" />
      <Input placeholder="Enter your email" label="Company" />
      <Input placeholder="Enter your message" label="Message" />
      <button>Start For Free</button>
    </form>
  );
};

export default ContactPage;
