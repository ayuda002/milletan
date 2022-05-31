//ボタンクリック時に取得単位数計算をする
$('button').on('click', function(){
   //人間科目数合計
   var hu1 = ($('.h-unit1').length);
   var hu2 = ($('.h-unit2').length)*2;
   var hu=hu1+hu2;
   document.getElementById("human").innerHTML = hu+"/2";
   //社会・環境
   var su1 = ($('.s-unit1').length);
   var su2 = ($('.s-unit2').length)*2;
   var su=su1+su2;
   document.getElementById("social").innerHTML = su+"/6";
   //人間・文化
   var cu1 = ($('.c-unit1').length);
   var cu2 = ($('.c-unit2').length)*2;
   var cu=cu1+cu2;
   document.getElementById("culture").innerHTML = cu+"/4";
   //精神・身体
   var bu1 = ($('.b-unit1').length);
   var bu2 = ($('.b-unit2').length)*2;
   var bu=bu1+bu2;
   document.getElementById("body").innerHTML = bu+"/3";
   //総合科目取得単位数
   var com = hu+su+cu+bu;
   document.getElementById("Comprehensive").innerHTML = com+"/19";
   document.getElementById("Comprehensive-1").innerHTML = com+"/19";
   //基礎科目
   var ku1 = ($('.k-unit1').length);
   var ku2 = ($('.k-unit2').length)*2;
   var ku=ku1+ku2;
   document.getElementById("basic").innerHTML = ku+"/13"; 
   //外国語科目
   var fu1 = ($('.f-unit1').length);
   var fu2 = ($('.f-unit2').length)*2;
   var fu=fu1+fu2;
   document.getElementById("english").innerHTML = fu+"/12";
   //教養科目
   var lib = com+ku+fu;
   document.getElementById("liberal-arts").innerHTML = lib+"/44";
   document.getElementById("liberal-arts-1").innerHTML = lib+"/44";
   //専門科目 sb
   var sb1 = ($('.sb-unit1').length);
   var sb1_5 = ($('.sb-unit15').length)*1.5;
   var sb2 = ($('.sb-unit2').length)*2;
   var sb = sb1 + sb1_5 + sb2;
   document.getElementById("sb").innerHTML = sb+"/39";
   //専門科目 sp1
   var sp1 = ($('.sp1-unit2').length)*2;
   document.getElementById("sp1").innerHTML = sp1+"/2";
   //専門科目 sp2
   var sp2 = ($('.sp2-unit1').length);
   document.getElementById("sp2").innerHTML = sp2+"/1";
   //専門科目 sp3
   var sp3 = ($('.sp3-unit1').length);
   document.getElementById("sp3").innerHTML = sp3+"/2";
   //専門科目 sp4
   var sp4 = ($('.sp4-unit2').length)*2;
   document.getElementById("sp4").innerHTML = sp4+"/2";
   //専門科目 sp5
   var sp5 = ($('.sp5-unit2').length)*2;
   document.getElementById("sp5").innerHTML = sp5+"/2";
   //専門科目 sp
   var sp_1 = ($('.sp-unit1').length);
   var sp_2 = ($('.sp-unit2').length)*2;
   var sp_8 = ($('.sp-unit8').length)*8;
   var sp_a = sp_1 + sp_2 + sp_8;
   document.getElementById("sp").innerHTML = sp_a+"/36";
   //卒業に必要な専門科目数
   var sp_all = sb + sp1 + sp2 + sp3 + sp4 + sp5 + sp_a;
   document.getElementById("specialized-unit").innerHTML = sp_all+"/79";
   //キャリア形成
  var ca1=($('.ca-unit1').length);
  var ca2=($('.ca-unit2').length)*2;
  var ca_unit=ca1+ca2;
  document.getElementById("career").innerHTML = ca_unit +"/7";
  //卒業単位
  var gra = sp_all + lib + ca_unit;
  document.getElementById("graduation").innerHTML = gra +"/130";
});