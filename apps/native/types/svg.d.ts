declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: React.ComponentClass<SvgProps, any>;
  export default content;
}
