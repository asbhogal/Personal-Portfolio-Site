export const fadeIn = (delay) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay,
            ease: 'easeOut'
        }
    }
})