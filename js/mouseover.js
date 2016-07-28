$('#avatar').hover(function() {
  $(this).attr('src', 'https://twitter.com/jsutcodes/profile_image?size=original');
}, function() {
  $(this).attr('src', 'https://avatars.githubusercontent.com/jsutcodes');
});
