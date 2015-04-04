app.directive('borderOnHover', function () {
  return {
    restrict: 'A', 
    link: function (scope, elem, attrs) {
      elem.on('mouseenter', function () {
        elem.addClass('btn-hover');
      }); 

      elem.on('mouseleave', function () {
        elem.removeClass('btn-hover');
      })
    }
  }
})