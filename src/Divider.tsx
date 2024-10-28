import Block from "./Block";
import { colorPalletes } from "./Constants";
import { iViewStyles } from "./interface";

const Divider = (props: iViewStyles) => {
  return (
    <Block
      importantForAccessibility="no"
      accessibilityElementsHidden
      accessible={false}
      height={1}
      backgroundColor={colorPalletes['skyline-50']}
      {...props}></Block>
  );
};

export default Divider;
