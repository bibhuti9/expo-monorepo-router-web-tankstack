import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FA2A2A"
      d="M12.685 5 12 5.703 11.315 5a5.361 5.361 0 0 0-7.717 0c-2.074 2.127-2.137 5.554-.144 7.76l5.726 6.338a3.78 3.78 0 0 0 5.64 0l5.726-6.338c1.993-2.206 1.93-5.633-.144-7.76a5.361 5.361 0 0 0-7.717 0Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M16.25 6.5a.75.75 0 0 1 .75-.75 2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </Svg>
);
export default SvgComponent;
