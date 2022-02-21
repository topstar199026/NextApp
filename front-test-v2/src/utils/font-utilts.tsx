export const $style = (styles: any[]) => {
    return  Object.assign({}, ...styles)
}

export const $size = (width: any, height: any) => {
    return {
        width: width,
        height: height,
    }
}

export const $width = (width: any) => {
    return {
        width: width,
    }
}

export const $height = (height: any) => {
    return {
        height: height,
    }
}

export const $fullSize = () => {
    return {
        width: '100%',
        height: '100%',
    }
}

export const $font = (fontFamily: any, fontColor: any, fontSize: any, lineHeight = 0, opacity = 1) => {
    return {
        fontFamily: fontFamily,
        color: fontColor,
        fontSize: fontSize, 
        lineHeight: lineHeight + 'px',
        opacity: opacity,
    }
}

export const $textCenter = () => {
    return {
        textAlign: 'center',
    }
}

export const $itemCenter = () => {
    return {
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export const $itemCenterH = () => {
    return {
        alignItems: 'center',
    }
}

export const $itemCenterV = () => {
    return {
        justifyContent: 'center',
    }
}

export const $flex =  () => {
    return {
        display: 'flex',
    }
}

export const $flexRow =  () => {
    return {
        display: 'flex',
        flexDirection: 'row',
    }
}

export const $flexCol =  () => {
    return {
        display: 'flex',
        flexDirection: 'column',
    }
}