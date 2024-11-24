import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ErrorIcon = (props: SvgProps) => {
    return (
  <Svg
    width={72}
    height={73}
    viewBox="0 0 72 73"
    fill="none"
    {...props}
  >
    <Path
      d="M36 23.276V36.6094M36 49.9427H36.0333M66 36.6094C66 53.1779 52.5685 66.6094 36 66.6094C19.4315 66.6094 6 53.1779 6 36.6094C6 20.0408 19.4315 6.60938 36 6.60938C52.5685 6.60938 66 20.0408 66 36.6094Z"
      stroke="#FF7D7D"
      strokeWidth={1.95}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)};
export default ErrorIcon;
