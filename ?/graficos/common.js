const getCSS = (variavel) => {
   const bodyStyles = getComputedStyle(document.body)
    return getComputedStyle(document.body).getPropertyValue('--primary-color')
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font'),

}

export {getCSS, tickConfig}
