Reindeer = function(refreshTime, jumpPages) {
    var refreshTime = refreshTime || 5000,
    	searchInterval = null,
    	jumpPageTimeout = null,
	    lookForReindeer = function() {
	        var found = false;
	        var reinders = $("[src*='bearded'],[src*='candycane'],[src*='hot_chocolate'],[src*='ginger'],[src*='red_nose'],[src*='common'],[src*='candle'],[src*='jumper']");
	        if (reinders.length) {
	            found = true;
	            clearInterval(searchInterval);
	            clearTimeout(jumpPageTimeout);
	            var audio = new Audio('https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3');
	            audio.play(); 
	        }
	    };
    
    if (jumpPages) {
        var links = $('a').filter(function(link) {
            return $(this).attr('href') && $(this).attr('href').indexOf('pepper.pl') > -1
        });
        var timeout =  (Math.floor(Math.random() * 120) + 15);
        jumpPageTimeout = setTimeout(function() {
            var item = links[Math.floor(Math.random()*links.length)];
            item.click();
            setTimeout(function() {
				lookForReindeer();	
            }, 2000);
        }, timeout * 1000 );
    }

    searchInterval = setInterval(lookForReindeer, refreshTime);

}(2000, true);