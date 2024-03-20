// Types of statuses
export type ToastStatus = "information" | "warning" | "error" | "success";

// Types of Toasts
export type ToastType = "default" | "notification";

export interface IToasty {
  /*
   * Show icon
   */
  showIcon?: boolean;
  /*
   * Show divider
   */
  showDivider?: boolean;
  /*
   * Show action button
   */
  showActionButton?: boolean;
  /*
   * Show close button
   */
  showCloseButton?: boolean;
  /*
   * Selected statuses "information" | "warning" | "error" | "success"
   */
  status?: ToastStatus;
  /*
   * Selected type "default" | "notification"
   */
  type?: ToastType;
  /*
   * OnClick function for the action button
   */
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /*
   * Label for action button
   */
  actionButtonLabel?: string;
  /*
   * Toast message
   */
  message: string;
  /*
   * Swap icon
   */
  swapIcon?: 'Airplay' | 'Video' | 'Phone' | 'Question';
}
