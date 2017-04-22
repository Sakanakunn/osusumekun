function hndlr(response) {
      var url_list = new Array();
      for (var i =0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content_"+i).innerHTML += item.htmlTitle;
        document.getElementById("content_desc_"+i).innerHTML += item.htmlSnippet;
        url_list.push(item.link);
      }
for(var i = 0; i < response.items.length; i++){
document.getElementById("iframe_"+i).src = url_list[i];
document.getElementById("urllink_"+i).href=url_list[i];
}
$(document).ready(function(){
var h2_content = new Array();
var h3_content = new Array();
var li_content = new Array();
for (var i = 1; i < response.items.length; i++) {
$.ajax({
    url: url_list[i],//　http://から始まるURLを指定
    type: 'GET',
    success: function(res) {
  h2_content = $(res.responseText).find('h2').each(function(){//liの数だけeachでループ
  h2_content.push($(this));//取得したliをpushで配列データ追加する
});

  h3_content = $(res.responseText).find('h3').each(function(){//liの数だけeachでループ
  h3_content.push($(this));//取得したliをpushで配列データ追加する
});

  li_content = $(res.responseText).find('li').each(function(){//liの数だけeachでループ
  li_content.push($(this));//取得したliをpushで配列データ追加する
});

 for(var i = 0; i < 100;i++){
  document.getElementById("h2_"+i).innerHTML += "<br>"+ h2_content[i].innerText;
  document.getElementById("h3_"+i).innerHTML += "<br>"+ h3_content[i].innerText;
  document.getElementById("li_"+i).innerHTML += "<br>"+ li_content[i].innerText;
 }
}
});
};
}
)}
