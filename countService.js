var app = angular.module('myModule');

app.service('countServices', function(){
	var savedName;
	return {
	    fizBuzz: function(n){
	    	if (n.length%2===0)
	    	{
	    		  savedName=n;
	    		  console.log("fizz"+":"+n);
	    		//  return true;
	    		 return savedName;
				 }

				 else
				 {
					 savedName=n;
					 console.log("buzz"+":"+n);
					 return savedName;
				 }
			 }
	}

});
