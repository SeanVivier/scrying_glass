$(document).ready(function() {
	//function for 100% possibilities
	$("span").click(function() {
		var identifier = this.previousSibling.id;
		$("#" + identifier).siblings("input").attr("value", 0);
		$("#" + identifier).attr("value", 100);
	});
	//function for no possibility
	$("h3").click(function() {
		if ($(this).text() === "Culture" || $(this).text() === "Disability") {
			$(this).siblings("input").attr("value", 0);
		}
	});
	//function to choose a number between 1 and 100 to be used with percentage probability.
	function prob() {
		return Math.ceil(Math.random()*100)
	}
	//logic to let users change location or demographics within that location.
	function changeSexes(num1, num2) {
		$("#man").val(num1);
		$("#woman").val(num2);
	}
	function changeRaces(num1, num2, num3, num4, num5, num6, num7) {
		$("#white").val(num1);
		$("#black").val(num2);
		$("#asian").val(num3);
		$("#native").val(num4);
		$("#multi").val(num5);
		$("#arab").val(num6);
		$("#islander").val(num7);
	}
	function changeCulture(n) {
		$("#hispanic").val(n);
	}
	function changeReligions(num1, num2, num3, num4, num5, num6, num7, num8) {
		$("#christian").val(num1);
		$("#atheist").val(num2);
		$("#jewish").val(num3);
		$("#muslim").val(num4);
		$("#buddhist").val(num5);
		$("#hindu").val(num6);
		$("#unitarian").val(num7);
		$("#other").val(num8);
	}
	function changeSES(num1, num2, num3, num4, num5, num6) {
		$("#rich").val(num1);
		$("#upperMiddle").val(num2);
		$("#lowerMiddle").val(num3);
		$("#working").val(num4);
		$("#workingPoor").val(num5);
		$("#impoverished").val(num6);
	}
	function changeSexuality(num1, num2) {
		$("#straight").val(num1);
		$("#gay").val(num2);
	}
	function changeGenderId(num1, num2) {
		$("#trans").val(num1);
		$("#cis").val(num2);
	}
	function changeDisabilities(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11) {
		$("#visual").val(num1);
		$("#hearing").val(num2);
		$("#ambulatory").val(num3);
		$("#cognitive").val(num4);
		$("#care").val(num5);
		$("#independence").val(num6);
		$("#autism").val(num7);
		$("#depression").val(num8);
		$("#bipolar").val(num9);
		$("#schizo").val(num10);
		$("#eating").val(num11);
	}
	function matchStats(arg) {
		changeSexes(arg["male"], arg["female"]);
		changeRaces(arg["white"], arg["black"], arg["Asian"], arg["Native American"], arg["multiracial"], arg["Middle Eastern"], arg["Pacific Islander"]);
		changeCulture(arg["Hispanic"]);
		changeReligions(arg["Christian"], arg["irreligious"], arg["Jewish"], arg["Muslim"], arg["Buddhist"], arg["Hindu"], arg["Unitarian"], arg["other"]);
		changeSES(arg["rich"], arg["upper middle"], arg["lower middle"], arg["working class"], arg["working poor"], arg["poor"]);
		changeSexuality(arg["straight"], arg["gay"]);
		changeGenderId(arg["trans"], arg["cis"]);
		changeDisabilities(arg["visual"], arg["hearing"], arg["ambulatory"], arg["cognitive"], arg["self-care"], arg["independent living"], arg["autism"], arg["depression"], arg["bipolar"], arg["schizophrenia"], arg["eating disorder"]);
	}
			
	//arrays of key-value pairs to keep track of demographics.
	var presentUS = {
		"male": 50,
		"female": 50,
		"white": 72,
		"black": 13,
		"Asian": 5,
		"Native American": 1,
		"multiracial": 3,
		"Middle Eastern": 5,
		"Pacific Islander": 1,
		"Hispanic": 16,
		"Christian": 73,
		"irreligious": 20,
		"Jewish": 2,
		"Muslim": 1,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 1,
		"other": 1,
		"rich": 1,
		"upper middle": 14,
		"lower middle": 30,
		"working class": 30,
		"working poor": 13,
		"poor": 12,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var futureUS = {
		"male": 50,
		"female": 50,
		"white": 47,
		"black": 13,
		"Asian": 8,
		"Native American": 1,
		"multiracial": 25,
		"Middle Eastern": 5,
		"Pacific Islander": 1,
		"Hispanic": 29,
		"Christian": 73,
		"irreligious": 20,
		"Jewish": 2,
		"Muslim": 1,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 1,
		"other": 1,
		"rich": 1,
		"upper middle": 14,
		"lower middle": 30,
		"working class": 30,
		"working poor": 13,
		"poor": 12,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var chicago = {
		"male": 50,
		"female": 50,
		"white": 45,
		"black": 33,
		"Asian": 6,
		"Native American": 1,
		"multiracial": 3,
		"Middle Eastern": 12,
		"Pacific Islander": 0,
		"Hispanic": 29,
		"Christian": 54,
		"irreligious": 38,
		"Jewish": 1,
		"Muslim": 4,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 0,
		"other": 1,
		"rich": 1,
		"upper middle": 26,
		"lower middle": 34,
		"working class": 11,
		"working poor": 11,
		"poor": 17,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var world = {
		"male": 50,
		"female": 50,
		"white": 16,
		"black": 15,
		"Asian": 55,
		"Native American": 1,
		"multiracial": 4,
		"Middle Eastern": 8,
		"Pacific Islander": 1,
		"Hispanic": 8,
		"Christian": 33,
		"irreligious": 12,
		"Jewish": 1,
		"Muslim": 23,
		"Buddhist": 7,
		"Hindu": 14,
		"Unitarian": 0,
		"other": 10,
		"rich": 2,
		"upper middle": 14,
		"lower middle": 14,
		"working class": 0,
		"working poor": 50,
		"poor": 20,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var nyc = {
		"male": 50,
		"female": 50,
		"white": 44,
		"black": 26,
		"Asian": 13,
		"Native American": 1,
		"multiracial": 2,
		"Middle Eastern": 13,
		"Pacific Islander": 1,
		"Hispanic": 29,
		"Christian": 54,
		"irreligious": 36,
		"Jewish": 4,
		"Muslim": 2,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 1,
		"other": 1,
		"rich": 2,
		"upper middle": 14,
		"lower middle": 14,
		"working class": 0,
		"working poor": 50,
		"poor": 20,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var la = {
		"male": 50,
		"female": 50,
		"white": 50,
		"black": 10,
		"Asian": 11,
		"Native American": 1,
		"multiracial": 5,
		"Middle Eastern": 22,
		"Pacific Islander": 1,
		"Hispanic": 49,
		"Christian": 43,
		"irreligious": 51,
		"Jewish": 1,
		"Muslim": 1,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 1,
		"other": 1,
		"rich": 4,
		"upper middle": 19,
		"lower middle": 30,
		"working class": 13,
		"working poor": 14,
		"poor": 20,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var england = {
		"male": 50,
		"female": 50,
		"white": 88,
		"black": 3,
		"Asian": 7,
		"Native American": 0,
		"multiracial": 1,
		"Middle Eastern": 1,
		"Pacific Islander": 0,
		"Hispanic": 0,
		"Christian": 59,
		"irreligious": 31,
		"Jewish": 1,
		"Muslim": 5,
		"Buddhist": 1,
		"Hindu": 2,
		"Unitarian": 0,
		"other": 1,
		"rich": 1,
		"upper middle": 4,
		"lower middle": 33,
		"working class": 28,
		"working poor": 28,
		"poor": 6,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	var connecticut = {
		"male": 50,
		"female": 50,
		"white": 77,
		"black": 10,
		"Asian": 4,
		"Native American": 1,
		"multiracial": 3,
		"Middle Eastern": 5,
		"Pacific Islander": 0,
		"Hispanic": 13,
		"Christian": 69,
		"irreligious": 23,
		"Jewish": 3,
		"Muslim": 1,
		"Buddhist": 1,
		"Hindu": 1,
		"Unitarian": 1,
		"other": 1,
		"rich": 1,
		"upper middle": 14,
		"lower middle": 30,
		"working class": 30,
		"working poor": 13,
		"poor": 12,
		"straight": 90,
		"gay": 10,
		"trans": 1,
		"cis": 99,
		"visual": 2,
		"hearing": 3,
		"ambulatory": 7,
		"cognitive": 5,
		"self-care": 3,
		"independent living": 5,
		"autism": 1,
		"depression": 2,
		"bipolar": 2,
		"schizophrenia": 1,
		"eating disorder": 1
	};
			
	$("select").click(function() {
		var selectOption = $(this).children(":selected").attr("id")
		var mod = eval(selectOption); //eval changes the string to a variable so it can be used as an array name in the function below.
		matchStats(mod);
	});
	$("select").change(function() {
		//have them flash off and on so user knows they changed.
		$("input").css("color", "white").animate({color:"red"}, 500);
	});
	$("button").click(function() {	
		//must add so that acceptable values are between outer range of one and inner range of the other.
		var manCount = parseInt($("#man").val());
		var womanCount = parseInt($("#woman").val()) + manCount;
	
		var whiteCount = parseInt($("#white").val());
		var blackCount = parseInt($("#black").val()) + whiteCount;
		var asianCount = parseInt($("#asian").val()) + blackCount;
		var nativeCount = parseInt($("#native").val()) + asianCount;
		var multiCount = parseInt($("#multi").val()) + nativeCount;
		var arabCount = parseInt($("#arab").val()) + multiCount;
		var islanderCount = parseInt($("#islander").val()) + arabCount;
		
		var hispanicCount = parseInt($("#hispanic").val());
				
		var christianCount = parseInt($("#christian").val());
		var atheistCount = parseInt($("#atheist").val()) + christianCount;
		var jewishCount = parseInt($("#jewish").val()) + atheistCount;
		var muslimCount = parseInt($("#muslim").val()) + jewishCount;
		var buddhistCount = parseInt($("#buddhist").val()) + muslimCount;
		var hinduCount = parseInt($("#hindu").val()) + buddhistCount;
		var unitarianCount = parseInt($("#unitarian").val()) + hinduCount;
		var otherCount = parseInt($("#other").val()) + unitarianCount;
		
		var richCount = parseInt($("#rich").val());
		var upperMiddleCount = parseInt($("#upperMiddle").val()) + richCount;
		var lowerMiddleCount = parseInt($("#lowerMiddle").val()) + upperMiddleCount;
		var workingCount = parseInt($("#working").val()) + lowerMiddleCount;
		var workingPoorCount = parseInt($("#workingPoor").val()) + workingCount;
		var impoverishedCount = parseInt($("#impoverished").val()) + workingPoorCount;
		
		var straightCount = parseInt($("#straight").val());
		var gayCount = parseInt($("#gay").val()) + straightCount;
		
		var transCount = parseInt($("#trans").val());
		var cisCount = parseInt($("#cis").val()) + transCount;
		
		var visualCount = parseInt($("#visual").val());
		var hearingCount = parseInt($("#hearing").val()) + visualCount;
		var ambulatoryCount = parseInt($("#ambulatory").val()) + hearingCount;
		var cognitiveCount = parseInt($("#cognitive").val()) + ambulatoryCount;
		var careCount = parseInt($("#care").val()) + cognitiveCount;
		var independenceCount = parseInt($("#independence").val()) + careCount;
		var autismCount = parseInt($("#autism").val()) + independenceCount;
		var depressionCount = parseInt($("#depression").val()) + autismCount;
		var bipolarCount = parseInt($("#bipolar").val()) + depressionCount;
		var schizoCount = parseInt($("#schizo").val()) + bipolarCount;
		var eatingCount = parseInt($("#eating").val()) + schizoCount;
		
		if (womanCount!==100) {
			alert("Your sex/gender statistics do not add to 100%");
		} else if (islanderCount!==100) {
			alert("Your racial statistics do not add to 100%");
		} else if (hispanicCount>100) {
			alert("It's impossible for the Hispanic population to be more than 100% of the overall population.");
		} else if (otherCount!==100) {
			alert("Your religious statistics do not add to 100%");
		} else if (impoverishedCount!==100) {
			alert("Your socio-economic statistics do not add to 100%");
		} else if (gayCount!==100) {
			alert("Your sexuality statistics do not add to 100%");
		} else if (cisCount!==100) {
			alert("Your gender identity statistics do not add to 100%");
		} else if (eatingCount>100) {
			alert("Your disability statistics should not add to more than 100%");
		} else {
			var color=prob();
			var race;
			var religion=prob();
			var faith;
			var gender=prob();
			var sex;
			var sexuality=prob();
			var scale;
			var trans=prob();
			var transgender;
			var latino=prob();
			var hispanic;
			var ability=prob();
			var disability;
			var socioeconomic=prob();
			var status;

			if (socioeconomic <= richCount) {
				status="a rich";
			} else if (socioeconomic > richCount && socioeconomic <= upperMiddleCount) {
				status="an upper middle class";
			} else if (socioeconomic > upperMiddleCount && socioeconomic <= lowerMiddleCount) {
				status="a lower middle class";
			} else if (socioeconomic > lowerMiddleCount && socioeconomic <= workingCount) {
				status="a working class";
			} else if (socioeconomic > workingCount && socioeconomic <= workingPoorCount) {
				status="a working poor";
			} else {
				status="a poverty-stricken";
			}

			if (latino <= hispanicCount) {
				hispanic="/Hispanic";
			} else {
				hispanic="";
			}

			if (color <= whiteCount) {
				race="a white";
			} else if (color > whiteCount && color <= blackCount) {
				race="a black";
			} else if (color > blackCount && color <= asianCount) {
				race="an Asian";
			} else if (color > asianCount && color <= nativeCount) {
				race="a Native American";
			} else if (color > nativeCount && color <= multiCount) {
				race="a multiracial";
			} else if (color > multiCount && color <= arabCount) {
				race="an Arabic";
			} else {
				race="a Pacific Islander";
			}

			if (religion <= christianCount) {
				faith="Christian";
			} else if (religion > christianCount && religion <= atheistCount) {
				faith="irreligious";
			} else if (religion > atheistCount && religion <= jewishCount) {
				faith="Jewish";
			} else if (religion > jewishCount && religion <= muslimCount) {
				faith="Muslim";
			} else if (religion > muslimCount && religion <= buddhistCount) {
				faith="Buddhist";
			} else if (religion > buddhistCount && religion <= hinduCount) {
				faith="Hindu";
			} else if (religion > hinduCount && religion <= unitarianCount) {
				faith="Unitarian";
			} else {
				var creeds=["Baha'i", "Sikh", "Jain", "Shinto", "Confucian", "Daoist", "Druid", "Wiccan", "Zoroastrian"];
				faith=creeds[Math.round(Math.random()*8)];
			}

			if (gender <= manCount) {
				sex="man";
			} else {
				sex="woman";
			}

			if (sexuality <= straightCount) {
				scale="straight";
			} else {
				scale="gay";
			}

			if (trans <= transCount) {
				transgender="transgendered ";
			} else {
				transgender="";
			}
		if (ability <= visualCount) {
				disability=" with a visual impairment";
			} else if (ability > visualCount && ability <= hearingCount) {
				disability=" with a hearing disability";
			} else if (ability > hearingCount && ability <= ambulatoryCount) {
				disability=" with an ambulatory disability";
			} else if (ability > ambulatoryCount && ability <= cognitiveCount) {
				disability=" with a cognitive disability";
			} else if (ability > cognitiveCount && ability <= careCount) {
				disability=" with a self-care disability";
			} else if (ability > careCount && ability <= independenceCount) {
				disability=" with an independent living disability";
			} else if (ability > independenceCount && ability <= autismCount) {
				disability=" with autism";
			} else if (ability > autismCount && ability <= depressionCount) {
				disability=" with severe depression";
			} else if (ability > depressionCount && ability <= bipolarCount) {
				disability=" with bipolar disorder";
			} else if (ability > bipolarCount && ability <= schizoCount) {
				disability=" with schizophrenia";
			} else if (ability > schizoCount && ability <= eatingCount) {
				disability=" with an eating disorder";
			} else {
				disability="";
			}
	
			//have text area flash to draw user's eye there.
			var x=$("textarea").addClass("ping");
			setTimeout(function() {x.removeClass("ping")}, 200);
			$("textarea").val("Your character is " + race + hispanic + " " + faith + " " + scale + " " + transgender + sex + " from " + status + " upbringing" + disability + ".");
		}
	});
});