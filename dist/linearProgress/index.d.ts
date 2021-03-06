/// <reference types="react" />
import { LinearProgressProps } from './LinearProgress';
declare const _default: import("react").FunctionComponent<Omit<{
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    theme?: import("../config").FullTheme;
} & import("react-native").ViewProps & Partial<import("../config").ThemeProps<LinearProgressProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    theme?: import("../config").FullTheme;
} & import("react-native").ViewProps & Partial<import("../config").ThemeProps<LinearProgressProps>>>;
export default _default;
export type { LinearProgressProps };
