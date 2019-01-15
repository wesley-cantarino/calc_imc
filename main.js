function function_button ()
{
  document.getElementById('resul').innerHTML = "";
  document.getElementById('avi_p').innerHTML = "";
  document.getElementById('avi_a').innerHTML = "";

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
    calc = parseFloat(calc.toFixed(1));

    document.getElementById('resul').innerHTML = "Seu imc é " + calc;

    if(p > 300)
      document.getElementById('avi_p').innerHTML = "o peso está correto?";

    if((a < 0.5)||(a > 2.5))
      document.getElementById('avi_a').innerHTML = "a altura está correta?";
  }
}
