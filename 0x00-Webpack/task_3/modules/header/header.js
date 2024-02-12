import $ from 'jquery'
import './header.css'
// Import the image and receive its resolved path as holbertonLogo
import holbertonLogo from '../../assets/holberton-logo.jpg'

// Use the imported image path as the src attribute of an img element
$('body').append(`<div id="logo"><img src="${holbertonLogo}" alt="Holberton Logo"></div>`)
$('body').append("<h1>Holberton Dashboard</h1>")

console.log('Init header')
