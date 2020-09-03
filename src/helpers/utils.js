/**
 * Determine the given object is a function
 * @param {Object} functionToCheck checked object
 */
export const isFunction = (functionToCheck) => {
    console.log({}.toString.call(functionToCheck));
    return functionToCheck && ({}.toString.call(functionToCheck) === '[object Function]' || {}.toString.call(functionToCheck) === '[object AsyncFunction]');
}