window.onload=function (){
  var oBtn=document.getElementById('commit');
  var sum=0;
  var sum2=0;
  oBtn.onclick=total;
  function total (){
    var nFirst=Number(document.getElementById('first').value);
    var nMonth=Number(document.getElementById('month').value);
    var nYear=Number(document.getElementById('year').value);
    var nRate=Number(document.getElementById('rate').value);
    sum=nFirst;
    sum2=nFirst;
    for (i=0;i<parseInt(nYear)*12;i++){
      sum+=parseInt(nMonth);
      sum2+=parseInt(nMonth);
      sum2=parseInt(sum2*(1+parseInt(nRate)/100/12));
    }
    document.getElementById('money').value=sum;
    document.getElementById('money2').value=sum2;
    console.log(parseInt(nYear)*12);
    console.log(1+parseInt(nRate)/100/12);
  }
}