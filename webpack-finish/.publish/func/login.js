/* 登录ftp，返回 clent 实例 */
const ftp = require("basic-ftp");

async function login() {
    const client = new ftp.Client();
    // client.ftp.verbose = true;
    try {
        await client.access({
            host: "60.195.248.238",
            port: 21,
            user: "static_yunying",
            password: "27%GFVE$WD&*(JT("
            // secure: true
        });
        return client;
    } catch (err) {
        console.log(err);
    }
}
module.exports = { login };
