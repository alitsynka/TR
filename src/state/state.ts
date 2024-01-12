export const appearanceAnimation = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: custom * 0.25
        },
    })
}

export const fallsOutFromAbove = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            // duration: 0.4,
            delay: custom * 0.2,
            ease: "easeInOut"
        },
    })
}
export const fallsOutFromAboveSolution = {
    hidden: {
        y: -500,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: custom * 0.35,
            ease: "easeIn"
        },
    })
}
export const fallsOutFromLeftSide = {
    hidden: {
        y: 0,
        x: -400,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: custom * 0.26,
            ease: "easeInOut"
        },
    })
}