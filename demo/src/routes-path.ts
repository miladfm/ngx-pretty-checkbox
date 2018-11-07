import { InstallRouteName, MainRouteName, DemoCheckboxesRouteName } from './app/models/enums';

export const RoutePath = {
  // Install
  InstallLib: `${MainRouteName.Install}/${InstallRouteName.Lib}`, // install/lib
  InstallScssCustomize: `${MainRouteName.Install}/${InstallRouteName.ScssCustomize}`, // install/scss-customize

  // Demos Checkbox
  DemoCheckbox: `${MainRouteName.DemoCheckbox}`, // demo-checkbox
  DemoCheckboxAll: `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.All}`, // demo-checkbox/all

  // Demos Radio
  // API
};
