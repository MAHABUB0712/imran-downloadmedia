 const {
     alldown
 } = require('nayan-media-downloader');
 async function alldl(url) {
     if (!url) {
         throw new Error('URL is required');
     }
     try {
         const data = await alldown(url);
         return {
             "developer": "MOHAMMAD IMRAN",
             "devfb": "https://www.facebook.com/profile.php?id=100075122837809",
             "devwp": "wa.me/+8801689903267",
             data: data.data
         };
     } catch (error) {
         throw new Error(error.message);
     }
 }
 module.exports = {
     alldl
 };
