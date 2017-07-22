if(navigator.geolocation)
{
  //現在位置を取得できる場合の処理
  alert("あなたの端末では現在位置を取得することができます")
}
function successFunc(position)
{
  //緯度をアラート表示
  document.write("緯度は"+position.coords.latitude+"゜");
  document.write("<br>");
  //経度をアラート表示
  document.write("経度は"+position.coords.longitude+"゜");
}
function errorFunc( error )
{
	// エラーコードのメッセージを定義
	var errorMessage = {
		0: "原因不明のエラーが発生しました…。" ,
		1: "位置情報の取得が許可されませんでした…。" ,
		2: "電波状況などで位置情報が取得できませんでした…。" ,
		3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
	} ;

	// エラーコードに合わせたエラー内容をアラート表示
	alert( errorMessage[error.code] ) ;
}
var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 5000 ,
} ;
navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;
