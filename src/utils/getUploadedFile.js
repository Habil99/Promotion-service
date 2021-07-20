export const getUploadedFile = (event, image) => {
    const target = event.target;
    const [file] = target.files;
    const imageUrl = URL.createObjectURL(file);

    image.src = imageUrl;
};
