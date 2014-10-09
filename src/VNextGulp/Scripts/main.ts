module Main {

    export function DidItWork(){
        document.onload = () => alert("it worked!");
    }
}
var temp = new Main.DidItWork();