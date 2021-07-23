import moment from "moment";

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
};

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString('en-Us', options);
};

export const truncateString = (str, number) => {
    if (str.length > number) {
        return str.slice(0, number) + '...';
    }
};

export const randomObject = (array) => {
    const random = Math.floor(Math.random() * array.length);

    return array[random];
};

export const increaseResolution = async (image) => {
    return image;
};

export const removeSpaceFromEndpoint = endpoint => {
   return encodeURIComponent(decodeURIComponent(endpoint).replaceAll(/\s+/g, '-'))
};

export const compareTime = (updated) => {
    const diff = moment(updated).fromNow();
    
    return diff;
}