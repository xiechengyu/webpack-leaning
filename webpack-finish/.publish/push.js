const ftp = require("basic-ftp");
const path = require("path");
// const chalk = require("chalk");
const inquirer = require("inquirer");

const { question, FTPTransfer } = require("./Util/push");
const { login } = require("./func/login");
/**
 * Util 工具函数
 */
const LOCAL_PATH = path.resolve(__dirname, "../dist/");

inquirer.prompt(question).then(answers => {
    main(answers.path);
});
/**
 * 流程
 */

/* 上传文件夹 */
async function uploadDict(client, localDirpath, remotePath) {
    if (!(client && remotepath)) return false;
    await client.ensureDir(remotePath);
    // await client.clearWorkingDir();
    await client.uploadDir(localDirpath, remotePath);
}

async function main(_dir) {
    var client = await login();
    // 定义日志
    client.trackProgress(info => {
        let data = FTPTransfer(info);
        console.log(
            `${data.type} :${data.name}, Transferred:${data.bytes}, all:${data.bytesOverall}`
        );
    });

    await client.ensureDir("./" + _dir);
    // 注意这个时候工作目录已经变了，接下来的操作都在新文件夹里执行，比如删除文件夹内所有文件
    // await client.clearWorkingDir();
    // 注意这里删除的是新建文件夹内容，同上
    await client.uploadDir(LOCAL_PATH, ".");
    client.trackProgress();

    client.close();
}
