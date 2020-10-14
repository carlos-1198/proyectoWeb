
$(document).ready(function(){
  var insta = new InstaFeed({
    get:'user',
    userId:'5727217189',
    limit:12,
    resolution:'standard_resolution',
    accesToken:'',
    sortBy: 'most-recent'
    template:'<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });
  insta.run();
});