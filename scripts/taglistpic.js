function ListArchiveTagPic(TotalFeed) 
{
    var PostTitles = new Array();
    var PostURLs = new Array();
    if("entry" in TotalFeed.feed) 
    {
	var PostEntries=TotalFeed.feed.entry.length;
	for(var PostNum=0; PostNum<PostEntries ; PostNum++) 
	{
	    var ThisPost = TotalFeed.feed.entry[PostNum];
	    PostTitles.push(ThisPost.title.$t);
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
    DisplaytheTOCPic(PostTitles,PostURLs);
}

  //sexy table of data here  
    
function DisplayImageFromUrl(MyUrl){
    var imageurl = "";
      
    $.ajax({ url: MyUrl, success: function(data) { 
      //alert("success"); 

      var patt = /<a href="(.*?)"/g;
      var findjpg = /\.jpg/;
      var findpng = /\.png/;     



      while(match=patt.exec(data)){

        //alert(match[1]);
        if (findjpg.test(match[1]) === true || findpng.test(match[1]) === true)
        {
          imageurl = match[1];
          //alert("foundfirstimage");
          break;
        }
      }

      document.write('<img style="display:block;" width="100%" src=" ' + imageurl + ' "><br />');
    } });

}

function DisplaytheTOCPic(PostTitles,PostURLs)
{
    var NumberOfEntries=PostTitles.length;
    for(var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++)
    {
        if (EntryNum === 0)
        {
            //display the picture of the first image
            DisplayImageFromUrl(PostURLs[EntryNum]);
        }    
	document.write('<a href ="'+PostURLs[EntryNum]+'">'+PostTitles[EntryNum]+"</a><br />");
    }
}