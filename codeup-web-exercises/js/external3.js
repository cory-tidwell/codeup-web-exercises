
var classFull = prompt('is the class full? (true/false)'):
var scheduleConflict = prompt('does it conflict with your schedule? (true/false)')



if (classFull == false && scheduleConflict == false) {
    alert('You can enroll!');
} else {
    alert('You cannot enroll at this time!');
}