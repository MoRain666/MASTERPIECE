function preloadImg(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        const timeoutId = setTimeout(() => {
            reject(`Can't load ${src}`)
        }, 20000);
        img.onload = function () {
            clearTimeout(timeoutId);
            resolve(img);
        };
    })
}

export default preloadImg
