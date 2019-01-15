function function_button ()
{
  var p = document.getElementsByName("peso")[0].value;
  var a = document.getElementsByName("altura")[0].value;

  if((p <= 0) || (a <= 0))
  {
    if(p <= 0)
      alert("ohhh, peso <= 0");

    if(a <= 0)
      alert("ohhh, altura <= 0");
  }

  else
  {
    var calc = p/(a*a);
    document.getElementById('resul').innerHTML = "Seu imc é " + calc;
  }
}
