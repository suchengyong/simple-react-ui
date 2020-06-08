import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface MonthPanelProps {
  month?: number;
  onClickMonth?: (month: number) => any;
}
declare class MonthPanel extends React.Component<MonthPanelProps> {
  static displayName: string;
  static propTypes: {
    month: PropTypes.Requireable<number>;
    onClickMonth: PropTypes.Requireable<(...args: any[]) => any>;
  };
  private monthArray;
  handleClickMonth: (month: number) => void;
  render(): JSX.Element;
}
export default MonthPanel;
