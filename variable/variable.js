var a=0;
document.write("変数aの値は"+a+"<br>");
//未定義だとundefinedと等価になる
function IsUndefined(temp)
{
  if(temp === undefined)
  {
    document.write("この変数は未定義です<br>");
  }
}
var input;
IsUndefined(input);
//myArrayが未定義なのでif(!myArray[0])で関数が呼ばれる
function myFunction()
{
  document.write("配列が未定義です<br>");
}
var myArray=[];
if(!myArray[0])myFunction();
//bは未定義
var b;
//undefinedと返される
document.write(b+"<br>");
//NaNと返される
document.write(b+2+"<br>");
//変数を二つ宣言
var x=2312,y="2312";
document.write("x="+x+"(数字)"+"<br>"+"y="+y+"(文字列)"+"<br>");
//xとyは等価である
  document.write("(x==y)="+(x==y)+"<br>"+"等価である"+"<br>");
//xとyは厳密には等価でない
  document.write("(x===y)="+(x===y)+"<br>"+"厳密には等価でない"+"<br>");
//NULLは０
var n =null;
document.write(n+"<br>");
