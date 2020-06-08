import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface UnfoldProps {
  visible: boolean;
  vertical?: boolean;
  transitionTime?: number;
}
export interface TransitionEffect {
  vertical: string;
  horizontal: string;
}
export interface LeaveTo {
  vertical: React.CSSProperties;
  horizontal: React.CSSProperties;
}
export interface PrevCssProp {
  paddingLeft: string | null;
  paddingRight: string | null;
  paddingTop: string | null;
  paddingBottom: string | null;
  borderTopWidth: string | null;
  borderBottomWidth: string | null;
  borderLeftWidth: string | null;
  borderRightWidth: string | null;
  width: string | null;
  height: string | null;
  overflowX: string | null;
  overflowY: string | null;
  overflow: string | null;
}
export interface PrevSize {
  width: string | null;
  height: string | null;
}
declare class Unfold extends React.Component<UnfoldProps> {
  static displayName: string;
  static defaultProps: {
    vertical: boolean;
    transitionTime: number;
  };
  static propTypes: {
    visible: PropTypes.Validator<boolean>;
    vertical: PropTypes.Requireable<boolean>;
    transitionTime: PropTypes.Requireable<number>;
  };
  private node;
  private monitored;
  private nodeDisplay;
  private rendered;
  private transitionEffect;
  private leaveTo;
  private prevCssProp;
  private prevSize;
  componentDidMount(): void;
  componentDidUpdate(prevProps: UnfoldProps, prevState: {}): void;
  componentWillUnmount(): void;
  addTransitionListener(): void;
  getNodeSize(node: HTMLElement): void;
  hideNode(): void;
  showNode(): void;
  setNodeStyle: (node: any, cssProp: any) => void;
  handleTransitionEnd: (e: Event) => void;
  render(): React.ReactElement<
    {},
    | string
    | ((
        props: any,
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      >)
    | (new (props: any) => React.Component<any, any, any>)
  >;
}
export default Unfold;
