import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface Size {
  width: number;
  height: number;
}
export interface LightUpProps {
  src?: any;
  imgClosable?: boolean;
}
declare class LightUp extends React.Component<LightUpProps> {
  static displayName: string;
  static defaultProps: {
    imgClosable: boolean;
  };
  static propTypes: {
    src: PropTypes.Requireable<string>;
    imgClosable: PropTypes.Requireable<boolean>;
  };
  state: {
    visible: boolean;
    x: number;
    y: number;
  };
  private img;
  private size;
  private maskRef;
  private wrapperRef;
  getImgSize: () => void;
  setWrapperSize: () => void;
  handleClickImg: React.MouseEventHandler<any>;
  handleClickNewImg: () => void;
  saveMaskRef: (node: HTMLDivElement) => void;
  saveWrapperRef: (node: HTMLDivElement) => void;
  appendNewImg: (src: string, alt: string) => React.ReactPortal;
  renderChildren: () => JSX.Element;
  render(): JSX.Element;
}
export default LightUp;
