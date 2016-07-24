angular.module( "expApp" )
	.service( "loginSrvc", function( ) {
		this.createUser = function(userInfo) {
			console.log(userInfo);
      // $cookies.putObject('user',userInfo)
      }
	} );
