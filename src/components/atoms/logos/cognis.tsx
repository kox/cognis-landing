import { LogosProps } from ".";
import logo from "../../../../public/cognis_logo.png"; // Adjust the path as necessary

const Cognis = (props: LogosProps) => {
  console.log(props);
  return (
    <div>
      <img src={logo} alt="Cognis" {...props} />
    </div>
  );
};

export default Cognis;
