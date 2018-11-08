import { InstallRouteName, MainRouteName, DemoCheckboxesRouteName, DemoRadioRouteName, ApiRouteName } from './app/models/enums';

export const RoutePath = {
// Install

    // install/lib
  InstallLib: `${MainRouteName.Install}/${InstallRouteName.Lib}`,
    // install/scss-customize
  InstallScssCustomize: `${MainRouteName.Install}/${InstallRouteName.ScssCustomize}`,


  // Demos Checkbox

    // demo-checkbox
  DemoCheckbox: `${MainRouteName.DemoCheckbox}`,
    // demo-checkbox/all
  DemoCheckboxAll: `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.All}`,
    // demo-checkbox/mixed-color
  DemoCheckboxMixedColor : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedColor}`,
    // demo-checkbox/mixed-outline
  DemoCheckboxMixedOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedOutline}`,
    // demo-checkbox/mixed-square-fill
  DemoCheckboxMixedSquareFill : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedSquareFill}`,
    // demo-checkbox/mixed-square-fill-outline
  DemoCheckboxMixedSquareFillOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedSquareFillOutline}`,
    // demo-checkbox/mixed-square-thick
  DemoCheckboxMixedSquareThick : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedSquareThick}`,
    // demo-checkbox/mixed-square-thick-outline
  DemoCheckboxMixedSquareThickOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedSquareThickOutline}`,
    // demo-checkbox/mixed-curve
  DemoCheckboxMixedCurve : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurve}`,
    // demo-checkbox/mixed-curve-outline
  DemoCheckboxMixedCurveOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurveOutline}`,
    // demo-checkbox/mixed-curve-fill
  DemoCheckboxMixedCurveFill : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurveFill}`,
    // demo-checkbox/mixed-curve-fill-outline
  DemoCheckboxMixedCurveFillOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurveFillOutline}`,
    // demo-checkbox/mixed-curve-thick
  DemoCheckboxMixedCurveThick : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurveThick}`,
    // demo-checkbox/mixed-curve-thick-outline
  DemoCheckboxMixedCurveThickOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedCurveThickOutline}`,
    // demo-checkbox/mixed-round
  DemoCheckboxMixedRound : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRound}`,
    // demo-checkbox/mixed-round-outline
  DemoCheckboxMixedRoundOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRoundOutline}`,
    // demo-checkbox/mixed-round-fill
  DemoCheckboxMixedRoundFill : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRoundFill}`,
    // demo-checkbox/mixed-round-fill-outline
  DemoCheckboxMixedRoundFillOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRoundFillOutline}`,
    // demo-checkbox/mixed-round-thick
  DemoCheckboxMixedRoundThick : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRoundThick}`,
    // demo-checkbox/mixed-round-thick-outline
  DemoCheckboxMixedRoundThickOutline : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedRoundThickOutline}`,
    // demo-checkbox/mixed-switch
  DemoCheckboxMixedSwitch : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.MixedSwitch}`,
    // demo-checkbox/basic
  DemoCheckboxBasic : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Basic}`,
    // demo-checkbox/switch
  DemoCheckboxSwitch : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Switch}`,
    // demo-checkbox/colors
  DemoCheckboxColors : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Colors}`,
    // demo-checkbox/font-icons
  DemoCheckboxFontIcons : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.FontIcons}`,
    // demo-checkbox/svg
  DemoCheckboxSvg : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Svg}`,
    // demo-checkbox/image
  DemoCheckboxImage : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Image}`,
    // demo-checkbox/toggle
  DemoCheckboxToggle : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Toggle}`,
    // demo-checkbox/indeterminate
  DemoCheckboxStates : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.States}`,
    // demo-checkbox/scalability
  DemoCheckboxScalability : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Scalability}`,
    // demo-checkbox/animations
  DemoCheckboxAnimations : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Animations}`,
    // demo-checkbox/animation-smooth
  DemoCheckboxAnimationSmooth : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.AnimationSmooth}`,
    // demo-checkbox/animation-jelly
  DemoCheckboxAnimationJelly : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.AnimationJelly}`,
    // demo-checkbox/animation-tada
  DemoCheckboxAnimationTada : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.AnimationTada}`,
    // demo-checkbox/animation-rotate
  DemoCheckboxAnimationRotate : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.AnimationRotate}`,
    // demo-checkbox/animation-pulse
  DemoCheckboxAnimationPulse : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.AnimationPulse}`,
    // demo-checkbox/plain
  DemoCheckboxPlain : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Plain}`,
    // demo-checkbox/disable
  DemoCheckboxDisable : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Disable}`,
    // demo-checkbox/lock
  DemoCheckboxLock : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Lock}`,
    // demo-checkbox/size
  DemoCheckboxSize : `${MainRouteName.DemoCheckbox}/${DemoCheckboxesRouteName.Size}`,

  // Demos Radio

    // demo-radio
  DemoRadio : `${MainRouteName.DemoRadio}`,
    // demo-radio/all
  DemoRadioAll : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.All}`,
    // demo-radio/radio
  DemoRadioBasic : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.Basic}`,
    // demo-radio/animations
  DemoRadioAnimations : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.Animations}`,
    // demo-radio/color
  DemoRadioColor : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.Color}`,
    // demo-radio/color-outline-icon
  DemoRadioColorOutlineIcon : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.ColorOutlineIcon}`,
    // demo-radio/color-icon
  DemoRadioColorIcon : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.ColorIcon}`,
    // demo-radio/plain
  DemoRadioPlain : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.Plain}`,
    // demo-radio/switch
  DemoRadioSwitch : `${MainRouteName.DemoRadio}/${DemoRadioRouteName.Switch}`,

  // API

    // api/checkbox
  ApiCheckbox : `${MainRouteName.API}/${ApiRouteName.Checkbox}`,
    // api/checkbox-will-change
  ApiCheckboxWillChange : `${MainRouteName.API}/${ApiRouteName.CheckboxWillChange}`,
    // api/radio-group
  ApiRadioGroup : `${MainRouteName.API}/${ApiRouteName.RadioGroup}`,
    // api/radio
  ApiRadio : `${MainRouteName.API}/${ApiRouteName.Radio}`,
    // api/radio-will-change
  ApiRadioWillChange : `${MainRouteName.API}/${ApiRouteName.RadioWillChange}`,
    // api/toggle
  ApiToggle : `${MainRouteName.API}/${ApiRouteName.Toggle}`,
    // api/toggle-will-change'
  ApiToggleWillChange : `${MainRouteName.API}/${ApiRouteName.ToggleWillChange}`,
    // api/hover
  ApiHover : `${MainRouteName.API}/${ApiRouteName.Hover}`,
    // api/hover-will-change'
  ApiHoverWillChange : `${MainRouteName.API}/${ApiRouteName.HoverWillChange}`,
    // api/indeterminate
  ApiIndeterminate : `${MainRouteName.API}/${ApiRouteName.Indeterminate}`,
    // api/indeterminate-will-change'
  ApiIndeterminateWillChange : `${MainRouteName.API}/${ApiRouteName.IndeterminateWillChange}`,
    // api/icon
  ApiIcon : `${MainRouteName.API}/${ApiRouteName.Icon}`,
    // api/svg
  ApiSvg : `${MainRouteName.API}/${ApiRouteName.Svg}`,
    // api/image
  ApiImage : `${MainRouteName.API}/${ApiRouteName.Image}`,
    // api/interfaces
  ApiInterfaces : `${MainRouteName.API}/${ApiRouteName.Interfaces}`,
    // api/enums
  ApiEnums : `${MainRouteName.API}/${ApiRouteName.Enums}`,

};
