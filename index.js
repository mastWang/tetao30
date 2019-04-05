var slider = mui("#slider");
// 默认他搞了一个开关去控制轮播图是否开启自动轮播图 默认就需要这个功能 获取这个轮播图元素 调用slider传入参数初始化
slider.slider({
    interval: 1000
});
// document.getElementById("switch").addEventListener('toggle', function (e) {
//     if (e.detail.isActive) {
//     } else {
//         slider.slider({
//             interval: 0
//         });
//     }
// });