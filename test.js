function User (name){
    this.name = name;
    this.age = 25;

    this.showName = function () {
        alert(this.name);
    }

    }

    var car = {
        name: 'CAR'
}
var user1 = new User('USER-1');

var user2 = new User('USER-2');

console.log(user1);

user1.showName();

user2.showName();

car.show = user1.showName;

car.show();
/*function hi (message) {
    return 'hello' + message;
}

var hi2 = message => 'hello' + message;
    console.log(hi2('user'));*/



/*(function  (){
   
    var user = {name: 'Pit', age:25};
    user.pay = function () {
        send ();
    }
window.myUser = user;

})();

myUser.pay();*/