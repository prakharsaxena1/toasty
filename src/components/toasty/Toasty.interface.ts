export type ToastStatus = 'information' | 'warning' | 'error' | 'success';

export type ToastType = 'default' | 'notification';

export interface IToasty {
  showIcon?: boolean;
  showDivider?: boolean;
  showActionButton?: boolean;
  showCloseButton?: boolean;
  status?: ToastStatus;
  type?: ToastType;
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  actionButtonLabel?: string;
  message: string;
  swapIcon?: React.ReactNode;
}
