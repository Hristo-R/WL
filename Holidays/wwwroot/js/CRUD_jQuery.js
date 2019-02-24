$(function () {
	//Remove the dummy row if data present.
	if ($("#tblRows tr").length > 2) {
		$("#tblRows tr:eq(1)").remove();
	} else {
		var row = $("#tblRows tr:last-child");
		row.find(".Edit").hide();
		row.find(".Delete").hide();
		row.find("span").html('&nbsp;');
	}
});

function AppendRow(row, customerId, name, country) {
	//Bindg Periods.
	$(".period01", row).find("span").html(name);
	$(".period01", row).find("input").val(name);

	$(".period02", row).find("span").html(name);
	$(".period02", row).find("input").val(name);

	$(".period03", row).find("span").html(name);
	$(".period03", row).find("input").val(name);

	$(".period04", row).find("span").html(name);
	$(".period04", row).find("input").val(name);

	$(".period05", row).find("span").html(name);
	$(".period05", row).find("input").val(name);

	$(".period06", row).find("span").html(name);
	$(".period06", row).find("input").val(name);

	$(".period07", row).find("span").html(name);
	$(".period07", row).find("input").val(name);

	$(".period08", row).find("span").html(name);
	$(".period08", row).find("input").val(name);

	$(".period09", row).find("span").html(name);
	$(".period09", row).find("input").val(name);

	$(".period10", row).find("span").html(name);
	$(".period10", row).find("input").val(name);

	row.find(".Edit").show();
	row.find(".Delete").show();
	$("#tblRows").append(row);
};

//Add event handler --------------------------------------------------------------------.
$("body").on("click", "#btnAdd", function () {
	var txtName = $("#txtName");
	var txtCountry = $("#txtCountry");
	$.ajax({
		type: "POST",
		url: "/Home/InsertCustomer",
		data: '{name: "' + txtName.val() + '", country: "' + txtCountry.val() + '" }',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (r) {
			var row = $("#tblRows tr:last-child");
			if ($("#tblRows tr:last-child span").eq(0).html() != "&nbsp;") {
				row = row.clone();
			}
			AppendRow(row, r.CustomerId, r.Name, r.Country);
			txtName.val("");
			txtCountry.val("");
		}
	});
});

//Edit event handler.
$("body").on("click", "#tblRows .Edit", function () {
	var row = $(this).closest("tr");
	$("td", row).each(function () {
		if ($(this).find("input").length > 0) {
			$(this).find("input").show();
			$(this).find("span").hide();
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
			var span = $(this).find("span");
			var input = $(this).find("input");
			span.html(input.val());
			span.show();
			input.hide();
		}
	});
	row.find(".Edit").show();
	row.find(".Delete").show();
	row.find(".Cancel").hide();
	$(this).hide();

	var customer = {};
	customer.CustomerId = row.find(".CustomerId").find("span").html();
	customer.Name = row.find(".Name").find("span").html();
	customer.Country = row.find(".Country").find("span").html();
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
			var span = $(this).find("span");
			var input = $(this).find("input");
			input.val(span.html());
			span.show();
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
		var customerId = row.find("span").html();
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
					row.find("span").html('&nbsp;');
				}
			}
		});
	}
});