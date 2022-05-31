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
   var sb_15 = ($('.sb1-unit15').length) * 1.5;
   document.getElementById("sb1").innerHTML = sb_15 + "/3";
   var sb_2 = ($('.sb2-unit3').length) * 3
   document.getElementById("sb2").innerHTML = sb_2 + "/6";
   var sb_unit = sb_15 + sb_2;

   //専門共通科目
   var sc_1 = ($('.sc-unit1').length) * 1;
   var sc_2 = ($('.sc-unit2').length) * 2;
   var sc_3 = ($('.sc-unit8').length) * 8;
   var sc_unit = sc_1 + sc_2 + sc_3;
   document.getElementById("sc").innerHTML = sc_unit + "/29";

   //専門科目
   //電子系専門科目
   var es1 = ($('.es1-unit2').length) * 2;
   document.getElementById("es1").innerHTML = es1 + "/4";
   var es2 = ($('.es2-unit2').length) * 2;
   document.getElementById("es2").innerHTML = es2 + "/2";
   var es_unit = es1 + es2;

   //機械系専門科目
   var rs1 = ($('.rs1-unit2').length) * 2;
   document.getElementById("rs1").innerHTML = rs1 + "/4";
   var rs2 = ($('.rs2-unit2').length) * 2;
   document.getElementById("rs2").innerHTML = rs2 + "/2";
   var rs_unit = rs1 + rs2;

   //専門演習科目
   var p_1 = ($('.p-unit1').length);
   var p_2 = ($('.p-unit2').length) * 2;
   var p_unit = p_1 + p_2;
   document.getElementById("p").innerHTML = p_unit + "/2";

   //電子系科目
   var e_unit = ($('.e-unit2').length) * 2;
   document.getElementById("e").innerHTML = e_unit + "/4";

   //情報×ロボット系科目
   var i1 = ($('.i1-unit2').length) * 2;
   document.getElementById("i1").innerHTML = i1 + "/4";
   var i2 = ($('.i2-unit2').length) * 2;
   document.getElementById("i2").innerHTML = i2 + "/8";
   var i_unit = i1 + i2;

   //機械系
   var r_unit = ($('.r-unit2').length) * 2;
   document.getElementById("r").innerHTML = r_unit + "/4";

   //残り科目
   var t_1 = ($('.t-unit1').length);
   var t_15 = ($('.t-unit15').length) * 1.5;
   var t_2 = ($('.t-unit2').length) * 2;
   var t_unit = (t_1 + t_15 + t_2);
   document.getElementById("t").innerHTML = t_unit + "/8";

   // var s2 = ($('.s2-unit2').length) * 2;
   // document.getElementById("s2").innerHTML = s2 + "/6";

   // var s3 = ($('.s3-unit2').length) * 2;
   // document.getElementById("s3").innerHTML = s3 + "/4";

   // var s4 = ($('.s4-unit2').length) * 2;
   // document.getElementById("s4").innerHTML = s4 + "/2";

   // var s5 = ($('.s5-unit2').length) * 2;
   // document.getElementById("s5").innerHTML = s5 + "/2";

   // var s6 = ($('.s6-unit2').length) * 2;
   // document.getElementById("s6").innerHTML = s6 + "/4";

   // var s_unit = s1 + s2 + s3 + s4 + s5 + s6;

   // //専門科目上記以外
   // var i1 = ($('.i-unit1').length);
   // var i2 = ($('.i-unit2').length) * 2;
   // var i4 = ($('.i-unit4').length) * 4;
   // var i8 = ($('.i-unit8').length) * 8;
   // var i_unit = i1 + i2 + i4 + i8;
   // document.getElementById("i-unit").innerHTML = i_unit + "/25";

   //専門科目合計
   var spe = sb_unit + sc_unit + es_unit + rs_unit + p_unit + i_unit + e_unit + r_unit;
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