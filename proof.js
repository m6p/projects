// test

<!DOCTYPE html>
<html>
<head>
<script>

function func()
{
var r=confirm("press a button");
if (r== true)
  {
  x="You pressed ok";
  }
else
  {
  x="yoy pressed cancel";
  }
document.getElementById("ID").innerHTML=x;
}
</script>
</head>

<body>
<br><button onclick="func()"> Try </button>
<br><p id="ID"></p>

</body>
</html>
