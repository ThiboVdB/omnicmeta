
  function generate_statlinks(){

    //alert("running calc script");

    var html_str = "";

    html_str += ' <table><tr>';
    html_str += ' <td style="text-align:center">PC </td><td>';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_winrate.html ">Winrates</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_usage.html ">Usage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_eliminations.html ">Elims</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_deaths.html ">Deaths</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_kdratio.html ">K/D Ratio</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_damage.html ">Damage Done</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_blocked.html ">Damage Blocked</a> &nbsp; &nbsp;';
    html_str += ' </br> ';
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_total_assists.html ">Total Assists</a> &nbsp; &nbsp;';    
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_def_assists.html ">Def. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_off_assists.html ">Off. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_accuracy.html ">Accuracy</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/us_pc_crit_accuracy.html ">Crit Accuracy</a> &nbsp; &nbsp;';         
    html_str += ' </td></tr><tr>';
    html_str += ' <td style="text-align:center"> &nbsp; &nbsp; &nbsp; Console &nbsp; &nbsp; &nbsp;</td><td>';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_winrate.html ">Winrates</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_usage.html ">Usage</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_eliminations.html ">Elims</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_deaths.html ">Deaths</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_kdratio.html ">K/D Ratio</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_damage.html ">Damage Done</a> &nbsp; &nbsp;';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_blocked.html ">Damage Blocked</a> &nbsp; &nbsp;';
    html_str += ' </br> ';
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_total_assists.html ">Total Assists</a> &nbsp; &nbsp;';    
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_def_assists.html ">Def. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_off_assists.html ">Off. Assists</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_accuracy.html ">Accuracy</a> &nbsp; &nbsp;';  
    html_str += ' <a href=" http://www.omnicmeta.com/p/console_crit_accuracy.html ">Crit Accuracy</a> &nbsp; &nbsp;';           
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