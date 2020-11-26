export default class Animations {
    static getAnimationAttributes = (animation, animationDuration, animationOffset) => {
        //Data attributes generation
        const animationAttribute = animation ? { 'data-aos': animation } : { };
        const animationOffsetAttribute = animationOffset ? { 'data-aos-offset': animationOffset } : { };
        const animationDurationAttribute = animationDuration ? { 'data-aos-duration': animationDuration } : { };
        //Merged attributes
        return {
            ...animationAttribute,
            ...animationOffsetAttribute,
            ...animationDurationAttribute
        };
    }
}