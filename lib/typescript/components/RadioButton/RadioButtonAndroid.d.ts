import * as React from 'react';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Value of the radio button
     */
    value: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (param?: any) => void;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: string;
    /**
     * Custom color for radio.
     */
    color?: string;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
declare const RadioButtonAndroidWithTheme: (React.ComponentClass<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ disabled, onPress, theme, value, status, testID, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export { RadioButtonAndroidWithTheme as RadioButtonAndroid };
