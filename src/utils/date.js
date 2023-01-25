//This func helps to converse date to the right format

export function converseDate(timestamp) {
    const formatedDate = new Date(timestamp).toLocaleDateString("en-US").replaceAll("/", ".")
    return formatedDate;
}