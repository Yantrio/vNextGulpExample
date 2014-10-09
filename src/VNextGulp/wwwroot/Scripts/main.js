var Main;
(function (Main) {
    function DidItWork() {
        document.onload = function () {
            return alert("it worked!");
        };
    }
    Main.DidItWork = DidItWork;
})(Main || (Main = {}));
var temp = new Main.DidItWork();
