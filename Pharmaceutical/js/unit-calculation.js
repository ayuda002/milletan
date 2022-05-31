//ボタンクリック時に取得単位数計算をする
$('button').on('click', function () {
   //人間科目数合計
   var hu1 = ($('.h-unit1').length);
   var hu2 = ($('.h-unit2').length) * 2;
   var hu = hu1 + hu2;
   document.getElementById("human").innerHTML = hu + "/2";
   //社会・環境
   var su1 = ($('.s-unit1').length);
   var su2 = ($('.s-unit2').length) * 2;
   var su = su1 + su2;
   document.getElementById("social").innerHTML = su + "/6";
   //人間・文化
   var cu1 = ($('.c-unit1').length);
   var cu2 = ($('.c-unit2').length) * 2;
   var cu = cu1 + cu2;
   document.getElementById("culture").innerHTML = cu + "/4";
   //精神・身体
   var bu1 = ($('.b-unit1').length);
   var bu2 = ($('.b-unit2').length) * 2;
   var bu = bu1 + bu2;
   document.getElementById("body").innerHTML = bu + "/3";
   //総合科目取得単位数
   var com = hu + su + cu + bu;
   document.getElementById("Comprehensive").innerHTML = com + "/19";
   document.getElementById("Comprehensive-1").innerHTML = com + "/19";
   //基礎科目
   var ku1 = ($('.k-unit1').length);
   var ku2 = ($('.k-unit2').length) * 2;
   var ku = ku1 + ku2;
   document.getElementById("basic").innerHTML = ku + "/14";
   //外国語科目
   var fu1 = ($('.f-unit1').length);
   var fu2 = ($('.f-unit2').length) * 2;
   var fu = fu1 + fu2;
   document.getElementById("english").innerHTML = fu + "/12";

   //教養科目
   var lib = com + ku + fu;
   document.getElementById("liberal-arts").innerHTML = lib + "/45";
   document.getElementById("liberal-arts-1").innerHTML = lib + "/45";

   //専門基礎科目
   var sb_1 = ($('.sb-unit1').length);
   var sb_2 = ($('.sb-unit2').length) * 2
   sb_unit = sb_1 + sb_2;
   document.getElementById("sb").innerHTML = sb_unit + "/7";

   //専門共通科目
   var sc_unit = ($('.sc-unit2').length) * 2;
   document.getElementById("sc").innerHTML = sc_unit + "/18";

   //それ以外の専門共通科目
   var sco_1 = ($('.sco-unit1').length) * 1;
   var sco_4 = ($('.sco-unit4').length) * 4;
   var sco_8 = ($('.sco-unit8').length) * 8;
   var sco_unit = sco_1 + sco_4 + sco_8;
   document.getElementById("sco").innerHTML = sco_unit + "/20";

   //専門科目
   var s_1 = ($('.ss-unit1').length);
   var s_2 = ($('.ss-unit2').length) * 2
   s_unit = s_1 + s_2;
   document.getElementById("s").innerHTML = s_unit + "/28";

   //専門科目合計
   var spe = sb_unit + sc_unit + sco_unit + s_unit;
   document.getElementById("specialized-unit").innerHTML = spe + "/78";

   //キャリア形成
   var ca1 = ($('.ca-unit1').length);
   var ca2 = ($('.ca-unit2').length) * 2;
   var ca_unit = ca1 + ca2;
   document.getElementById("career").innerHTML = ca_unit + "/7";

   //卒業単位
   var gra = spe + lib + ca_unit;
   document.getElementById("graduation").innerHTML = gra + "/130";


});