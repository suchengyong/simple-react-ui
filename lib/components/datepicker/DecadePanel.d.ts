import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface DecadePanelProps {
  startDecade: number;
  decade?: number;
  onClickDecade?: (decade: number, type: string) => any;
}
declare class DecadePanel extends React.Component<DecadePanelProps> {
  static displayName: string;
  static propTypes: {
    startDecade: PropTypes.Requireable<number>;
    decade: PropTypes.Requireable<number>;
    onClickDecade: PropTypes.Requireable<(...args: any[]) => any>;
  };
  handleClickDecade: (decade: number, index: number) => void;
  renderDecade: () => JSX.Element[];
  render(): JSX.Element;
}
export default DecadePanel;
