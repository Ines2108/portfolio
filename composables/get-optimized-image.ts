export const getOptimizedImage = (imagePath: string, dimension: string, imageType: string) => {
    let url = `${imagePath}/m/${dimension}/filters:no_upscale()`;

    if (imageType) {
        url += `:format(${imageType})`;
    }
    return url;
}