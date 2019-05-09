/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-3

    Author: Danielle Lamb
    Date:   May 1, 2019

    Filename: script.js
*/

"use strict";

var  waitForUser;

function geoTest() {
	
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation == true) {
		getCurrentPosition();
		if (getcurrentPosition == true) {
			createMap();
		} else if (getcurrentPosition == false) {
			fail();
		}
	} else if (navigator.geolocation == false {
			fail();
	}
}

function createMap(position) {
	
	clearTimeout(waitForUser);
	var Lat = position.coords.latitude;
	var Lng = position.coords.longitude;
	var mapOptions = { 
	center: new google.maps.LatLng(Lat, Lng), zoom: 10
	};
	
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
}
	
function fail() {
	document.innerHTML.getElementById("map") = "Unable to access your current location.";
}
	