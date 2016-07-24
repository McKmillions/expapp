angular.module( "expApp" ).controller( "homeCtrl", function( $scope, $state, $cookies ) {

	$scope.user = $cookies.getObject( "user" );

	if ( !$scope.user ) {
		$state.go( "login" );
		return "Unauthorized", "Please log in", "error";
	}

	console.log( "user(homeCtrl):", $scope.user );

	console.log( $scope.user[ "first" ] );

	$scope.logout = function() {
		$scope.user = {};
		$cookies.remove( "user" );
		if ( $scope.user === {} ) {
			$state.go( "login" );
		} console.log( "logout", $scope.user );
	};

	$scope.addUserExpense = function() {

		$scope.newExpense;
		expenseService.addUserExpense( $scope.newExpense, $scope.user._id )
			.then( function( res ) {
				$scope.getUserExpenses();
				$scope.expense.$setUntouched();
				$scope.newExpense = {};
			} );
	};

	// $scope.createUser = function() {
	//   if ($scope.userInfo.password === $scope.userInfo.passwordTwo) {
	//     console.log("userInfo", $scope.userInfo);
	//     $cookies.put('user', $scope.userInfo);
	//         $state.go('home');
	//   } else {
	//     console.log("Passwords Do Not Match", "Please check to be sure your passwords match.");
	//   }
	// };
} );
