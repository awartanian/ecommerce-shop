import { SidebarType } from "../action-types/actionTypes";

export const showSidebar = () => {
  return {
    type: SidebarType.SHOW_SIDEBAR,
  };
};
export const hideSidebar = () => {
  return {
    type: SidebarType.HIDE_SIDEBAR,
  };
};
