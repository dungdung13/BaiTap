export const stringIsNullOrEmpty = (text: string): boolean => {
    return text === ""
}

export const stringIsEmail = (text: string): boolean => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text.toLowerCase());
}

export const stringIsDate = (text: string): boolean => {
    try {
        Date.parse(text)
        return true
    } catch (error) {
        return false
    }
}