var memPremium = prompt('Are you a premium member? (yes/no)');
var expiredOffer = prompt('Is the offer expired? (yes/no)');

if (memPremium == 'yes' && expiredOffer == 'no') {
    alert('There are no item limitations for you!');
} else if (memPremium == 'no' && expiredOffer == 'no') {
    alert('You must purchase 2 or more items!');
} else {
    alert('The offer is expired!');
}