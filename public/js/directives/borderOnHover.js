app.directive('borderOnHover', function () {
  return {
    restrict: 'A', 
    link: function (scope, elem, attrs) {
      elem.on('mouseenter', function () {
        elem.attr('id', 'btn-hover');
      }); 

      elem.on('mouseleave', function () {
        elem.attr('id', '');
      })
    }
  }
})