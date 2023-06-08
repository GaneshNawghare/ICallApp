import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ChatLogo = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_499_11014)">
      <Circle cx={24} cy={20} r={20} fill="#FCFDFF" />
    </G>
    <Path
      d="M25.7859 25.1328C25.6641 25.0484 25.4484 24.9219 24.9656 24.9219H19.5234C17.8969 24.9219 16.5 23.6984 16.5 22.1469V17.4219H16.4156C15.1828 17.4219 14.25 18.3828 14.25 19.5547V25.5969C14.25 26.7687 15.2531 27.5 16.4859 27.5H17.25V29.75L19.7391 27.6406C19.8281 27.575 19.9875 27.5 20.3578 27.5H24.5672C25.6453 27.5 26.7891 26.9656 27 26L25.7859 25.1328Z"
      fill="#353D6C"
    />
    <Path
      d="M30.7969 10.25H20.6109C18.9844 10.25 18 11.5063 18 13.0531V20.9375C18 22.4891 19.3125 23.75 20.9391 23.75H25.6781C26.1656 23.75 26.3812 23.8578 26.4984 23.9469L30 26.75V23.75H30.7969C32.4281 23.75 33.75 22.4891 33.75 20.9422V13.0531C33.75 11.5063 32.4281 10.25 30.7969 10.25Z"
      fill="#353D6C"
    />
    <Defs></Defs>
  </Svg>
);
export default ChatLogo;
