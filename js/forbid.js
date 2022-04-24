//禁止Ctrl+U
var arr = [123, 17, 18];
document.oncontextmenu = new Function("event.returnValue=false;");//禁用右键

window.onkeydown = function (e) {
    var keyCode = e.keyCode || e.which || e.charCode;
    var ctrlKey = e.ctrlKey || e.metaKey;
    console.log(keyCode + "--" + keyCode);
    if (ctrlKey && keyCode == 85) {
        e.preventDefault();
    }
    if (arr.indexOf(keyCode) > -1) {
        e.preventDefault();
    }
    //禁用ctrl+shift+i,
    if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
        return false;
    //屏蔽Shift+F10
    } else if (window.event.shiftKey && window.event.keyCode == 121) {
        return false;
    }
}