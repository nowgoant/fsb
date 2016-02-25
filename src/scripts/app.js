import fastclick from 'fastclick';
import $ from 'webpack_zepto';
import './asyncModules';
import exclaimify from './exclaimify';

fastclick.attach(document.body);



// const button = document.getElementById('button')
//
// const alertAsyncMessage = function() {
//   // CommonJS async syntax webpack magic
//   require.ensure([], function() {
//     const message = require("./asyncMessage")
//     alert(exclaimify(message))
//   })
// }
//
// console.log(`
//   asset references like this one:
//     images/gulp.png
//   get updated in js too!`)
//
// button.addEventListener('click', alertAsyncMessage)

$('#button').on('click',function(){
   alert('hihi'); 
});