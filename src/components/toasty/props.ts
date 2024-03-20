import { IToasty } from "./Toasty.interface";

export const defaultProps: IToasty = {
  message: "Message here!",
  status: "information",
  type: "default",
  showIcon: true,
  showDivider: true,
  showActionButton: true,
  showCloseButton: true,
};
