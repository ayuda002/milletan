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
   document.getElementById("basic").innerHTML = ku + "/13";
   //外国語科目
   var fu1 = ($('.f-unit1').length);
   var fu2 = ($('.f-unit2').length) * 2;
   var fu = fu1 + fu2;
   document.getElementById("english").innerHTML = fu + "/12";

   //教養科目
   var lib = com + ku + fu;
   document.getElementById("liberal-arts").innerHTML = lib + "/44";
   document.getElementById("liberal-arts-1").innerHTML = lib + "/44";

   //専門基礎科目
   var sb_unit = ($('.sb-unit2').length) * 2
   document.getElementById("sb").innerHTML = sb_unit + "/4";

   //専門共通科目
   var sc_1 = ($('.sc-unit1').length) * 1;
   var sc_2 = ($('.sc-unit2').length) * 2;
   var sc_8 = ($('.sc-unit8').length) * 8;
   var sc_unit = sc_1 + sc_2 + sc_8;
   document.getElementById("sc").innerHTML = sc_unit + "/25";

   //専門科目
   //熱流体科目
   var r1_1 = ($('.r1-unit1').length);
   var r1_2 = ($('.r1-unit2').length) * 2;
   var r1 = r1_1 + r1_2;
   document.getElementById("r1").innerHTML = r1 + "/2";

   var r2_1 = ($('.r2-unit1').length);
   var r2_2 = ($('.r2-unit2').length) * 2;
   r2 = r2_1 + r2_2;
   document.getElementById("r2").innerHTML = r2 + "/2";
   var r_unit = r1 + r2;

   //固体×設計科目
   var ks1_1 = ($('.ks1-unit1').length);
   var ks1_2 = ($('.ks1-unit2').length) * 2;
   ks1 = ks1_1 + ks1_2;
   document.getElementById("ks1").innerHTML = ks1 + "/4";

   var ks2_1 = ($('.ks2-unit1').length);
   var ks2_2 = ($('.ks2-unit2').length) * 2;
   ks2 = ks2_1 + ks2_2;
   document.getElementById("ks2").innerHTML = ks2 + "/4";

   var ks3 = ($('.ks3-unit2').length) * 2;
   document.getElementById("ks3").innerHTML = ks3 + "/2";

   var ks4_1 = ($('.ks4-unit1').length);
   var ks4_2 = ($('.ks4-unit2').length) * 2;
   ks4 = ks4_1 + ks4_2;
   document.getElementById("ks4").innerHTML = ks4 + "/2";

   var ks_unit = ks1 + ks2 + ks3 + ks4;

   //材料設計加工学

   var z1_1 = ($('.z1-unit1').length);
   var z1_2 = ($('.z1-unit2').length) * 2;
   z1 = z1_1 + z1_2;
   document.getElementById("z1").innerHTML = z1 + "/2";

   var z2 = ($('.z2-unit2').length) * 2;
   document.getElementById("z2").innerHTML = z2 + "/2";

   z_unit = z1 + z2;

   //それ以外の専門科目

   var m_1 = ($('.m-unit1').length);
   var m_2 = ($('.m-unit2').length) * 2;
   m_unit = m_1 + m_2;
   document.getElementById("m").innerHTML = m_unit + "/14";

   //専門科目合計
   var spe = sb_unit + sc_unit + r_unit + ks_unit + z_unit + m_unit;
   document.getElementById("specialized-unit").innerHTML = spe + "/79";

   //キャリア形成
   var ca1 = ($('.ca-unit1').length);
   var ca2 = ($('.ca-unit2').length) * 2;
   var ca_unit = ca1 + ca2;
   document.getElementById("career").innerHTML = ca_unit + "/7";

   //卒業単位
   var gra = spe + lib + ca_unit;
   document.getElementById("graduation").innerHTML = gra + "/130";


});