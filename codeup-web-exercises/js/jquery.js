// "use strict";
//
// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    // Update how much of the pattern is complete
    current++;

    // If complete, alert and reset
    if (pattern.length === current) {
        current = 0;
        window.alert('You have added 30 lives!');
    }

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

var global = {

    konami: function() {
        var konamikeys = [38,38,40,40,37,39,37,39,66,65],
            started = false,
            count = 0;

        $(document).keydown(function(e){
            var reset = function() {
                started = false;
                count = 0;
                return;
            };

            key = e.keyCode;

            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key == 38){
                    started = true;
                }
            }

            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){

                if (konamikeys[count] == key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count == 10){
                    // Success!
                    alert('Konami code entered! Do something cool here.');
                    reset();
                }
            } else {
                reset();
            }
        });
    }
}

global.konami();