// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//
// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });
//
"use strict";

function wait(time) {
    return new Promise((resolve, reject) => {
        if (!isNaN(time)) {
            setTimeout(() => {
                resolve();
            }, time)
        } else {
            reject('Did not work');
        }
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function getLastCommitDate(user) {
    const myPromise = fetch(`https://api.github.com/users/${user}/events/public`, {headers: {'Authorization': `token ${accessToken}`}});
    myPromise.then(response => {
        response.json().then(event => {
            let box = [];
            event.forEach(function(what){
                if (what.type === 'PushEvent'){
                    box.push(what);
                }
            });
            console.log(`Last Commit Was: ${box[0].created_at}`);
        })
    });
}

getLastCommitDate('cory-tidwell');