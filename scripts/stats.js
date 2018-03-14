
    
    function getAllUrlParams(url) {

      // get query string from url (optional) or window
      var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

      // we'll store the parameters here
      var obj = {};

      // if query string exists
      if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
          // separate the keys and the values
          var a = arr[i].split('=');

          // in case params look like: list[]=thing1&list[]=thing2
          var paramNum = undefined;
          var paramName = a[0].replace(/\[\d*\]/, function(v) {
            paramNum = v.slice(1,-1);
            return '';
          });

          // set parameter value (use 'true' if empty)
          var paramValue = typeof(a[1])==='undefined' ? true : a[1];

          // (optional) keep case consistent
          //paramName = paramName.toLowerCase();
          //paramValue = paramValue.toLowerCase();

          // if parameter name already exists
          if (obj[paramName]) {
            // convert value to array (if still string)
            if (typeof obj[paramName] === 'string') {
              obj[paramName] = [obj[paramName]];
            }
            // if no array index number specified...
            if (typeof paramNum === 'undefined') {
              // put the value on the end of the array
              obj[paramName].push(paramValue);
            }
            // if array index number specified...
            else {
              // put the value at that index number
              obj[paramName][paramNum] = paramValue;
            }
          }
          // if param name doesn't exist yet, set it
          else {
            obj[paramName] = paramValue;
          }
        }
      }

      return obj;
    }


  function get_hero_stats(career_data){
    //which hero to work on in hero_string
    //API data in career_data
    //function returns an array object of everything to display
    var hero_data_array = [];
        
    //alert("parsing");

        //loop over heroes, then loop over 
    $.each(career_data.us.heroes.stats.competitive, function(i, field){       
        var stat_ids = [];
        var stat_strings = [];    
        var stat_data = [];
        //alert("hero - " + i);
 
        stat_ids.push("games_played", "games_won", "games_lost", "games_tied", "time_played", "all_damage_done", "all_damage_done"); //same name, but separate categories - need special case
        stat_strings.push("Games Played", "W", "L", "D", "BlizzTimePlayed", "TotalDamageDone", "AvgDamageDone");  
        
        //determine which stats to get (where i is hero string)
        switch(i) {
            case "genji":
                stat_data.push("Genji");
                stat_data.push(1);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/genji.png"); 
                stat_data.push("#84fe01");                            
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "critical_hits", "dragonblade_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Critical Hits", "Dragonblade Kills", "Deaths");            
               break;         
            case "mccree":
                stat_data.push("McCree");
                stat_data.push(2);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/mccree.png");  
                stat_data.push("#8d3a3a");                           
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "critical_hits", "deadeye_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Critical Hits", "Deadeye Kills", "Deaths");        
               break;  
            case "pharah":
                stat_data.push("Pharah");
                stat_data.push(3);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/pharah.png");  
                stat_data.push("#1b65c5");                           
                stat_ids.push("eliminations", "all_damage_done", "final_blows", "rocket_direct_hits", "barrage_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Final Blows", "Direct Hits", "Barrage Kills", "Deaths");        
               break;     
            case "reaper":
                stat_data.push("Reaper");
                stat_data.push(4);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/reaper.png"); 
                stat_data.push("#272725");                            
                stat_ids.push("eliminations", "all_damage_done", "final_blows", "self_healing", "death_blossom_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Final Blows", "Self Healing", "Blossom Kills", "Deaths");        
               break;  
            case "soldier76":
                stat_data.push("Soldier: 76");
                stat_data.push(5);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/soldier.png");  
                stat_data.push("#5870b6");                           
                stat_ids.push("eliminations", "all_damage_done", "critical_hits", "helix_rocket_kills", "tactical_visor_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Critical Hits", "Helix Rocket Kills", "Visor Kills", "Deaths"); 
     
               break;
            case "sombra":
                stat_data.push("Sombra");
                stat_data.push(6);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/sombra.png");  
                stat_data.push("#761c9c");                                  
                stat_ids.push("eliminations", "all_damage_done", "offensive_assists", "enemies_hacked", "enemies_empd", "deaths");
                stat_strings.push("Eliminations", "Damage", "Offensive Assists", "Enemies Hacked", "Enemies EMP'd", "Deaths");     
               break;    
            case "tracer":
                stat_data.push("Tracer");
                stat_data.push(7);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/tracer.png");     
                stat_data.push("#f8911b");                        
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "critical_hits", "pulse_bomb_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Critical Hits", "Bomb Kills", "Deaths");           
               break;  
            case "bastion":
                stat_data.push("Bastion");
                stat_data.push(8);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/bastion.png");   
                stat_data.push("#6e994d");                          
                stat_ids.push("eliminations", "hero_damage_done", "barrier_damage_done", "final_blows", "tank_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Barrier Damage", "Final Blows", "Tanks Kills", "Deaths");       
               break;    
            case "hanzo":
                stat_data.push("Hanzo");
                stat_data.push(9);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/hanzo.png"); 
                stat_data.push("#938848");                            
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "scatter_arrow_kills", "dragonstrike_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Scatter Kills", "Dragonstrike Kills", "Deaths");         
               break;  
            case "junkrat":
                stat_data.push("Junkrat");
                stat_data.push(10);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/junkrat.png");  
                stat_data.push("#d39309");                           
                stat_ids.push("eliminations", "all_damage_done", "concussion_mine_kills", "enemies_trapped", "rip_tire_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Mine Kills", "Enemies Trapped", "Riptire Kills", "Deaths");          
               break;   
            case "mei":
                stat_data.push("Mei");
                stat_data.push(11);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/mei.png");  
                stat_data.push("#9adaf4");                           
                stat_ids.push("eliminations", "hero_damage_done", "damage_blocked", "enemies_frozen", "blizzard_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Blocked", "Enemies Frozen", "Blizzard Kills", "Deaths");            
               break;  
            case "torbjorn":
                stat_data.push("Torbjorn");
                stat_data.push(12);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/torbjorn.png"); 
                stat_data.push("#ff6200");                            
                stat_ids.push("eliminations", "all_damage_done", "turret_kills", "armor_count_plural_on_pack_other_packs_created", "molten_core_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Turret Kills", "Armor Packs Created", "Molten Core Kills", "Deaths");           
               break;   
            case "widowmaker":
                stat_data.push("Widowmaker");
                stat_data.push(13);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/widowmaker.png");     
                stat_data.push("#6f6fae");                        
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "recon_assists", "scoped_critical_hits", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Recon Assists", "Scoped Critical Hits", "Deaths");             
               break;  
            case "dva":
                stat_data.push("D.Va");
                stat_data.push(14);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/dva.png");   
                stat_data.push("#ff80d0");                          
                stat_ids.push("eliminations", "all_damage_done", "damage_blocked", "final_blows", "self_destruct_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Blocked", "Final Blows", "Destruct Kills", "Deaths");         
               break;  
            case "reinhardt":
                stat_data.push("Reinhardt");
                stat_data.push(15);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/reinhardt.png");  
                stat_data.push("#a9958e");                           
                stat_ids.push("eliminations", "hero_damage_done", "damage_blocked", "final_blows", "earthshatter_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Blocked", "Final Blows", "Earthshatter Kills", "Deaths");           
               break;  
            case "roadhog":
                stat_data.push("Roadhog");
                stat_data.push(16);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/roadhog.png"); 
                stat_data.push("#c09477");                            
                stat_ids.push("eliminations", "all_damage_done", "self_healing", "enemies_hooked", "whole_hog_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Healing", "Enemies Hooked", "Whole Hog Kills", "Deaths");            
               break;  
            case "winston":
                stat_data.push("Winston");
                stat_data.push(17);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/winston.png");    
                stat_data.push("#4d505c");                         
                stat_ids.push("eliminations", "hero_damage_done", "damage_blocked", "jump_pack_kills", "primal_rage_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Blocked", "Jump Pack Kills", "Primal Rage Kills", "Deaths");             
               break;       
            case "zarya":
                stat_data.push("Zarya");
                stat_data.push(18);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/zarya.png");  
                stat_data.push("#f471a8");                           
                stat_ids.push("eliminations", "all_damage_done", "projected_barriers_applied", "high_energy_kills", "graviton_surge_kills", "deaths");
                stat_strings.push("Eliminations", "Damage", "Proj. Barriers", "High Energy Kills", "Graviton Kills", "Deaths");            
               break;           
            case "ana":
                stat_data.push("Ana");
                stat_data.push(19);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/ana.png");   
                stat_data.push("#ccc2ad");             
                stat_ids.push("eliminations", "healing_done", "defensive_assists", "enemies_slept", "nano_boost_assists", "deaths");
                stat_strings.push("Eliminations", "Healing", "Defensive Assists", "Enemies Slept", "Nanoboost Assists", "Deaths");   
               break;         
            case "lucio":
                stat_data.push("Lucio");
                stat_data.push(20);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/lucio.png");      
                stat_data.push("#8bec22");                       
                stat_ids.push("eliminations", "hero_damage_done", "healing_done", "defensive_assists", "sound_count_plural_one_barrier_other_barriers_provided", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Healing", "Defensive Assists", "Sound Barriers", "Deaths");           
               break;                               
            case "mercy":
                stat_data.push("Mercy");
                stat_data.push(21);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/mercy.png");  
                stat_data.push("#fee16c");                           
                stat_ids.push("healing_done", "defensive_assists", "offensive_assists", "damage_amplified", "players_resurrected", "deaths");
                stat_strings.push("Healing", "Defensive Assists", "Offensive Assists", "Damage Amplified", "Resurrected", "Deaths");          
               break;   
            case "symmetra":
                stat_data.push("Symmetra");
                stat_data.push(22);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/symmetra.png");   
                stat_data.push("#5cecff");                          
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "sentry_turret_kills", "players_transported", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Sentry Turret Kills", "Players Transported", "Deaths");            
               break;     
            case "zenyatta":
                stat_data.push("Zenyatta");
                stat_data.push(23);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/zen.png");    
                stat_data.push("#c79c00");                         
                stat_ids.push("eliminations", "hero_damage_done", "healing_done", "offensive_assists", "transcendence_healing", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Healing", "Offensive Assists", "Trans. Healing", "Deaths");          
               break;                 
            case "orisa":
                stat_data.push("Orisa");
                stat_data.push(24);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/orisa.png");    
                stat_data.push("#db9a00");                         
                stat_ids.push("eliminations", "all_damage_done", "damage_blocked", "offensive_assists", "damage_amplified", "deaths");
                stat_strings.push("Eliminations", "Damage", "Blocked", "offensive_assists", "Damage Amplified", "Deaths");          
               break;   
            case "doomfist": 
                stat_data.push("Doomfist");
                stat_data.push(25);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/doomfist.png");    
                stat_data.push("#df4e36");                         
                stat_ids.push("eliminations", "hero_damage_done", "final_blows", "ability_damage_done", "meteor_strike_kills", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Final Blows", "Ability Damage", "Meteor Strike Kills", "Deaths");           
               break;   
            case "moira": 
                stat_data.push("Moira");
                stat_data.push(26);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/moira.png");    
                stat_data.push("#691cce");                         
                stat_ids.push("eliminations", "hero_damage_done", "healing_done", "coalescence_kills", "coalescence_healing", "deaths");
                stat_strings.push("Eliminations", "Hero Damage", "Healing", "Coalescence Kills", "Coalescence Healing", "Deaths");         
               break;                                                           
            default:
                stat_data.push("Not Found");
                stat_data.push(0);
                stat_data.push("http://rawgit.com/theswitchfox/omnicmeta/master/img/hero/sombra.png");    
                stat_data.push("#CBC1AD");                                         
                stat_ids.push("eliminations_average", "objective_kills", "deaths", "all_damage_done", "healing_done", "damage_blocked");
                stat_strings.push("Eliminations", "Objective Kills", "Deaths", "Damage", "Healing", "Damage Blocked");  
                break;
        } 

        for (var stat = 0; stat < stat_ids.length ; stat++) {
            var found = false;
            if (stat == 6){ //special case where we need average
                $.each(field.rolling_average_stats, function(j, avgstats){
                    if (stat_ids[stat] == j) { 
                        //alert("inner looking for " + stat_ids[stat]+ " - found " + j);                    
                        stat_data.push(stat_strings[stat]); 
                        stat_data.push(avgstats); 
                        found = true;
                    }
                });            
            }
            else { //search through regular stats
                $.each(field.general_stats, function(j, avgstats){
                    if (stat_ids[stat] == j) { 
                        //alert("inner looking for " + stat_ids[stat]+ " - found " + j);     
                        stat_data.push(stat_strings[stat]); 
                        stat_data.push(avgstats); 
                        found = true;
                    }
                });            

                $.each(field.hero_stats, function(j, avgstats){
                    if (stat_ids[stat] == j) { 
                        //alert("herostats looking for " + stat_ids[stat]+ " - found " + j);                    
                        stat_data.push(stat_strings[stat]); 
                        stat_data.push(avgstats); 
                        found = true;
                    }
                });   
            }
            if (found == false)
            {
                stat_data.push(stat_strings[stat]);                 
                stat_data.push("0");               
            }
        };

        hero_data_array.push(stat_data);
    });
    
                
    hero_data_array.sort(function (a, b) {
        var time_played_a = 60*a[13];
        if (time_played_a >= 60){
            time_played_a = Math.round(a[15]/(60.0*a[17])); //(damage / damage per min)
        }
        var time_played_b = 60*b[13];
        if (time_played_b >= 60){
            time_played_b = Math.round(b[15]/(60.0*b[17])); //(damage / damage per min)
        }        
            
        if (time_played_a === time_played_b) {
            return 0;
        }
        else {
            return (time_played_a > time_played_b) ? -1 : 1;
        }
    });  
 
    return hero_data_array;
  }

  function ow_api_fetch_profile(){

    //var username = document.getElementById("battlenet_tag").value;
    var username = getAllUrlParams().username;
    
    if (!username || username.length === 0 || username == null) return; //check for null value

    var split_username = username; 
    var fetch_url = "https://owapi.net/api/v3/u/" + split_username + "/blob";

    //alert(fetch_url);
    
//    build an array
    var hero_data_array = [];
    var html_str = "";

    build_button(true);
    
    var temp_avatar_url = "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x02500000000002F9.png";
    var temp_str = "";
        //get SR, get total W/L
        temp_str += ' <div> </br> <table> <span> <tr>';
        temp_str += ' <td valign="middle"> <img style="display:block; " height="96" width="96" src=" ' + temp_avatar_url  + ' "> </td> ';
        temp_str += ' <td valign="middle" style=" width: 350px; text-align: left;"> <h3 class="post-title" style="color: #ffffff;"> ' + username.replace("-", "#") + '</h3> </td>';
        temp_str += ' <td valign="middle" style=" width: 200px; text-align: center;"> NO SR </td>';
        temp_str += ' <td valign="middle" style=" width: 200px; text-align: center;"> W / L / D : % Winrate </td> ' ;
        temp_str += ' </tr> </span> </table> </br> </div>' ;
            
    document.getElementById("PlayerStats").innerHTML = temp_str;
            
    var rank_num = 0;
    var tier_name = ""; 

    $.when(
    $.getJSON(fetch_url, function(result){
        //document.getElementById("ow_api_status").innerHTML = "Fetched, Parsing...";
        //alert("elims:" + result.us.heroes.stats.competitive.soldier76.average_stats.eliminations_average);
        //alert("success");
             
        //below is broken, if the person hasn't won, lost, or completed placements
        var avatar_url = result.us.stats.competitive.overall_stats.avatar;
        var rank_url = "";         
        var player_sr = result.us.stats.competitive.overall_stats.comprank;
        var player_wins = result.us.stats.competitive.overall_stats.wins; 
        if (player_wins == null){
            player_wins = 0;
        }
        var player_losses = result.us.stats.competitive.overall_stats.losses;
        if (player_losses == null){
            player_losses = 0;
        }        
        var player_ties = result.us.stats.competitive.overall_stats.ties;
        if (player_ties == null){
            player_ties = 0;
        }        
        var winrate = (player_wins/(player_wins+player_losses))*100.0;
        var rank_level = result.us.stats.competitive.overall_stats.level;
        var rank_border_url = result.us.stats.competitive.overall_stats.rank_image;
        var rank_stars_url = rank_border_url.replace("Border", "Rank");
        

        
        
        switch(result.us.stats.competitive.overall_stats.tier)
        {
            case "grandmaster":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-7.png"
                rank_num = 0;
                tier_name = "Grandmaster";               
                break;
            case "master":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-6.png"
                rank_num = 1;                
                tier_name = "Master";               
                break;
            case "diamond":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-5.png"
                rank_num = 2;
                tier_name = "Diamond";               
                break;
            case "platinum":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-4.png"
                rank_num = 3;                
                tier_name = "Platinum";               
                break;
            case "gold":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-3.png"
                rank_num = 4;                
                tier_name = "Gold";               
                break;
            case "silver":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-2.png"
                rank_num = 5;                
                tier_name = "Silver";               
                break;
            case "bronze":
                rank_url = "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-1.png"
                rank_num = 6;                
                tier_name = "Bronze";               
                break;
            case null:
                rank_num = 3;                
                tier_name = "Overwatch";               
                break;             
        }

        //get SR, get total W/L
        html_str += ' <div style="padding: 12px;"> </br> <table> <span> <tr>';
        html_str += ' <td valign="middle"> <img style="display:block; " height="96" width="96" src=" ' + avatar_url  + ' "> </td> ';
        html_str += ' <td valign="middle" style="text-align: left; width: 350px;" > <h3 class="post-title" style="color: #ffffff;"> ' + username.replace("-", "#") + '</h3> </td>';
        html_str += ' <td> <div style="background-image:url(\'' + rank_border_url + '\'); display: table-cell; width:96px; height: 96px; background-size: contain; background-repeat: no-repeat; text-align: center;">';
        html_str += ' <div style="line-height:175%; width:96px; height: 48px; "> </br> <font size="4">' + rank_level + '</font></div>';
        html_str += ' <div style="background-image:url(\'' + rank_stars_url + '\');width:96px; height: 48px;background-size: contain;"></div>'
        html_str += ' </div> </td>';
        //alert (html_str);
        if (player_sr != null)
        {
            html_str += ' <td valign="middle" style="text-align: center; width: 200px; "> <div style="background-image:url(\'' + rank_url + '\'); display: table-cell; width:96px; height: 96px; background-size: contain; background-repeat: no-repeat; text-align: bottom;">';
            html_str += '<div style=" width:96px; height: 96px; display: table-cell; text-align: center; vertical-align: bottom; "> ' + player_sr + ' SR </div></div></td>';
        }
        else {
            html_str += ' <td valign="middle" style="text-align: center; width: 200px; "> NO SR</td>' ;            
        }
        html_str += ' <td valign="middle" style=" width: 200px; text-align: center;"> ' + player_wins + 'W / ' + player_losses + 'L / ' + player_ties + 'D </br> ' + winrate.toFixed(0)+'% Winrate </td> ' ;
        html_str += ' </tr> </span> </table> </br> </div>' ;


        hero_data_array = get_hero_stats(result);

        
    }).fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    })
    ).then(function() {
        build_button(false);
        //document.getElementById("ow_api_status").innerHTML = "";

        for(var hero = 0; hero < hero_data_array.length; hero++)
        {
            var hero_data = hero_data_array[hero];
            
            var name = hero_data[0];
            var id = hero_data[1];
            var imageurl = hero_data[2];
            var color = hero_data[3];
            var winrate = (hero_data[7]*100.0)/(hero_data[7]+hero_data[9]);
            if (hero_data[7]+hero_data[9] == 0){
                winrate = 0;
            }
            var time_played = Math.round(hero_data[13]*60.0);
            if (time_played >= 60){
                time_played = Math.round(hero_data[15]/(60.0*hero_data[17])); //(damage / damage per min)
            }
            if (time_played == 0){ //threshold for displaying the hero!
                continue;
            }

            var total = 0;
            //get overall percent hero ranking
            for (var i = 18; i < hero_data.length; i+=2)
            {
                var print_data = hero_data[i+1]/time_played;
                var stat = (i-18)/2;
                var percent_tier = GetValueTier(rank_num, id, stat, print_data);               
                if (stat == 5){
                    percent_tier = 100 - percent_tier;
                }
                total += percent_tier;
            }
            var percent_overall = GetValueOverall(rank_num, id, total);               
            
            
            //draw hero pic, name, W/L/T
            html_str += ' <div align="left" style="background-color: #292929; float: left; padding: 12px; max-width: 1000px; background-clip:content-box;"> </br>'
            html_str += ' <table> <span> <tr>';
            html_str += ' <td valign="middle" style=" width: 24px;"> </td> ';
            html_str += ' <td valign="middle" style=" width: 64px;"> <img style="display:block; background-color:' + color + ';" height="50" width="56" src=" ' + imageurl + ' "> </td> ';
            html_str += ' <td valign="middle" style=" width: 200px; text-align: left; "> <h5>' + name + '<h5> </td>';
            html_str += ' <td valign="middle" style=" width: 150px; text-align: center; "> <font size="5">' + hero_data[7] + 'W - ' + hero_data[9] + 'L </font> </br> Match Record </td> ' ;
            html_str += ' <td valign="middle" style=" width: 150px; text-align: center; "> <font size="5">' + winrate.toFixed(0)+'% </font> </br> Winrate </td> ' ;            
            html_str += ' <td valign="middle" style=" width: 150px; text-align: center; "> <font size="5"> ' + time_played + ' Minutes </font> </br> Time Played </td> ' ;
            html_str += ' <td valign="middle" style=" width: 150px; text-align: center; "> <font size="5">' + percent_overall.toFixed(0) + '% </font> </br> Hero Ranking </td> ' ; // (' + tier_name+ ') </td> ' ;
            html_str += ' </tr> </span> </table>' ;

            html_str += ' <table> <span> <tr> ' ;
            
            var weakness_array = [];
            var strength_array = [];
            for (var i = 18; i < hero_data.length; i+=2)
            {
                var num_data = hero_data[i+1]/time_played;
                var print_data;
                if (num_data < 100)
                {
                    print_data = num_data.toFixed(2);
                }
                else if (num_data < 1000)  
                {
                    print_data = num_data.toFixed(1);
                }
                else 
                {
                    print_data = num_data.toFixed(0);                
                }
                

                
                //do the table lookup here!
                
                var stat = (i-18)/2;
                var percent_tier = GetValueTier(rank_num, id, stat, print_data);               
                if (stat == 5){
                    percent_tier = 100 - percent_tier;
                }
                
                var percent_main = GetValueMain(rank_num, id, stat, print_data);       
                if (stat == 5){
                    percent_main = 100 - percent_main;
                }
                
                //generate the player's strengths and weaknesses
                if (percent_tier <= 25)
                {
                    weakness_array.push(hero_data[i]);
                }
                if (percent_tier >= 75)
                {
                    strength_array.push(hero_data[i]);                
                }
                
                html_str += ' <td valign="top" style=" width: 150px; text-align: center;">  <h4> ' + hero_data[i]+ ' </h4>';
                html_str += print_data + ' / min </br>';
                html_str += ' <table style="margin-left: auto; margin-right: auto;"> <tr> <td style="width:100px;  border-style: solid;  border-width: 1px; border-color: white"> <table> <tr> <td style="height:5px; width:' + percent_tier + 'px ; background-color:'+ color + ';"> </td> </tr> </table> </td> </tr> </table> ';
                html_str += percent_tier.toFixed(0) + '% ' + tier_name + ' </br>';                
                html_str += '('+percent_main.toFixed(0) + '% Mains) </br>';                
                html_str += ' </td> ' ;
            }
            html_str += ' </tr> </span> </table> </br> ';
            if (strength_array.length > 0)
            {
                html_str += ' <table> <tr> <td valign="middle" style=" width: 24px;"> </td> <td> <b> Strengths: &nbsp; </b> </td>';
                for (var i = 0; i < strength_array.length; i++)
                {
                    html_str += '<td>' + strength_array[i];
                    if (i+1 < strength_array.length)
                    {
                        html_str += ', &nbsp; ';                       
                    }
                    html_str += ' </td> ' ;                
                }  
                html_str += ' </tr> </span> </table> ';      
                
                //make it pretty when we dont have a weakness list to followup
                if (weakness_array.length == 0) 
                {
                    html_str += ' </br> ';      
                }
            }
            if (weakness_array.length > 0)
            {
                html_str += '  <table> <tr> <td valign="middle" style=" width: 24px;"> </td> <td> <b> Weaknesses: &nbsp; </b> </td>';
                for (var i = 0; i < weakness_array.length; i++)
                {
                    html_str += '<td>' + weakness_array[i];
                    if (i+1 < weakness_array.length)
                    {
                        html_str += ', &nbsp; ';                
                    }
                    html_str += ' </td> ' ;                                
                }               
                html_str += '</tr> </table> <br /> ';
            }
            html_str += '</div> ';
        }   
        
        
   /*       var str = JSON.stringify(hero_data_array);
          document.getElementById("answer").innerHTML = str;
          
        var output_arr = document.getElementsByClassName("hero_result");
        for (var i = 0; i < hero_data_array.length ; i++) {
            var hero = hero_data_array[i].hero.charAt(0).toUpperCase() + hero_data_array[i].hero.slice(1);
            output_arr[i].innerHTML = "<b>" + hero + "</b>";
            
        }
        */
       
       //take string we just generated at update html
        //alert(html_str);
       
        document.getElementById("PlayerStats").innerHTML = html_str; 
    //Do something
    }
    );
    
  } 


    function calcul(){

        //alert("running calc script");

        ow_api_fetch_profile();

        //alert("all done!");


    }
  
    function open_user_page(){

        var username = document.getElementById("battlenet_tag").value;

        if (!username || username.length === 0) return; //check for null value

        var split_username = username.split("#");
        var new_url = "http://www.omnicmeta.com/p/playerstats.html?username=" + split_username[0] + "-" + split_username[1];

        window.open(new_url,"_self")
        //alert("running calc script");


    }  
  
    function build_button(fetching){
        var username = getAllUrlParams().username;
        if (username == null)
        {
          username = "Battletag";
        }
        var html_str = "";
        html_str += ' <form action="" id="nothing"> <br />';
        html_str += ' Enter battle.net tag: <input id="battlenet_tag" type="text" value="' + username.replace("-", "#")+ '"/>';
        html_str += ' <input id="button" onclick="open_user_page()" type="button" value="Fetch Stats!"/> ';
        if (fetching == true)
        {
            html_str += ' <input type="image" src="http://rawgit.com/theswitchfox/omnicmeta/master/scripts/ajax-loader.gif" /> Fetching Career Profile... Please Wait A Few Seconds... ';        
        }
        html_str += ' </form>';

        document.getElementById("SearchButton").innerHTML = html_str; 
    }
