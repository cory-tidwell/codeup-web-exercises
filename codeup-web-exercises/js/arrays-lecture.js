// Arrays - a list of elements
// Arrays store numbers, strings, boolean, null, undefined, objects, arrays,

var doggos = ["boxer", 'great dane', 'schnauzer', "husky", 'gsp'];
    for (let  i = 0; i < doggos.length; i++) {
        console.log(doggos[i]);
    }

var groceryList = ["bananas", "milk", "cuties", "cough syrup", "honey", "tea"];

    groceryList.forEach(function(groceryItem) {
      console.log(groceryItem);
    })

var schoolGames = ["dodgeball", "kickball", "hopscotch", "tag", "hide" +
" and seek"];

    // schoolGames.forEach(function(schoolFun) {
    //     console.log("my favorite game in school was: " + schoolFun);
    // })

    forEach((schoolGames) => {console.log("my favorite game in school was: " + schoolFun)  })
