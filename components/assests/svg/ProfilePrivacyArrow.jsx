import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
const ProfilePrivacyArrow = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_206_887"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={14}
      height={14}
    >
      <Rect
        x={14}
        y={14}
        width={14}
        height={14}
        transform="rotate(-180 14 14)"
        fill="#D9D9D9"
      />
    </Mask>
    <G mask="url(#mask0_206_887)">
      <Path
        d="M4.66667 1.16665L10.5 6.99998L4.66667 12.8333L3.63125 11.7979L8.42917 6.99998L3.63125 2.20206L4.66667 1.16665Z"
        fill="#596066"
      />
    </G>
  </Svg>
);
export default ProfilePrivacyArrow;
