import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface SearchProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  enterButton?: boolean | string | React.ReactNode;
  onSearch?: (value: string) => any;
  onChange?: React.ChangeEventHandler;
  className?: string;
  style?: React.CSSProperties;
}
export interface SearchState {
  derivedValue: string;
}
declare class Search extends React.Component<SearchProps, SearchState> {
  static displayName: string;
  static defaultProps: {
    placeholder: string;
    enterButton: boolean;
  };
  static propTypes: {
    value: PropTypes.Requireable<string>;
    defaultValue: PropTypes.Requireable<string>;
    placeholder: PropTypes.Requireable<string>;
    enterButton: PropTypes.Requireable<
      string | boolean | PropTypes.ReactElementLike
    >;
    onSearch: PropTypes.Requireable<(...args: any[]) => any>;
    style: PropTypes.Requireable<object>;
    className: PropTypes.Requireable<string>;
  };
  static getDerivedStateFromProps(
    nextProps: SearchProps,
    prevState: SearchState,
  ): {
    derivedValue: string;
  };
  private inputInstance;
  constructor(props: SearchProps);
  handleChange: React.ChangeEventHandler<any>;
  handleSearch: () => void;
  saveInputInstance: (instance: any) => void;
  focus: () => void;
  blur: () => void;
  render(): JSX.Element;
}
export default Search;
