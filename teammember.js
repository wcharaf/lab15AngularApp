var app = angular.module('myModule');

app.service('teamnumberService', function(){
	var savedTeamnumber;
  var Team1 = ['Shelby','Jessica','Michael','Cara'];
  var Team2 = ['Leah','Wissam','Jessica D', 'Kevin'];
  var Team3 = ['Katie','Luigi','Nada'];
	return {
	    teamnumberresult: function(n) {
        if(Team1.indexOf(n)>=0) {
          savedTeamnumber = 1;
        } else if (Team2.indexOf(n)>=0) {
          savedTeamnumber = 2;
        } else if (Team3.indexOf(n)>=0) {
          savedTeamnumber = 3;
        } else {
          savedTeamnumber = "None";
        }
        console.log(savedTeamnumber);
        return savedTeamnumber;
      }
  }
});
