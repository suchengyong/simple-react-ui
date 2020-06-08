import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface TransitionProps {
  visible: boolean;
  beforeEnter?: React.CSSProperties;
  afterEnter?: React.CSSProperties;
  beforeLeave?: React.CSSProperties;
  afterLeave?: React.CSSProperties;
  transitionActive?: React.CSSProperties;
}
declare class Transition extends React.Component<TransitionProps> {
  static displayName: string;
  static defaultProps: {
    transitionActive: {
      transition: string;
    };
  };
  static propTypes: {
    visible: PropTypes.Validator<boolean>;
    afterEnter: PropTypes.Requireable<object>;
    afterLeave: PropTypes.Requireable<object>;
    beforeEnter: PropTypes.Requireable<object>;
    beforeLeave: PropTypes.Requireable<object>;
    transitionActive: PropTypes.Requireable<object>;
  };
  private node;
  private monitored;
  private nodeDisplay;
  private rendered;
  componentDidMount(): void;
  componentDidUpdate(prevProps: TransitionProps, prevState: {}): void;
  componentWillUnmount(): void;
  addTransitionListener(): void;
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
export default Transition;
