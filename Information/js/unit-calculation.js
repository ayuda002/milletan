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

   //専門基礎科目
   var sb_unit=($('.sb-unit2').length)*2;
   document.getElementById("sb").innerHTML = sb_unit+"/10";
   //専門共通科目
   var sc1=($('.sc1-unit2').length)*2;
   document.getElementById("sc1").innerHTML = sc1+"/4";
   var sc2=($('.sc2-unit2').length)*2;
   document.getElementById("sc2").innerHTML = sc2+"/4";
   var sc_unit=sc1+sc2;
   //専門科目
   var s1_1=($('.s1-unit1').length);
   var s1_2=($('.s1-unit2').length)*2;
   var s1=s1_1+s1_2;
   document.getElementById("s1").innerHTML = s1+"/5";

   var s2=($('.s2-unit2').length)*2;
   document.getElementById("s2").innerHTML = s2+"/6";

   var s3=($('.s3-unit2').length)*2;
   document.getElementById("s3").innerHTML = s3+"/4";

   var s4=($('.s4-unit2').length)*2;
   document.getElementById("s4").innerHTML = s4+"/2";

   var s5=($('.s5-unit2').length)*2;
   document.getElementById("s5").innerHTML = s5+"/2";

   var s6=($('.s6-unit2').length)*2;
   document.getElementById("s6").innerHTML = s6+"/4";

　 var s_unit=s1+s2+s3+s4+s5+s6;

   //専門科目上記以外
   var i1=($('.i-unit1').length);
   var i2=($('.i-unit2').length)*2;
   var i4=($('.i-unit4').length)*4;
   var i8=($('.i-unit8').length)*8;
   var i_unit=i1+i2+i4+i8;
   document.getElementById("i-unit").innerHTML = i_unit+"/25";

   //専門科目合計
   var spe = sb_unit + sc_unit + s_unit + i_unit;
   document.getElementById("specialized-unit").innerHTML = spe+"/79";

   //キャリア形成
   var ca1=($('.ca-unit1').length);
   var ca2=($('.ca-unit2').length)*2;
   var ca_unit=ca1+ca2;
   document.getElementById("career").innerHTML = ca_unit +"/7";

   //卒業単位
   var gra = spe + lib + ca_unit;
   document.getElementById("graduation").innerHTML = gra +"/130";


});