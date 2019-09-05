// Nav-active js

  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.php';
  }console.log(path);
  var target = $('nav a[href="'+path+'"]');
  // var taractive = $('li' + padth );
  // Add active class to target link
  target.addClass('active-nav');

// End Nav