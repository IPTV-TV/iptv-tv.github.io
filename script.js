var locations = [
            "http://widget1.ottplayer.es/",
            "http://widget.ottplayer.es/",
            "http://88.150.252.53/",
            ""];
        function l(li,t,n){
            t = document.createElement('script');
            t.type = "text/javascript";
            t.async=false;
            t.onerror=function() {
                n.parentNode.removeChild(t);
                li++;
                if (li < locations.length) {
                    if (typeof onLoad === "undefined") {
                        onLoad = function() {
                            l(li);
                        };
                    } else {
                        l(li);
                    }
                } else {
                    document.body.style.background = "#000000";
                    var eb = document.createElement("div");
                    eb.style.cssText = "color:red;width:94%;height:1.2em;top:12%;left:3%;position:absolute;background:transparent;z-index:100;font-size:1.6em;text-align:center;border-radius:0.2em;";
                    document.body.appendChild(eb);
                    eb.innerHTML = "Application load failed";
                }
            };
            
            window.loaderLocation = locations[li];
            t.src = locations[li]+"js/loader.js?rcid="+(new Date()).getTime();
            n = document.getElementsByTagName('script')[0];
            n.parentNode.insertBefore(t,n);
        };
        l(0);

        //Google Analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
        //End Google Analytics