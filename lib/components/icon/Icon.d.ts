import * as React from 'react';
import '../utils/svg.js';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
