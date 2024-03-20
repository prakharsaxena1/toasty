import React from "react";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import { IToasty, ToastStatus } from "./Toasty.interface";

const dividerStyles = "border-l-2 border-gray-500";
const BUTTON_SIZE = 24;

const statusIcon: Record<ToastStatus, React.ReactNode> = {
  information: <Info size={BUTTON_SIZE} color="#4077FF" weight="fill" />,
  warning: <WarningCircle size={BUTTON_SIZE} color="#FFC500" weight="fill" />,
  error: <Warning size={BUTTON_SIZE} color="#F73131" weight="fill" />,
  success: <CheckCircle size={BUTTON_SIZE} color="#00A151" weight="fill" />,
};

const Toasty: React.FC<IToasty> = ({
  message,
  status = "information",
  type = 'default',
  showIcon = false,
  showDivider = false,
  showActionButton = false,
  showCloseButton = false,
  onClickAction,
  actionButtonLabel,
  swapIcon,
}) => {
  return (
    <div className="w-[350px] h-[48px] py-1 px-2 rounded-lg bg-slate-900 text-white flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center justify-center">
        {swapIcon}
        {(type === 'notification' || showIcon) && statusIcon[status]}
        <span className="text-sm">{message}</span>
      </div>
      <div className={`ml-3 px-3 flex flex-row items-center gap-2 ${showDivider ? dividerStyles : ""}`}>
        {showActionButton && (
          <button
            className="p-1 text-sm rounded-md text-white bg-green-600"
            type="button"
            onClick={onClickAction}
          >
            {actionButtonLabel ?? 'Button'}
          </button>
        )}
        {showCloseButton && (
          <span className="p-1 hover:bg-slate-500 rounded-full cursor-pointer transition-all">
            <X size={24} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Toasty;
