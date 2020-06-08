import * as React from 'react';
export interface Options {
  content: string | React.ReactNode;
  duration?: number;
  top?: number;
  showIcon?: boolean;
  onClose?: () => any;
  className?: string;
  style?: React.CSSProperties;
}
export declare function removeMessage(messageId: string): void;
export declare function info(options: Options): void;
export declare function success(options: Options): void;
export declare function warning(options: Options): void;
export declare function error(options: Options): void;
