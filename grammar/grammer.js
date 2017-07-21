//ブロックのスコープがない
if(true)
{
var i =5;
}
document.write(i);
//letをつかえばブロックのスコープがある
if(true)
{
let j =5;
}
document.write(j);
//巻き上げ
document.write(x===undefined);
var x=3;
//定数
const prefix=212;
document.write("これは定数→"+prefix);
