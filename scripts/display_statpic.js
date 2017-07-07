
  function generate_statlinks(){

    //alert("running calc script");

    var html_str = "";

    html_str += ' <table align="center" style="margin: 0 auto;"><tr>';
    html_str += ' <td style="text-align:center">PC </td><td>';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-winrate.html ">Winrates</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-usage.html ">Usage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-eliminations.html ">Elims</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-deaths.html ">Deaths</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-kdratio.html ">K/D Ratio</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-damage.html ">Damage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-blocked.html ">Blocked</a> &nbsp; &nbsp;';
    html_str += ' </br> ';
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-total-assists.html ">Total Assists</a> &nbsp; &nbsp;';    
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-def-assists.html ">Def. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-off-assists.html ">Off. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-accuracy.html ">Accuracy</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/pc-us-crit-accuracy.html ">Crit Accuracy</a> &nbsp; &nbsp;';         
    html_str += ' </td></tr><tr>';
    html_str += ' <td style="text-align:center"> &nbsp; &nbsp; &nbsp; Console &nbsp; &nbsp; &nbsp;</td><td>';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-winrate.html ">Winrates</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-usage.html ">Usage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-eliminations.html ">Elims</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-deaths.html ">Deaths</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-kdratio.html ">K/D Ratio</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-damage.html ">Damage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-blocked.html ">Blocked</a> &nbsp; &nbsp;';
    html_str += ' </br> ';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-total-assists.html ">Total Assists</a> &nbsp; &nbsp;';    
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-def-assists.html ">Def. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-off-assists.html ">Off. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-accuracy.html ">Accuracy</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console-crit-accuracy.html ">Crit Accuracy</a> &nbsp; &nbsp;';           
    html_str += ' </td></tr></table> <br/> <hr> <br>';


    //alert(html_str);
    document.getElementById("link_placeholder").innerHTML = html_str; 

  }

  function generate_statpic(region, platform, prefix){

    //alert("running calc script");
    var folder = platform.toLowerCase();
    var url_img0 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Overall.png"; 
    
    var url_img1 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Bronze.png"; 

    var url_img2 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Silver.png"; 

    var url_img3 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Gold.png"; 

    var url_img4 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Platinum.png"; 

    var url_img5 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Diamond.png"; 

    var url_img6 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Master.png"; 
    
    var url_img7 = "https://raw.githubusercontent.com/theswitchfox/omnicmeta/master/img/stats/" + folder + "/" + platform + "_" + prefix + "_Grandmaster.png"; 
    
    var html_str = "";

    html_str += ' <img style="display:block; " src=" ' + url_img0  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img7  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img6  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img5  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img4  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img3  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img2  + ' "> <br/> <br/> ';
    html_str += ' <img style="display:block; " src=" ' + url_img1  + ' "> <br/> <br/> ';
            
    //alert(html_str);
    document.getElementById("img_placeholder").innerHTML = html_str; 

  }