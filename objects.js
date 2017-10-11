// var newCar = function () {
//   var car = {
//     make: "Ford",
//     model_year: "2016",
//     color: "Black"
//   };
//   function carInfo (car){
//     return (car);
//   }
// }

//a function that creates an objects and concats properties
function carObjects () {
  let carInfo = {
    make: "Ford",
    modelyear: "2016",
    color:"gray",
    speed: 0,
    getData: function() { return this.make+"-"+this.modelyear+"-"+this.color },
    getSpeed: function() {
    return this.speed;},
    accelerate: function() {
        this.speed += 10;
        return this.speed;
      },
     brake: function () {
       this.speed -= 7;
       return this.speed;
     }
    }
    return carInfo;
  }
  console.log(carInfo.getData());

//Create car object and use While Loop to speed up to 50 and down to 0

function carObject() {
  let carSpeed = {
    mph: 0,
    getSpeed: function() { return this.mph},
    speedUp: function() {
      while (this.mph <= 69){
        console.log(this.mph + " mph");
        this.mph++;
      }
      while (this.mph > -1){
          console.log(this.mph + " mph");
          this.mph--;
      }
    }
  }
  return carSpeed;
}


      if (this.speed < 70) {
        return this.speed++;
      } if else (this.speed >= 70) {
          return this.speed--;
        } else (this.speed <= 0){
          return this.speed = 0;
        }
      }
    }
  }


}



// Create a function that creates a counter tool

  var add = (function () {
    var counter = 0;
    return function() {counter +=1;}
  })();
