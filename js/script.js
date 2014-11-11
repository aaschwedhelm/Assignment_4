var map = L.map('map').setView([41.3887900, 2.1589900], 14);

L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

}).addTo(map);

//define icons
var parksIcon = L.icon({
    iconUrl: 'img/forest2.png',
    //shadowUrl: 'img/shadow.png',
    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});
var aptIcon = L.icon({
    iconUrl: 'img/apartment.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});
var churchIcon = L.icon({
    iconUrl: 'img/cathedral.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});
var beachIcon = L.icon({
    iconUrl: 'img/palmtree.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

//Markers for Landmarks

//Landmark 1
var anasHouseMarker = L.marker([41.37387, 2.14488], {icon: aptIcon}).addTo(map);
anasHouseMarker.bindPopup("Ana & Elias's Apartment");

//Landmark 2
var GaudiParkMarker = L.marker([41.41343, 2.15318], {icon: parksIcon}).addTo(map);
GaudiParkMarker.bindPopup("Gaudi Park");

//Landmark 3
var MontjuicParkMarker = L.marker([41.36492, 2.15740], {icon: parksIcon}).addTo(map);
MontjuicParkMarker.bindPopup("Monjuic Park");

//Landmark 4
var PlayaMarker = L.marker([41.37819, 2.19262], {icon: beachIcon}).addTo(map);
PlayaMarker.bindPopup("Barceloneta Beach");

//Landmark 5
var GaudiMarker = L.marker([41.40396, 2.17515], {icon: churchIcon}).addTo(map);
GaudiMarker.bindPopup("La Sagrada Familia");

//Landmark 6
var CathedralMarker = L.marker([41.38460, 2.17599], {icon: churchIcon}).addTo(map);
CathedralMarker.bindPopup("Barcelona Cathedral");


//Listeners for Sidebar clicks
$('.landmark').on('click',function(){
	$(this).css('color','green');
});

$('.reset').on('click',function(){
	$('.landmark').css('color','black');
	$('.Pic1').css('background','grey');
	$('.Pic2').css('background','grey');
	$('.Pic3').css('background','grey');
	$('.Pic4').css('background','grey');
	$('.Pic5').css('background','grey');
	$('.Pic6').css('background','grey');
});	


//Liestener 1
$('.anasHouse').on('click',function(){
  map.panTo(new L.LatLng(41.37387, 2.14488),{animate: true, duration: 1.0});
});
$('.anasHouse').on('click',function(){
	$('.Pic1').css('background','url(https://www.bbvavivienda.com/images/alquiler/000800-01/000800-01.jpg)').css('background-size', 'cover');
});
//Listener 2
$('.GaudiPark').on('click',function(){
  map.panTo(new L.LatLng(41.41343, 2.15318),{animate: true, duration: 1.0});
});
$('.GaudiPark').on('click',function(){
$('.Pic2').css('background','url(http://www.stare.ca/images/barcelona_sunset.jpg)').css('background-size', 'cover');
});
//listener 3
$('.MontjuicPark').on('click',function(){
  map.panTo(new L.LatLng(41.36492, 2.15740),{animate: true, duration: 1.0});
});
$('.MontjuicPark').on('click',function(){
$('.Pic3').css('background','url(http://azu1.facilisimo.com/ima/i/5/4/bd/412_79225_2364932_667998.jpg)').css('background-size', 'cover');
});
//listener 4
$('.Playa').on('click',function(){
  map.panTo(new L.LatLng(41.37819, 2.19262),{animate: true, duration: 1.0});
});
$('.Playa').on('click',function(){
$('.Pic4').css('background','url(http://4.bp.blogspot.com/-Ql9hN5YxhAQ/TiVLRVmnzhI/AAAAAAAAAF8/ZyN0Jx3l0qw/s1600/barcelonetta.jpg)').css('background-size', 'cover');
});
//listener 5
$('.Gaudi').on('click',function(){
  map.panTo(new L.LatLng(41.40396, 2.17515),{animate: true, duration: 1.0});
});
$('.Gaudi').on('click',function(){
$('.Pic5').css('background','url(data:image/jpeg;base64,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)').css('background-size', 'cover');
});
//listener 6
$('.Cathedral').on('click',function(){
  map.panTo(new L.LatLng(41.38460, 2.17599),{animate: true, duration: 1.0});
});
$('.Cathedral').on('click',function(){
$('.Pic6').css('background','url(http://www.apartmentsbebarcelona.com/blog/wp-content/uploads/2014/01/catedral-de-barcelona.jpg)').css('background-size', 'cover');
});	