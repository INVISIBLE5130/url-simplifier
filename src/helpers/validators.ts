export const URLValidationHandler = (value: string) => {
    let errorMessage: string = "";

    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?((\/|\?)?.*)$/;
    
    if (value && !urlRegex.test(value)) {
        errorMessage = "Invalid URL";
    } else {
        errorMessage = "";
    }

    return errorMessage;
};