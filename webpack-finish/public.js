const inquirer = require("inquirer");
const shell = require("shelljs");

const questions = [
    {
        type: "input",
        name: "pathName",
        message:
            "这个过程只完成构建工作\n你所开发的项目在http://static.wangxiao.cn/zhuanti/2019/ 下对应项目的文件夹名是："
    }
];
inquirer.prompt(questions).then(publicPath => {
    shell.exec(
        `npx webpack --config .config/webpack.prod.js --env.pathName=${publicPath.pathName}`
    );
});
