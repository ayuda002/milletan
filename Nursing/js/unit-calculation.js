//ボタンクリック時に取得単位数計算をする
$('button').on('click', function(){
    //社会・環境
    var su1 = ($('.s-unit1').length);
    var su2 = ($('.s-unit2').length)*2;
    var su=su1+su2;
    document.getElementById("social").innerHTML = su+"/2";
    //言語・文化
    var cu1 = ($('.c-unit1').length);
    var cu2 = ($('.c-unit2').length)*2;
    var cu=cu1+cu2;
    document.getElementById("culture").innerHTML = cu+"/3";
    //精神・身体
    var bu1 = ($('.b-unit1').length);
    var bu2 = ($('.b-unit2').length)*2;
    var bu=bu1+bu2;
    document.getElementById("body").innerHTML = bu+"/5";
    //自然・情報
    var iu1 = ($('.i-unit1').length);
    var iu2 = ($('.i-unit2').length)*2;
    var iu=iu1+iu2;
    document.getElementById("information").innerHTML = iu+"/5";
    //外国語科目
    var fu1 = ($('.f-unit1').length);
    var fu2 = ($('.f-unit2').length)*2;
    var fu=fu1+fu2;
    document.getElementById("english").innerHTML = fu+"/4";

    //教養科目
    var lib = su + cu + bu + iu + fu;
    document.getElementById("liberal-arts").innerHTML = lib+"/25";

    //sp1
    var sp1_1 = ($('.sp1-unit1').length);
    var sp1_2 = ($('.sp1-unit2').length)*2;
    var sp1 = sp1_1 + sp1_2;
    document.getElementById("sp1").innerHTML = sp1+"/8";
   
    //sp2
    var sp2_1 = ($('.sp2-unit1').length);
    var sp2_2 = ($('.sp2-unit2').length)*2;
    var sp2 = sp2_1 + sp2_2;
    document.getElementById("sp2").innerHTML = sp2+"/12";
   
    //sp3
    var sp3_1 = ($('.sp3-unit1').length);
    var sp3_2 = ($('.sp3-unit2').length)*2;
    var sp3 = sp3_1 + sp3_2;
    document.getElementById("sp3").innerHTML = sp3+"/3";

    //sp4
    var sp4_1 = ($('.sp4-unit1').length);
    var sp4_2 = ($('.sp4-unit2').length)*2;
    var sp4 = sp4_1 + sp4_2;
    document.getElementById("sp4").innerHTML = sp4+"/4";

    //専門基礎科目　27
    var sp27 = sp1 + sp2 + sp3 +sp4;
    document.getElementById("Specialized-basic").innerHTML = sp27+"/27";

    //sp5
    var sp5_1 = ($('.sp5-unit1').length);
    var sp5_2 = ($('.sp5-unit2').length)*2;
    var sp5 = sp5_1 + sp5_2;
    document.getElementById("sp5").innerHTML = sp5+"/13";

    //sp6
    var sp6_1 = ($('.sp6-unit1').length);
    var sp6_2 = ($('.sp6-unit2').length)*2;
    var sp6_3 = ($('.sp6-unit3').length)*3;
    var sp6 = sp6_1 + sp6_2 + sp6_3;
    document.getElementById("sp6").innerHTML = sp6+"/13";

    //sp7
    var sp7_1 = ($('.sp7-unit1').length);
    var sp7_2 = ($('.sp7-unit2').length)*2;
    var sp7 = sp7_1 + sp7_2;
    document.getElementById("sp7").innerHTML = sp7+"/7";

    //sp8
    var sp8_1 = ($('.sp8-unit1').length);
    var sp8_2 = ($('.sp8-unit2').length)*2;
    var sp8 = sp8_1 + sp8_2;
    document.getElementById("sp8").innerHTML = sp8+"/5";

    //sp9
    var sp9_1 = ($('.sp9-unit1').length);
    var sp9_2 = ($('.sp9-unit2').length)*2;
    var sp9 = sp9_1 + sp9_2;
    document.getElementById("sp9").innerHTML = sp9+"/5";

    //sp10
    var sp10_1 = ($('.sp10-unit1').length);
    var sp10_2 = ($('.sp10-unit2').length)*2;
    var sp10 = sp10_1 + sp10_2;
    document.getElementById("sp10").innerHTML = sp10+"/5";
    
    //sp11
    var sp11_1 = ($('.sp11-unit1').length);
    var sp11_2 = ($('.sp11-unit2').length)*2;
    var sp11 = sp11_1 + sp11_2;
    document.getElementById("sp11").innerHTML = sp11+"/5";
    
    //sp12
    var sp12_1 = ($('.sp12-unit1').length);
    var sp12_2 = ($('.sp12-unit2').length)*2;
    var sp12 = sp12_1 + sp12_2;
    document.getElementById("sp12").innerHTML = sp12+"/4";

    //spc1
    var spc1_1 = ($('.spc1-unit1').length);
    var spc1_2 = ($('.spc1-unit2').length)*2;
    var spc1 = spc1_1 + spc1_2;
    document.getElementById("spc1").innerHTML = spc1+"/11";

    //spc2
    var spc2_1 = ($('.spc2-unit1').length);
    var spc2_2 = ($('.spc2-unit2').length)*2;
    var spc2 = spc2_1 + spc2_2;
    document.getElementById("spc2").innerHTML = spc2+"/2";
    

   //キャリア形成
   var ca1=($('.ca-unit1').length);
   var ca2=($('.ca-unit2').length)*2;
   var ca_unit=ca1+ca2;
   document.getElementById("ca").innerHTML = ca_unit +"/5";

   //専門科目
   var sp74 = sp5 + sp6 + sp7 + sp8 + sp9 + sp10 + sp11 + sp12 + spc1 + spc2 + ca_unit;
   document.getElementById("Specialized-subject").innerHTML = sp74 +"/74";

   //卒業単位
   var gra = sp27 + sp74 + lib;
   document.getElementById("graduate").innerHTML = gra +"/126";


});