import * as React from 'react';
export interface ModalOptions {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  okText?: string;
  okType?: 'default' | 'dashed' | 'primary' | 'danger';
  cancelText?: string;
  cancelType?: 'default' | 'dashed' | 'primary' | 'danger';
  maskClosable?: boolean;
  afterClose?: () => any;
  className?: string;
  style?: React.CSSProperties;
}
export declare function openModal(options: ModalOptions): Promise<unknown>;
export declare function removeModal(modalId: string): void;
