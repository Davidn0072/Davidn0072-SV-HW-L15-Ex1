let timeoutId=0;

  function ChangeColor()
{
    document.getElementById("ChangeColor").disabled = true;
    timeoutId=setTimeout(() => {
    document.getElementById("main-box").style.backgroundColor  = "blue";
    document.getElementById("ChangeColor").disabled = false;
    timeoutId=0;
  }, 2000);

}

function ClearColor()
{
  if (timeoutId !=0) 
    clearTimeout(timeoutId);
  timeoutId=0;
  document.getElementById("main-box").style.backgroundColor  = "white";
  document.getElementById("ChangeColor").disabled = false;
}

