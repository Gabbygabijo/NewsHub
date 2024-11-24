import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SuccessIcon = (props: SvgProps) => {
    return(
  <Svg
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    {...props}
  >
    <Path
      d="M25.8458 36.0006L32.615 42.7698L46.1535 29.2314M66.4612 36.0006C66.4612 52.824 52.8231 66.4621 35.9996 66.4621C19.1762 66.4621 5.53809 52.824 5.53809 36.0006C5.53809 19.1772 19.1762 5.53906 35.9996 5.53906C52.8231 5.53906 66.4612 19.1772 66.4612 36.0006Z"
      stroke="#20CF70"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)};
export default SuccessIcon;
