let link=window.location.href;
str=link.substring(link.indexOf("=")+1,link.length);
localStorage.removeItem("obj"+str);
window.location.href="alldata.html"