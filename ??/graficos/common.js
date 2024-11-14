const getCSS = (variavel) => {
   const bodyStyles = getComputedStyle(document.body)
    return getComputedStyle(document.body).getPropertyValue('--primary-color')
}

const tickConfig = {
    color: getCSS('--font'),
    size: 16,
    family: getCSS('--primary-color'),

}

export {getCSS, tickConfig}
