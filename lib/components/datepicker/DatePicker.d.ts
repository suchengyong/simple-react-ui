import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface DatePickerProps {
  value?: string;
  defaultValue?: string;
  defaultPickerValue?: string;
  placeholder?: string;
  footer?: string | React.ReactNode;
  onChange?: (value: string, valueObject: DateValue | null) => any;
  onOpenChange?: (visible: boolean) => any;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
}
export interface DateValue {
  year: number;
  month: number;
  date: number;
}
export interface DatePickerState {
  derivedValue: DateValue | null;
  pickerValue: DateValue;
  calendarVisible: boolean;
  mode: 'date' | 'month' | 'year' | 'decade';
  startYear: number;
  startDecade: number;
}
declare class DatePicker extends React.Component<
  DatePickerProps,
  DatePickerState
> {
  static displayName: string;
  static defaultProps: {
    zIndex: number;
  };
  static propTypes: {
    value: PropTypes.Requireable<string>;
    defaultValue: PropTypes.Requireable<string>;
    defaultPickerValue: PropTypes.Requireable<string>;
    placeholder: PropTypes.Requireable<string>;
    footer: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onOpenChange: PropTypes.Requireable<(...args: any[]) => any>;
    zIndex: PropTypes.Requireable<number>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: DatePickerProps,
    prevState: DatePickerState,
  ): {
    derivedValue: {
      year: number;
      month: number;
      date: number;
    };
    pickerValue: {
      year: number;
      month: number;
      date: number;
    };
  };
  private datePickerRef;
  constructor(props: DatePickerProps);
  componentDidMount(): void;
  componentDidUpdate(
    prevProps: DatePickerProps,
    prevState: DatePickerState,
  ): void;
  componentWillUnmount(): void;
  handleClickDocument: EventListener;
  saveDatePickerRef: (node: HTMLDivElement) => void;
  handleClickInput: () => void;
  handleOnChange: () => void;
  handleClickDate: (value: DateValue) => void;
  handleClickToday: () => void;
  handleOnClear: () => void;
  handleClickMonth: (month: number) => void;
  handleClickYear: (year: number, type: 'middle' | 'first' | 'last') => void;
  handleClickDecade: (
    decade: number,
    type: 'middle' | 'first' | 'last',
  ) => void;
  renderCalendarBody: () => JSX.Element;
  handleClickArrow: (position: string) => void;
  handleClickDouble: (position: string) => void;
  handleClickValue: () => void;
  renderCalendarHandler: () => JSX.Element;
  getHandleBarText: () => string;
  getStringFromDerivedValue: () => string;
  fixNumberToString: (n: number) => string;
  render(): JSX.Element;
}
export default DatePicker;
