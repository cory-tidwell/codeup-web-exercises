var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(readingStatus => {
    for (let key in readingStatus) {
        console.log(`${key}: ${readingStatus[key]}`);
    }
})

















//console.log(library.length);
// var book1 = library[0].readingStatus;
// var book2 = library[1].readingStatus;
// var book3 = library[2].readingStatus;
//var status = [];
// function readStatus(book){
//     //return book;
//
//    for (i = 0; i < book.length; i++) {
//        console.log(i.readingStatus);
//        //console.log(status);
// //        // if (typeof i.readingStatus === 'boolean'){
// //        //      var result = i.readingStatus;
// //        //      return result;
// //        //   }
// //        //  return result;
// //        // console.log(library[i].readingStatus);
// //        //  status += library[i].readingStatus;
// //        //  return status;
// //
//  }
// }
// readStatus(library);