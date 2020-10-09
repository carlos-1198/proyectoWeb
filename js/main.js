$(window).on('load', function(){
  $.instagramFeed({
    'username': 'xiaomi.colombia',
    'container': "#instagram-feed-demo"
  });
});

$(window).on('load', function(){
  $.instagramFeed({
    'username': 'xiaomi.colombia',
    'container': "#instagram-feed-demo",
    'display_profile': true,
    'display_biography': true,
    'display_igtv': false
  });
});

$(window).on('load', function(){
  $.instagramFeed({
    'username': 'xiaomi.colombia',
    'container': "#instagram-feed-demo",
    'items': 8
  });
});

$(window).on('load', function(){
  $.instagramFeed({
    'username': 'xiaomi.colombia',
    'container': "#instagram-feed-demo",
    'items_per_row': 4
  });
});

$(window).on('load', function(){
  $.instagramFeed({
    'username': 'xiaomi.colombia',
    'container': "#instagram-feed-demo",
    'margin': 0.5
  });
});