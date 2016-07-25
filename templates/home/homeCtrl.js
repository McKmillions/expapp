angular.module( "expApp" ).controller( "homeCtrl", function( $scope, $state, $cookies ) {

	$scope.user = $cookies.getObject( "user" );
	$scope.pending = [];
	$scope.reimbursed = [];
	$scope.expenses = [];
	$scope.edit = true;

	if ( !$scope.user ) {
		$state.go( "login" );
		return "Unauthorized", "Please log in", "error";
	}

	// console.log( "user(homeCtrl):", $scope.user );

	// console.log( $scope.user[ "first" ] );

	$scope.logout = function() {
		$scope.user = {};
		$cookies.remove( "user" );
		if ( !$scope.user.length ) {
			$state.go( "login" );
		}
	};

	$scope.getExpenses = function() {
		// $scope.expenses = $cookies.getObject( "newExpense" );
		console.log( "getExpenses", $scope.expenses );
		$scope.pending = [];
		$scope.reimbursed = [];

		// $scope.expenses.forEach( function( element ) {
		// 	if ( element.dateReimbursed === null ) {
		// 		$scope.pending.push( element );
		// 	} else {
		// 		$scope.reimbursed.push( element );
		// 	}
		// } );
	};
	// $scope.getExpenses();

	$scope.addUserExpense = function() {
		// $cookies.putObject( "newExpense", $scope.newExpense );
		$scope.expenses.push( $scope.newExpense );
		// console.log( "newExpense: ", $scope.newExpense );
		$scope.getExpenses();
		$scope.newExpense = {};
		$scope.expense.$setUntouched();
	};

	$scope.rmbAlert = function( expense ) {
		console.log( "expense(rmbAlert)", expense );

		$scope.expId = expenseId;

// 		function( inputValue ) {
// 		if ( !inputValue ) {
// 			console.log( "You need to enter the date of reimbursement!" );
// 			return false;
// 		}
// 		$scope.rmbDate = new Date( inputValue );
// 		if ( !$scope.rmbDate.valueOf() ) {
// 			console.log( "You need to enter a valid date!" );
// 			return false;
// 		}
// 		if ( $scope.rmbDate.valueOf() ) {
// 			console.log( "Reimbursed!", "Reimbursement Date: " + inputValue, "success" );
// 			expenseService.reimburse( $scope.rmbDate, $scope.expId )
// 				.then( function( ) {
// 					$scope.getUserExpenses();
// 				} );
// 		}
// 	};
	};

} );
