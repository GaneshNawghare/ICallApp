import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CallLogo = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_499_11021)">
      <Circle cx={24} cy={20} r={20} fill="#FCFDFF" />
    </G>
    <Path
      d="M32 23.5C30.7955 23.5 29.5982 23.3145 28.4502 22.9502C28.1001 22.8501 27.7002 22.8999 27.4502 23.2002L25.25 25.4C22.3999 23.9502 20.1001 21.65 18.6499 18.7998L20.8501 16.6001C21.1001 16.3501 21.1999 15.9502 21.1001 15.6001C20.6999 14.4502 20.5 13.25 20.5 12C20.5 11.4502 20.05 11 19.5 11H16C15.45 11 15 11.4502 15 12C15 21.3999 22.6001 29 32 29C32.5498 29 33 28.5498 33 28V24.5C33 23.9502 32.5498 23.5 32 23.5Z"
      fill="#353D6C"
    />
    <Defs></Defs>
  </Svg>
);
export default CallLogo;
