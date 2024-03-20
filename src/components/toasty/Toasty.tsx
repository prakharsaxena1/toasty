import React from "react";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
  X,
  Airplay,
  Video,
  Phone,
  Question,
} from "@phosphor-icons/react";
import { IToasty, ToastStatus } from "./Toasty.interface";

const dividerStyles = "border-l-2 border-gray-500";
const ICON_SIZE = 24;

const extraIcons = {
  Airplay: <Airplay size={ICON_SIZE} />,
  Video: <Video size={ICON_SIZE} />,
  Phone: <Phone size={ICON_SIZE} />,
  Question: <Question size={ICON_SIZE} />
}

const statusIcon: Record<ToastStatus, React.ReactNode> = {
  information: <Info size={ICON_SIZE} color="#4077FF" weight="fill" />,
  warning: <WarningCircle size={ICON_SIZE} color="#FFC500" weight="fill" />,
  error: <Warning size={ICON_SIZE} color="#F73131" weight="fill" />,
  success: <CheckCircle size={ICON_SIZE} color="#00A151" weight="fill" />,
};

export const Toasty: React.FC<IToasty> = ({
  message,
  status = "information",
  type = "default",
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
        {swapIcon && extraIcons[swapIcon]}
        {((type === "notification" || showIcon) && !swapIcon) && statusIcon[status]}
        <span className="text-sm">{message}</span>
      </div>
      <div
        className={`ml-3 px-3 flex flex-row items-center gap-2 ${showDivider ? dividerStyles : ""}`}
      >
        {showActionButton && (
          <button
            className="p-1 text-sm rounded-md text-white bg-green-600"
            type="button"
            onClick={onClickAction}
          >
            {actionButtonLabel ?? "Button"}
          </button>
        )}
        {showCloseButton && (
          <button className="p-1 hover:bg-slate-500 rounded-full cursor-pointer transition-all" onClick={() => {console.log('close')}} type="button">
            <X size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toasty;
