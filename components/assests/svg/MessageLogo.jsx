import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MessageLogo = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_499_11027)">
      <Circle cx={24} cy={20} r={20} fill="#FCFDFF" />
    </G>
    <Path
      d="M32.6266 12.8453H15.3734C15.2108 12.8455 15.0548 12.9103 14.9398 13.0253C14.8248 13.1404 14.7601 13.2963 14.76 13.459V14.6936C14.76 14.7505 14.8217 14.8157 14.8721 14.8421L23.9407 20.0221C23.964 20.0353 23.9903 20.0422 24.017 20.042C24.0444 20.0421 24.0713 20.0348 24.0948 20.0209L32.8894 14.8472C32.9388 14.8196 33.0698 14.7466 33.119 14.713C33.1786 14.6725 33.24 14.6357 33.24 14.563V13.4588C33.2398 13.2961 33.1751 13.1402 33.0601 13.0252C32.9451 12.9102 32.7892 12.8455 32.6266 12.8453Z"
      fill="#353D6C"
    />
    <Path
      d="M33.1635 16.555C33.1399 16.5415 33.1131 16.5345 33.0859 16.5347C33.0588 16.5348 33.0321 16.5422 33.0087 16.5559L28.0318 19.4842C28.012 19.4957 27.995 19.5116 27.9821 19.5306C27.9693 19.5496 27.9608 19.5713 27.9575 19.594C27.9542 19.6167 27.956 19.6399 27.9628 19.6618C27.9696 19.6837 27.9813 19.7038 27.997 19.7206L32.9746 25.0862C32.9888 25.1017 33.0062 25.1141 33.0255 25.1225C33.0448 25.131 33.0656 25.1353 33.0867 25.1352C33.1273 25.1351 33.1663 25.119 33.195 25.0902C33.2238 25.0615 33.24 25.0225 33.24 24.9818V16.6882C33.2401 16.6612 33.2331 16.6347 33.2197 16.6113C33.2062 16.5879 33.1868 16.5685 33.1635 16.555Z"
      fill="#353D6C"
    />
    <Path
      d="M26.5975 20.4675C26.5739 20.4418 26.5422 20.4249 26.5076 20.4198C26.4731 20.4146 26.4378 20.4215 26.4077 20.4392L24.4128 21.613C24.2959 21.6805 24.1635 21.7165 24.0285 21.7174C23.8935 21.7183 23.7607 21.6841 23.6429 21.6181L21.8873 20.6151C21.859 20.599 21.8262 20.5923 21.7938 20.596C21.7614 20.5997 21.731 20.6136 21.7071 20.6357L15.0403 26.8196C15.0229 26.8359 15.0094 26.8561 15.0012 26.8786C14.9929 26.901 14.9899 26.9251 14.9926 26.9488C14.9952 26.9726 15.0034 26.9954 15.0165 27.0155C15.0295 27.0356 15.047 27.0523 15.0677 27.0644C15.1714 27.1253 15.2715 27.1544 15.3732 27.1544H32.4499C32.4798 27.1544 32.5091 27.1457 32.534 27.1293C32.559 27.1129 32.5786 27.0894 32.5903 27.062C32.6023 27.0347 32.606 27.0044 32.601 26.975C32.596 26.9457 32.5824 26.9184 32.562 26.8966L26.5975 20.4675Z"
      fill="#353D6C"
    />
    <Path
      d="M20.2402 19.9042C20.2578 19.8879 20.2714 19.8676 20.2798 19.8451C20.2882 19.8225 20.2911 19.7984 20.2885 19.7745C20.2858 19.7506 20.2775 19.7276 20.2643 19.7075C20.2511 19.6874 20.2334 19.6707 20.2126 19.6587L14.9887 16.675C14.9654 16.6618 14.939 16.6549 14.9122 16.655C14.8854 16.6552 14.8591 16.6624 14.836 16.6759C14.8128 16.6894 14.7936 16.7088 14.7803 16.732C14.767 16.7553 14.76 16.7816 14.76 16.8084V24.6372C14.7598 24.6671 14.7684 24.6964 14.7848 24.7215C14.8011 24.7465 14.8244 24.7663 14.8518 24.7782C14.8792 24.7902 14.9095 24.7938 14.9389 24.7887C14.9684 24.7836 14.9957 24.77 15.0175 24.7496L20.2402 19.9042Z"
      fill="#353D6C"
    />
    <Defs></Defs>
  </Svg>
);
export default MessageLogo;
