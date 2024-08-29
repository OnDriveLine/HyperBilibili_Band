# HyperBilibili （澎湃哔哩）
在Vela嵌入式设备上基于QuickApp实现的第三方B站客户端

## 子项目 / 分支:
1. 澎湃哔哩“米粒版”：[https://github.com/OnDriveLine/HyperBilibili_Band9](https://github.com/OnDriveLine/HyperBilibili_Band9)
    - 专为 `小米手环 9` 等胶囊屏设备移植的澎湃哔哩客户端
    - 目前为v2.3版本的分支，并砍掉了一些功能
    - 默认启用interconnect联网

## 使用
对于普通用户而非开发者，你只需要下载本应用的release版本（RPK文件）然后安装到你的设备上就行了。目前，我只会在米坛社区上发布release版本，如果你想获得经过测试的稳定版本，请前往[米坛社区发布页](https://www.bandbbs.cn/threads/12443/)获取。如果你想紧跟代码提交的步伐，在手表上运行本项目最新且未经测试的不稳定开发版代码，请从本仓库的actions中直接下载实时构建的rpk

## 搭建开发环境

克隆此仓库，然后在`Aiot IDE`中打开它

随后执行以下命令，安装typescript支持：

`npm i -D typescript ts-loader`

然后像普通快应用一样进行开发即可

## 开发文档

通过小米的[官方文档](https://iot.mi.com/vela/quickapp)熟悉和了解快应用。

## 声明
本项目与哔哩哔哩（Bilibili）官方无任何关联，包括但不限于 **哔哩哔哩股份有限公司** **上海幻电信息科技有限公司** **上海宽娱数码科技有限公司**

本项目所使用的所有API接口均来自[https://github.com/SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)，经过来自各界网友的测试与修正，本人未对哔哩哔哩（Bilibili）的任何客户端进行任何逆向工程（包括但不限于 反编译、反汇编、抓包、拆包）操作