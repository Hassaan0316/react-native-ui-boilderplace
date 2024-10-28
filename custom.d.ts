declare module "*.svg" {
  import React from "react";
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// declare module "*.svg" {
//   import React from "react";
//   import { SvgProps } from "react-native-svg";
//   const content: React.FC<SvgProps>;
//   export default content;
// }

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.gif";