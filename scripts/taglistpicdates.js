function ListArchiveTagDates(TotalFeed) 
{
    var PostTitles = new Array();
    var PostURLs = new Array();
    var PostYears = new Array();
    var PostMonths = new Array();
    var PostDays = new Array();
    if("entry" in TotalFeed.feed) 
    {
	var PostEntries=TotalFeed.feed.entry.length;
	for(var PostNum=0; PostNum<PostEntries ; PostNum++) 
	{
	    var ThisPost = TotalFeed.feed.entry[PostNum];
	    PostTitles.push(ThisPost.title.$t);
	    PostYears.push(ThisPost.published.$t.substring(0,4));
	    PostMonths.push(ThisPost.published.$t.substring(5,7));
	    PostDays.push(ThisPost.published.$t.substring(8,10));
	    var ThisPostURL;
	    for(var LinkNum=0; LinkNum < ThisPost.link.length; LinkNum++) 
	    {
		if(ThisPost.link[LinkNum].rel == "alternate") 
		{
		    ThisPostURL = ThisPost.link[LinkNum].href;
		    break
		}
	    }
	    PostURLs.push(ThisPostURL);
	}
    }
    DisplaytheTOCPicDates(PostTitles,PostURLs,PostYears,PostMonths,PostDays);
}

function DisplayImageFromUrl2(MyUrl){
    var imageurl = "";
      
    $.ajax({ url: MyUrl, async: false, success: function(data) { 
      //alert("success"); 

      var patt = /<a href="(.*?)"/g;
      var findjpg = /\.jpg/;
      var findpng = /\.png/;     



      while(match=patt.exec(data)){

        //alert(match[1]);
        if (findjpg.test(match[1]) === true || findpng.test(match[1]) === true)
        {
          imageurl = match[1];
          //alert(imageurl);
          break;
        }
      }

      document.write('<img style="display:block;" width="90%" src=" ' + imageurl + ' "><br />');
    } });

}

function DisplaytheTOCPicDates(PostTitles,PostURLs,PostYears,PostMonths,PostDays)
{
    var MonthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var NumberOfEntries=PostTitles.length;
    for(var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++)
    {
        if (EntryNum === 0)
        {
            //display the picture of the first image
            DisplayImageFromUrl2(PostURLs[EntryNum]);
        }   
	NameOfMonth = MonthNames[parseInt(PostMonths[EntryNum],10)-1]
	document.write('<a href ="'+PostURLs[EntryNum]+'">'+PostTitles[EntryNum]+"</a> ("+NameOfMonth+" "+parseInt(PostDays[EntryNum],10)+", "+PostYears[EntryNum]+")<br />");
    }
}