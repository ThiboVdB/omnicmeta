
  function generate_statpic(region, platform, prefix){

    //alert("running calc script");

    var url_img0 = "http://rawgit.com/theswitchfox/omnicmeta/master/img/stats/" + platform + "_" + prefix + "_Overall.png"   
    var html_str = "";

    html_str += ' <img style="display:block; " src=" ' + url_img0  + ' "> <br/> ';

    alert(html_str);
    document.getElementById("placeholder").innerHTML = html_str; 

  }