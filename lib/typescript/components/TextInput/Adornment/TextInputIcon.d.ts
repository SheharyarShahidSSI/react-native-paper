import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import IconButton from '../../IconButton';
import type { $Omit } from '../../../../src/types';
import type { IconSource } from '../../Icon';
declare type Props = $Omit<React.ComponentProps<typeof IconButton>, 'icon' | 'theme' | 'color'> & {
    name: IconSource;
    onPress?: () => void;
    forceTextInputFocus?: boolean;
    color?: ((isTextInputFocused: boolean) => string | undefined) | string;
    style?: StyleProp<ViewStyle>;
    theme?: ReactNativePaper.Theme;
};
export declare const ICON_SIZE = 24;
declare type StyleContextType = {
    style: StyleProp<ViewStyle>;
    isTextInputFocused: boolean;
    forceFocus: () => void;
};
declare const IconAdornment: React.FunctionComponent<{
    testID: string;
    icon: React.ReactNode;
    topPosition: number;
    side: 'left' | 'right';
} & Omit<StyleContextType, 'style'>>;
declare const TextInputIcon: {
    ({ name, onPress, forceTextInputFocus, color, ...rest }: Props): JSX.Element;
    displayName: string;
    defaultProps: {
        forceTextInputFocus: boolean;
    };
};
export default TextInputIcon;
export { IconAdornment };
