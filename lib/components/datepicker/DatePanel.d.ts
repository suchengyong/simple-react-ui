import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface DateValue {
  year: number;
  month: number;
  date: number;
}
export interface IDatePanelProps {
  year: number;
  month: number;
  value?: DateValue | null;
  onClickDate?: (value: DateValue) => any;
}
declare class DatePanel extends React.Component<IDatePanelProps> {
  static displayName: string;
  static propTypes: {
    year: PropTypes.Validator<number>;
    month: PropTypes.Validator<number>;
    value: PropTypes.Requireable<object>;
    onClickDate: PropTypes.Requireable<(...args: any[]) => any>;
  };
  isSelected: (year: number, month: number, date: number) => boolean;
  isToday: (year: number, month: number, date: number) => boolean;
  renderPrefix: (prefix: number[]) => JSX.Element[];
  renderDateList: (dateList: number[]) => JSX.Element[];
  renderSuffix: (suffix: number[]) => JSX.Element[];
  renderDateLists: () => JSX.Element[];
  handleClickDate: (year: number, month: number, date: number) => void;
  render(): JSX.Element;
}
export default DatePanel;
