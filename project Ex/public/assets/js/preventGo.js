function preGoback(){
    window.history.forward();
}
setTimeout("preGoback()",0);
window.onunload =function(){null;};