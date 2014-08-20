
var current_URL = "a";
var parts = [];

//get URL and cid
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	current_URL = (tabs[0].url);
	//parts = current_URL.split('?');
 });

//open a new tab given a url
function add_parameters(network) {
	var new_url = current_URL + "?sr_source=lift_" + network;
	chrome.tabs.update({url:new_url});
}

//facebook
$('#fb').click(function fb_qp(){
	add_parameters("facebook", current_URL);
 });

//stumbleupon
$('#su').click(function su_qp(){
	add_parameters("stumbleupon", current_URL);
 });

//twitter
$('#tw').click(function tw_qp(){
	add_parameters("twitter", current_URL);
 });

//outbrain
$('#ob').click(function ob_qp(){
	add_parameters("outbrain", current_URL);
 });

//taboola
$('#ta').click(function ta_qp(){
	add_parameters("taboola", current_URL);
 });
