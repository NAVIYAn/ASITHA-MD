const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=mJEQWKBJ#q0RU1RU3DhiofeaBm7jBOMFbo_RXIjQRh82UfbmRX0c",
MONGODB: process.env.MONGODB || "mongodb://mongo:ReMsMhOSBwDQqIwIKpXbHRanJcJiYNmZ@autorack.proxy.rlwy.net:43688",
};
