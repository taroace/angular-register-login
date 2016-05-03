app.directive('passwordVerify', function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!attrs.passwordVerify) {
                return;
            }
            scope.$watch(attrs.passwordVerify, function (value) {
              if( value === ctrl.$viewValue) {
                 ctrl.$setValidity('passwordVerify', true);
                 ctrl.$setValidity("parse",undefined);
                 console.log("inside if block")
              }
              else {
                 ctrl.$setValidity('passwordVerify', false);
                 console.log("inside else block")
              }
            });
            ctrl.$parsers.push(function (value) {
                var isValid = value === scope.$eval(attrs.passwordVerify);
                ctrl.$setValidity('passwordVerify', isValid);
                return isValid ? value : undefined;
            });
        }
    };
});
app.directive("passwordStrength", function(){
    return {        
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs){                    
            scope.$watch(attrs.passwordStrength, function(value) {
              console.log(" attrs.passwordStrength value ",angular.isDefined(value))
                if(angular.isDefined(value)){
                  console.log("value.length ",value.length)
                    if (value.length > 10) {
                        scope.strength = 'strong';
                    } else if (value.length > 3) {
                        scope.strength = 'medium';
                    } else {
                        scope.strength = 'weak';
                    }
                }
                else{
                  scope.strength = '';
                }
            });
        }
    };
});