/**********************
Filename: mystyle.css
Author: Nicolas Chen
Version: 1.0
***********************/

function calculate() {
	var amount = $('#amount').val();
	var percentage = $('#percentage').val();
	var tip = amount * (percentage / 100);
	var total = Number(amount) + tip;

	$('#tip').val(tip.toFixed(2));
	$('#total').val(total.toFixed(2));

	return false;
}

function reset() {
	$('#amount').val("");
	$('#percentage').val("");
	$('#tip').val("");
	$('#total').val("");
}

$("button").click(function() {
  calculate();
});