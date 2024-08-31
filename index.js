const {
    alldown
} = require('nayan-media-downloader');
async function mahabubdownloader(url) {
    if (!url) {
        throw new Error('URL is required');
    }
    try {
        const data = await alldown(url);
        return {
            "developer": "MAHABUB RAHMAN",
            "devfb": "https://www.facebook.com/www.xnxx.com.140",
            "devwp": "wa.me/+8801312737981",
            data: data.data
        };
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    mahabubdownloader
};
