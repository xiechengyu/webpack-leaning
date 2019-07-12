使用本文件夹完成日常专题的编写。

开发时，在依赖都安装完之后，先进入webpack根目录下找到setup.js文件，这是入口文件，开发中所需要用到的less，css，js等文件需要现在这里引用。

要求：

- vscode安装一下插件，方便完成代码的格式化：
  - editorconfig
  - prettier
  - eslint

为了保证提交的代码格式正确，使用 `husky` 完成 git hook 的检测，因此提交过程会变慢。
