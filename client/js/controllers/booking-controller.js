app.controller('bookingController', ['$scope','$resource','$location','$localStorage', function ($scope, $resource,$location,$localStorage) {
  
   $scope.$storage = $localStorage;
   $scope.destFlights = [];
   $scope.originFlights = [];

   if($scope.$storage.queryData != undefined) {
      $scope.originAirport = $scope.$storage.queryData.origin;
      $scope.destAirport = $scope.$storage.queryData.destination;
      $scope.passengerCount = $scope.$storage.queryData.passengerCount;
      $scope.flightDate =  new Date($scope.$storage.queryData.date);
   }else{
    $scope.originAirport = undefined;
    $scope.destAirport = undefined;
    $scope.passengerCount = 0;
   }

 $scope.searchFlight = function(){

    var orginTemp = $scope.originAirport.split("(");
        orginTemp = orginTemp[1].split(")");

    var destTemp = $scope.destAirport.split("(");
        destTemp = destTemp[1].split(")");

    var fDate = new Date($scope.flightDate);

    var day = fDate.getDate();
    var monthIndex = fDate.getMonth()+1;
    var year = fDate.getFullYear();
    var date = year + "-"+ monthIndex + "-"+ day;

    $scope.searchData = {
        "from":orginTemp[0],
        "origin": $scope.originAirport,
        "to":destTemp[0],
        "destination":$scope.destAirport,
        "date":date,
        "passengerCount": $scope.passengerCount
    };

    $scope.$storage.queryData = $scope.searchData;

    $scope.queryStr = orginTemp[0]+"-"+destTemp[0]+"/"+date+"/"+$scope.passengerCount+"passenger";

     //check for search result page
      var absUrl = $location.absUrl();

      var urlArr = absUrl.split("/");

      if(urlArr[4] == 'flight-search-page')
          $scope.searchFlightInfo();
        else
           $location.path('/flight-search-page/'+$scope.queryStr);
 
 };

 $scope.incrementPassengerCount = function() {
    $scope.passengerCount++;
 }

 $scope.decrementPassengerCount = function() {
    if($scope.passengerCount != 0)
        $scope.passengerCount--;
 }

  var Flight = $resource('/api/flights');

  $scope.searchFlightInfo = function() {

  $scope.searchData =  $scope.$storage.queryData;

  var flight = new Flight();
      flight.from = $scope.searchData.from;
      flight.to = $scope.searchData.to;
      flight.date = $scope.searchData.date;
      flight.$save(function (result) {
        $scope.searchResult = result;
      });
 };

  Flight.query()
        .$promise.then(function(results) {
              angular.forEach(results, function (result) {
                $scope.destFlights.push(result.to);
                $scope.originFlights.push(result.from);
              });
          });


  //check for search result page
  var absUrl = $location.absUrl();

  var urlArr = absUrl.split("/");

  if(urlArr[4] == 'flight-search-page')
      $scope.searchFlightInfo();

}]);