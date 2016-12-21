angular.module('Booty',[])
    .controller('BootyController', bootyFunction);

function bootyFunction() {
    var bCtrl = this;
bCtrl.pageShow = true;
    this.greeting = 'Hello';
    // call $http and get all the student from the database

    bCtrl.toggle1 = function() {
            bCtrl.pageShow = !bCtrl.pageShow
        }
        
}
