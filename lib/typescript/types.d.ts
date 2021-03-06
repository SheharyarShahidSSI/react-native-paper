import type * as React from 'react';
export declare type Font = {
    fontFamily: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};
export declare type Fonts = {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
};
declare type Mode = 'adaptive' | 'exact';
export declare type Theme = {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
    };
    fonts: Fonts;
    animation: {
        scale: number;
    };
};
export declare type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<React.ComponentPropsWithoutRef<T>, 'children'>;
export declare type EllipsizeProp = 'head' | 'middle' | 'tail' | 'clip';
declare global {
    namespace ReactNativePaper {
        interface ThemeFont {
            fontFamily: string;
            fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
        }
        interface ThemeFonts {
            regular: ThemeFont;
            medium: ThemeFont;
            light: ThemeFont;
            thin: ThemeFont;
        }
        interface ThemeColors {
            primary: string;
            background: string;
            surface: string;
            accent: string;
            error: string;
            text: string;
            onSurface: string;
            disabled: string;
            placeholder: string;
            backdrop: string;
            notification: string;
        }
        interface ThemeAnimation {
            scale: number;
        }
        interface Theme {
            dark: boolean;
            mode?: Mode;
            roundness: number;
            colors: ThemeColors;
            fonts: ThemeFonts;
            animation: ThemeAnimation;
        }
    }
}
export {};
