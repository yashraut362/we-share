import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../AnimatedProgressProvider";

const RounedProgressbar = (props) => {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={100}
      duration={1.4}
      easingFunction={easeQuadInOut}
      repeat
    >
      {(value) => {
        const roundedValue = Math.round(props.progress);
        return (
          <CircularProgressbar
            value={props.progress}
            text={`${roundedValue}%`}
            styles={buildStyles({ pathTransition: "none" })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default RounedProgressbar;
