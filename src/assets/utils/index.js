export const scrollToTop = () => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
    });
}

export const getUploadedFile = (event, image) => {
    const target = event.target;
    const [file] = target.files;
    const imageUrl = URL.createObjectURL(file);

    image.src = imageUrl;
};

export const toLocale = (str, locale, currency) => {
    const options = currency && {
        style: 'currency',
        currency,
    }

    return parseFloat(str).toLocaleString(locale, options);
}