var $layer_0 = $('#back-2'),
    $layer_1 = $('#circle'),
    $layer_2 = $('#back-1'),
    $layer_3 = $('#text'),
    $container = $('.landing-page'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  

  TweenMax.to(
    $layer_2, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 8 + 'px) translateY(' + top / 4 + 'px) rotate(' + left / 250 + 'deg)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
    TweenMax.to(
    $layer_3, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 6 + 'px) translateY(' + top / 3 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });

  TweenMax.to(
    $layer_0,
    10,
    {
      css: {
        transform: 'rotate(' + left / 300 + 'deg)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});