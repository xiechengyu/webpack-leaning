const chalk = require("chalk");

function formatFTPOutputInfo(list) {
    return list.map(item => {
        // 判断文件类型
        if (item.type === 1) {
            item.pathType = "File";
        } else if (item.type === 2) {
            item.pathType = "Dict";
        } else {
            item.pathType = "may SymbolicLink";
        }

        // 格式化文件大小
        if (item.size / 1024 >= 1024) {
            item.fileSize = Math.floor(item.size / 1024 / 1024) + "M";
        } else if (item.size / 1024 > 0) {
            item.fileSize = Math.floor(item.size / 1024) + "k";
        } else {
            item.fileSize = 0;
        }

        // 格式化时间
        // if (/20\d{2}/.test(item.date)) {
        // }

        // 返回信息
        return {
            name: item.name,
            type: item.pathType,
            size: item.fileSize,
            date: item.date
        };
    });
}

let question = {
    type: "input",
    name: "path",
    message: chalk.red.bold(
        "这个过程完成build和push两个合并操作，完成构建以及上传操作\n输入文件夹名称，比如：0622jjs"
    ),
    default: function() {
        let now = new Date();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
        return month + day + "upload";
    }
};
function FTPTransfer(info) {
    let _type = "";
    if (info.type === "upload") {
        _type = "上传";
    } else {
        _type = info.type;
    }
    return {
        name: info.name,
        type: _type,
        Transferred: info.Transferred,
        bytesOverall: info.bytesOverall
    };
}
module.exports = {
    formatFTPOutputInfo,
    question,
    FTPTransfer
};
