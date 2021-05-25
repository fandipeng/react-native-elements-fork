import React from 'react';
import { ButtonProps } from './Button';
import { RneFunctionComponent } from '../helpers';
export declare type FABProps = ButtonProps & {
    color?: string;
    size?: 'large' | 'small';
    placement?: 'left' | 'right';
    visible?: boolean;
    upperCase?: boolean;
};
declare const FAB: RneFunctionComponent<FABProps>;
export { FAB };
declare const _default: React.FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../icons/Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
} & Partial<import("../config").ThemeProps<FABProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../icons/Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
} & Partial<import("../config").ThemeProps<FABProps>>>;
export default _default;