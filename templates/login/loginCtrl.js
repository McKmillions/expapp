angular.module( "expApp" ).controller( "loginCtrl", function( $scope, $state, $cookies ) {
	$scope.IsVisible = false;
	$scope.ShowHide = function() {
		//If DIV is visible it will be hidden and vice versa.
		$scope.IsVisible = $scope.IsVisible ? false : true;
	}

  // $scope.createUser = function() {
  //   if ($scope.userInfo.password === $scope.userInfo.passwordTwo) {
  //     console.log("userInfo", $scope.userInfo);
  //     loginSrvc.createUser($scope.userInfo)
  //       .then(function(res) {
  //         console.log("res", res);
  //         swal("Created New User", "You are now logged in.", "success")
  //         $state.go('main');
  //       });
  //   } else {
  //     swal("Passwords Do Not Match", "Please check to be sure your passwords match.", "error")
  //   }
  // };

  $scope.createUser = function() {
    if ($scope.userInfo.password === $scope.userInfo.passwordTwo) {
      console.log("userInfo", $scope.userInfo);
      $cookies.putObject('user', $scope.userInfo);
          $state.go('home');
    } else {
      console.log("Passwords Do Not Match", "Please check to be sure your passwords match.");
    }
  };

} );
