$(function () {
	//Remove the dummy row if data present.
	if ($("#tblRows tr").length > 2) {
		$("#tblRows tr:eq(1)").remove();
	} else {
		var row = $("#tblRows tr:last-child");
		row.find(".Edit").hide();
		row.find(".Delete").hide();
		row.find("div").html('&nbsp;');
	}
});

function AppendRow(row, accommodation, period01, period02, period03, period04, period05, period06, period07, period08, period09, period10) {
	//Bindg Accommodation.
	$(".fix", row).find("div").html(accommodation);
	$(".fix", row).find("input").val(accommodation);

	//Bindg Periods.
	$(".period01", row).find("div").html(period01);
	$(".period01", row).find("input").val(period01);

	$(".period02", row).find("div").html(period02);
	$(".period02", row).find("input").val(period02);

	$(".period03", row).find("div").html(period03);
	$(".period03", row).find("input").val(period03);

	$(".period04", row).find("div").html(period04);
	$(".period04", row).find("input").val(period04);

	$(".period05", row).find("div").html(period05);
	$(".period05", row).find("input").val(period05);

	$(".period06", row).find("div").html(period06);
	$(".period06", row).find("input").val(period06);

	$(".period07", row).find("div").html(period07);
	$(".period07", row).find("input").val(period07);

	$(".period08", row).find("div").html(period08);
	$(".period08", row).find("input").val(period08);

	$(".period09", row).find("div").html(period09);
	$(".period09", row).find("input").val(period09);

	$(".period10", row).find("div").html(period10);
	$(".period10", row).find("input").val(period10);

	row.find(".Edit").show();
	row.find(".Delete").show();
	$("#tblRows").append(row);
};

//Add event handler --------------------------------------------------------------------.
$("body").on("click", "#btnAdd", function () {
	var accommodation = $("#accommodation");
	var txt01 = $("#period01");
	var txt02 = $("#period02");
	var txt03 = $("#period03");
	var txt04 = $("#period04");
	var txt05 = $("#period05");
	var txt06 = $("#period06");
	var txt07 = $("#period07");
	var txt08 = $("#period08");
	var txt09 = $("#period09");
	var txt10 = $("#period10");
	$.ajax({
		type: "POST",
		url: "/Holidays/InsertRow",
		data: '{accommodation: "' + accommodation.val() +
			'", period01: "' + txt01.val() +
			'", period02: "' + txt02.val() +
			'", period03: "' + txt03.val() +
			'", period04: "' + txt04.val() +
			'", period05: "' + txt05.val() +
			'", period06: "' + txt06.val() +
			'", period07: "' + txt07.val() +
			'", period08: "' + txt08.val() +
			'", period09: "' + txt09.val() +
			'", period10: "' + txt10.val() +
			'" }',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (r) {
			var row = $("#tblRows tr:last-child");
			if ($("#tblRows tr:last-child div").eq(0).html() != "&nbsp;") {
				row = row.clone();
			}
			AppendRow(row, r.fix, r.period01, r.period02, r.period03, r.period04, r.period05, r.period06, r.period07, r.period08, r.period09, r.period10);
			accommodation.val("");
			txt01.val("");
			txt02.val("");
			txt03.val("");
			txt04.val("");
			txt05.val("");
			txt06.val("");
			txt07.val("");
			txt08.val("");
			txt09.val("");
			txt10.val("");
		}
	});
});

//Edit event handler.
$("body").on("click", "#tblRows .Edit", function () {
	var row = $(this).closest("tr");
	$("td", row).each(function () {
		if ($(this).find("input").length > 0) {
			$(this).find("input").show();
			$(this).find("div").hide();
		}
	});
	row.find(".Update").show();
	row.find(".Cancel").show();
	row.find(".Delete").hide();
	$(this).hide();
});

//Update event handler.
$("body").on("click", "#tblRows .Update", function () {
	var row = $(this).closest("tr");
	$("td", row).each(function () {
		if ($(this).find("input").length > 0) {
			var div = $(this).find("div");
			var input = $(this).find("input");
			div.html(input.val());
			div.show();
			input.hide();
		}
	});
	row.find(".Edit").show();
	row.find(".Delete").show();
	row.find(".Cancel").hide();
	$(this).hide();

	var customer = {};
	customer.CustomerId = row.find(".CustomerId").find("div").html();
	customer.Name = row.find(".Name").find("div").html();
	customer.Country = row.find(".Country").find("div").html();
	$.ajax({
		type: "POST",
		url: "/Home/UpdateCustomer",
		data: '{customer:' + JSON.stringify(customer) + '}',
		contentType: "application/json; charset=utf-8",
		dataType: "json"
	});
});

//Cancel event handler.
$("body").on("click", "#tblRows .Cancel", function () {
	var row = $(this).closest("tr");
	$("td", row).each(function () {
		if ($(this).find("input").length > 0) {
			var div = $(this).find("div");
			var input = $(this).find("input");
			input.val(div.html());
			div.show();
			input.hide();
		}
	});
	row.find(".Edit").show();
	row.find(".Delete").show();
	row.find(".Update").hide();
	$(this).hide();
});

//Delete event handler.
$("body").on("click", "#tblRows .Delete", function () {
	if (confirm("Do you want to delete this row?")) {
		var row = $(this).closest("tr");
		var customerId = row.find("div").html();
		$.ajax({
			type: "POST",
			url: "/Home/DeleteCustomer",
			data: '{customerId: ' + customerId + '}',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (response) {
				if ($("#tblRows tr").length > 2) {
					row.remove();
				} else {
					row.find(".Edit").hide();
					row.find(".Delete").hide();
					row.find("div").html('&nbsp;');
				}
			}
		});
	}
});