// require('dotenv').load();

var displayInstaBlocks = function(response, params) {
  console.log(response);
  
  var data = response.data;
  var blockList = document.createElement('ul');
  
  for(var i = 0; i < response.data.length; i++) {
    var listItem = document.createElement('li');

    var instaImg = document.createElement('img');
    instaImg.src = response.data[i].images.standard_resolution.url;

    listItem.appendChild(instaImg);
    blockList.appendChild(listItem);
  }

  document.getElementById(params).appendChild(blockList);
}

  var fetcher = new Instafetch( 'e2051328b8224d2484da1085c38ba432' );

$(function() {
  fetcher.fetch({
    tag: 'eglestonus',
    limit: 5,
    callback: displayInstaBlocks, // You can customize your own functionality by building from the logResults method
    params: 'slideShow'
  });
});

$(function(){
  $('.fadein img:gt(0)').hide();
  setInterval(function(){
    $('.fadein :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.fadein');
  }, 3000);
});

$(function() {
  $( ".resizable" ).resizable();
});

$(function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
});
