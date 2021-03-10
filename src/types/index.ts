import { Animated, ViewStyle } from "react-native";

type MaybeAnimated<T> = T | Animated.Value;
type AnimatedScalar = string | number;

export type AnimatedStyles<T> = {
  [Key in keyof T]: T[Key] extends AnimatedScalar
    ? MaybeAnimated<T[Key]>
    : T[Key] extends Array<infer U>
    ? Array<AnimatedStyles<U>>
    : AnimatedStyles<T[Key]>
};

export type ViewAnimatedStyles = AnimatedStyles<ViewStyle>;
