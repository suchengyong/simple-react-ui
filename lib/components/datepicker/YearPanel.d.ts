import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface YearPanelProps {
  startYear: number;
  year?: number;
  onClickYear?: (year: number, type: string) => any;
}
declare class YearPanel extends React.Component<YearPanelProps> {
  static displayName: string;
  static propTypes: {
    startYear: PropTypes.Requireable<number>;
    year: PropTypes.Requireable<number>;
    onClickYear: PropTypes.Requireable<(...args: any[]) => any>;
  };
  handleClickYear: (year: number, index: number) => void;
  renderYear: () => JSX.Element[];
  render(): JSX.Element;
}
export default YearPanel;
