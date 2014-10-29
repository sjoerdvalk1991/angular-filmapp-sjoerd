-----------------

BEST PRACTICES ANGULAR

-----------------

- Maak van controllers classes
- Scheid de service van de controller
- Gebruik een alias controller
- Gebruik _this om  te kunnen verwijzen naar de controller.


//Don't do this
app.controller('MyCtrl', function($scope){
  $scope.name = 'Techno Fattie';
});

//Do this
var MyCtrl = function(){
  this.name = 'Techno Fattie';
};

app.controller('MyCtrl', MyCtrl);
