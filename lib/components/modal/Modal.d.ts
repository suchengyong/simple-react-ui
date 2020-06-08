import * as React from 'react';
import * as PropTypes from 'prop-types';
import { openModal, removeModal } from './openModal';
export interface PromiseHandler {
  resolve: () => any;
  reject: () => any;
}
export interface ModalProps {
  visible: boolean;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  mode?: 'declarative' | 'imperative';
  className?: string;
  style?: React.CSSProperties;
  afterClose?: () => any;
  onConfirm?: (e: React.MouseEvent) => any;
  onCancel?: (e: React.MouseEvent) => any;
  onMask?: (e: React.MouseEvent) => any;
  okText?: string;
  okType?: 'default' | 'dashed' | 'primary' | 'danger';
  cancelText?: string;
  cancelType?: 'default' | 'dashed' | 'primary' | 'danger';
  maskClosable?: boolean;
  promiseHandler?: PromiseHandler;
  modalId?: string;
  content?: string | React.ReactNode;
}
interface ModalState {
  modalVisible: boolean;
}
declare class Modal extends React.Component<ModalProps, ModalState> {
  static displayName: string;
  static openModal: typeof openModal;
  static removeModal: typeof removeModal;
  static defaultProps: {
    mode: string;
    maskClosable: boolean;
    okText: string;
    okType: string;
    cancelText: string;
    cancelType: string;
  };
  static propTypes: {
    visible: PropTypes.Validator<boolean>;
    title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    footer: PropTypes.Requireable<PropTypes.ReactElementLike>;
    mode: PropTypes.Requireable<string>;
    onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
    onCancel: PropTypes.Requireable<(...args: any[]) => any>;
    onMask: PropTypes.Requireable<(...args: any[]) => any>;
    maskClosable: PropTypes.Requireable<boolean>;
    promiseHandler: PropTypes.Requireable<object>;
    modalId: PropTypes.Requireable<string>;
    afterClose: PropTypes.Requireable<(...args: any[]) => any>;
    okText: PropTypes.Requireable<string>;
    okType: PropTypes.Requireable<string>;
    cancelText: PropTypes.Requireable<string>;
    cancelType: PropTypes.Requireable<string>;
    content: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  private timeout;
  private bodyOverflow;
  private bodyPaddingRight;
  constructor(props: ModalProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: ModalProps, prevState: ModalState): void;
  componentWillUnmount(): void;
  getScrollBarWidth: () => number;
  closeModal: () => void;
  handleOnConfirm: (e: React.MouseEvent<Element, MouseEvent>) => void;
  handleOnCancel: (e: React.MouseEvent<Element, MouseEvent>) => void;
  handleOnMask: (e: React.MouseEvent<Element, MouseEvent>) => void;
  afterLeave: () => void;
  render(): React.ReactPortal;
}
export default Modal;
