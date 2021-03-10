import { Animated, StyleProp, ViewStyle } from "react-native";
import { CarouselProps, getInputRangeFromIndexes } from "react-native-snap-carousel";

type ScrollIntapolator = {
    inputRange: number[],
    outputRange: number[]
}


export const scrollInterpolator = (index: number, carouselProps: CarouselProps<any>): ScrollIntapolator => {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}

export const animatedStyles = (index: number, animatedValue: Animated.Value, carouselProps: CarouselProps<any>): StyleProp<ViewStyle> => {
    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0.75, 1, 0.75],
            extrapolate: 'clamp'
        }),
        transform: [
            {
                perspective: 1000
            },
            {
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.65, 1, 0.65],
                    extrapolate: 'clamp'
                })
            },
            {
                rotateX: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['30deg', '0deg', '30deg'],
                    extrapolate: 'clamp'
                })
            },
            {
                rotateY: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-30deg', '0deg', '30deg'],
                    extrapolate: 'clamp'
                })
            }
        ]
    };
}