function addSkillCircleChart() {	
	// Xóa nút thêm donut
	$('.btn-donut-chart').remove();
	let btnAddProSkill =
	'<div class="skill-donut-chart btn-donut-chart">\
					<div class="flex-row">\
						<div class="btn add-pro-skill" onclick="\addSkillCircleChart()">\
							<span>Add skill</span>\
							<i class="fa fa-plus"></i>\
						</div>\
					</div>\
				</div>';

	//Thêm chart
	let charts = document.getElementsByClassName("pro-skill-item")[0];
	charts.innerHTML += '<div class="skill-donut-chart">\
					<svg class="donut">\
						<circle class="donut-ring donut-chart"></circle>\
						<circle class="donut-segment donut-chart"\ stroke-dashoffset="104.45795573184999"></circle>\
						<text x="50%" y="50%">65%</text>\
					</svg>\
					<p class="skill-name">react native</p>\
				</div>' + btnAddProSkill;

}

function addSkillLineChart() {
	let charts = document.getElementsByClassName("per-skill-item")[0];
	charts.innerHTML += '<div class="edit-item-left">\
					<div class="item-left">\
						<div class="pt-x" style="width: 50%"><p>50%</p></div>\
					</div>\
					<div class="item-object"><p>JAPANESE</p></div>\
				</div>';
}

function addEventWorkChart() {
	let charts = document.getElementsByClassName("work-info-item")[0];
	charts.innerHTML += '<div class="info-box" style="border-left: 1px solid #fff">\
					<div class="arrow-up"></div>\
					<div class="border-bt"></div>\
					<div class="info-box-item">\
						<div class="nam"><b><u>(2010 - 2019)</u> ABC COMPANY</b></div>\
						<div class="job"> Developer</div>\
						<div class="job-content">\
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt </p>\
						</div>\
					</div>\
				</div>';
}

function addEventEduChart() {
	let charts = document.getElementsByClassName("info-item")[0];
	charts.innerHTML += '<div class="info-box" style="border-left: 1px solid #fff">\
						<!--tao duong cheo tren the div-->\
					<div class="arrow-up"></div>\
					<div class="border-bt">\
					</div>\
					<div class="info-box-item">\
						<div class="nam"><b><u>(2010 - 2019)</u> ABC COMPANY</b></div>\
						<div class="job"> Developer</div>\
						<div class="job-content">\
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt </p>\
						</div>\
					</div>\
				</div>';
}

function addProjectChart() {

	let charts = document.getElementsByClassName('list-object')[0];
	let numTypeChart = 9;
	let horOrVerClass;
	let numExistedChart = charts.childElementCount;
	let typeNewChart = numExistedChart % numTypeChart;

	//set rec-vertical or rec-horizon
	if (typeNewChart == 2 || typeNewChart == 6) {
		horOrVerClass = 'item-b';
	}
	else {
		horOrVerClass = 'item-a';
	}
	// xóa rec-btn
	document.getElementsByClassName('rec-btn')[0].remove();

	charts.innerHTML += '<div class="flex-row' + ' color' + typeNewChart + ' ' + horOrVerClass + '">\
							<img src="img/5.png">\
						</div> \
						<div class="flex-row item-a  rec-btn"> \
								<div class="btn btn-project" onclick="addProjectChart()"> \
									<span>Add project</span> \
									<i class="fa fa-plus"></i> \
								</div> \
						</div>';
}


$(document).on('ready', function() {

	//slick references
	$(".slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000
	});

	//slick add slide
	$('.add-refer').on('click', function() {
		let newRef = '<div>\
						<div class="row myslider column-x">\
							<div class="small-photo"></div>\
							<div class="quote">\
								<div class="quote-1-1 inner-content position-relative">\
									<span class="quote-1 position-absolute text-start">“</span>\
									<span class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\
									</span>\
									<span class="quote-2 text-end position-absolute">”</span>\
								</div>\
							</div>\
						</div>\
					</div>';
		$('.slider').slick('slickAdd', newRef);
	});
});