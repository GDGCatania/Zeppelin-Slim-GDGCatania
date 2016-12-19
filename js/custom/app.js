var myApp = angular.module('myApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

myApp.filter('html', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(urlify(text .replace(/<br\s*[\/]?>/gi, "\b&nbsp;")
                                            .replace(/(<([^>]+)>)/ig, "")
                                            .replace('•',"")));
    };
}])

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '"> [Link] </a>';
    })
}

myApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

myApp.controller('eventsController', function($scope, $http){

  $scope["eventi"] = null;

  $scope.colorsRnd = [
                       "#E91E63",
                       "#3F51B5",
                       "#FF5722",
                       "#00BCD4",
                       "#8BC34A",
                       "#f44336",
                       "#607D8B"
                     ];

  var url = "https://hub.gdgx.io/api/v1/chapters/118102220008611585984/events?page=1&perpage=6&sort=start&asc=-1";

  $.ajax({url: url, type: "GET", dataType: "jsonp", async: true, success: function(result){
      $scope["eventi"] = result;
      $scope.$digest();
  },
  error: function(error){
      //console.log(error);
  }});




});
