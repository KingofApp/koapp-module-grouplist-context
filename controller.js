(function() {
  angular
    .controller('grouplistcontextCtrl', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, "grouplistcontext");

    $scope.separation = $scope.grouplistcontext.modulescope.separation || '0px';
    $scope.showMenu = false;

    var list = [];

    angular.forEach($scope.grouplistcontext.modulescope.menuItems, function(value, key) {
      if (structureService.get().modules[value.path]) {

        var name = structureService.get().modules[value.path].name;
        var icon = structureService.get().modules[value.path].icon;

        list.push({
          name: name,
          description: value.description,
          backgroundImage: value.bgImage,
          backgroundColor: value.bgColor,
          url: value.path,
          icon: icon
        });
      }
    });
    $scope.list = list;
  }
}());
