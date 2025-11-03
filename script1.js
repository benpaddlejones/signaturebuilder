setInterval(updateHtml, 500);

function updateHtml () {
	document.getElementById("footername").innerHTML = document.getElementById("entername").value;
	document.getElementById("footerposition").innerHTML = document.getElementById("enterposition").value;
	document.getElementById("footerschool").innerHTML = document.getElementById("enterschool").value;
	var y = document.getElementsByClassName("textcolor");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].style.color = document.getElementById("entercolour").value;
	};
	document.getElementById("borderbox").style.borderLeft = "solid 2px " + document.getElementById("entercolour").value;
	var y = document.getElementsByClassName("alttextcolor");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].style.color = document.getElementById("enteraltcolour").value;
	};
if (document.getElementById("enterwebsite").value == "") {
	document.getElementById("displaylogo").style.display = "none";
	document.getElementById("displaylogo").innerHTML = "";	
	}else{
	document.getElementById("displaylogo").innerHTML = "<a id='footerlogolink' href='' target='blank' style='border:0px'><img id='footerlogo' src='' style='max-width:13em;width: 100%; height: auto;border:0px;vertical-align: middle;' alt=''></a>";
	document.getElementById("footerlogolink").href = document.getElementById("enterwebsite").value;	
	document.getElementById("displaylogo").style.display = "default";
	};
	if (document.getElementById("entermobile").value == "") {
	document.getElementById("displaymobile").style.display = "none";		
	document.getElementById("displaymobile").innerHTML = "";
	}else{
	document.getElementById("displaymobile").innerHTML = "<strong class='textcolor' style='color: #ac0000;'>m:</strong> <span id='footermobile'></span>";
	document.getElementById("footermobile").innerHTML = document.getElementById("entermobile").value;
	document.getElementById("displaymobile").style.display = "block";
	};
	if (document.getElementById("enterwebsite").value == "") {
	document.getElementById("displaywebsite").style.display = "none";		
	document.getElementById("displaywebsite").innerHTML = "";
	}else{
	document.getElementById("displaywebsite").innerHTML = "<strong class='textcolor' style='color: #ac0000;'>w:</strong> <span id='footerwebsite'></span>";
	document.getElementById("footerwebsite").innerHTML = document.getElementById("enterwebsite").value;
	document.getElementById("displaywebsite").style.display = "block";
	};
	if (document.getElementById("enternumber").value == ""){
	document.getElementById("displaynumber").style.display = "none";
	document.getElementById("displaynumber").innerHTML = "";
	}else{
	document.getElementById("displaynumber").innerHTML = "<strong class='textcolor' style='color: #ac0000;'>p:</strong> <span id='footernumber'></span>";
	document.getElementById("footernumber").innerHTML = document.getElementById("enternumber").value;
	document.getElementById("displaynumber").style.display = "block";
	};
	if (document.getElementById("enteremail").value == "") {
	document.getElementById("displayemail").style.display = "none";
	document.getElementById("displayemail").innerHTML = "";
	}else{
	document.getElementById("displayemail").innerHTML = "<strong class='textcolor' style='color: #ac0000;'>e:</strong> <span id='footeremail'></span>";
	document.getElementById("footeremail").innerHTML = document.getElementById("enteremail").value;
	document.getElementById("displayemail").style.display = "block";
	};
	document.getElementById("footeremail").innerHTML = document.getElementById("enteremail").value;
	document.getElementById("footerlogo").src = document.getElementById("enterlogo").value;
	document.getElementById("footerlogo").alt = document.getElementById("enterschool").value + " logo";	
	if (document.getElementById("enterfacebook").value == "") {
	document.getElementById("footerfacebook").style.display = "none";
	}else{
	document.getElementById("footerfacebook").href = document.getElementById("enterfacebook").value;
	document.getElementById("footerfacebook").style.display = "inline-block";
	};
	if (document.getElementById("entertwitter").value == "") {
	document.getElementById("footertwitter").style.display = "none";
	}else{
	document.getElementById("footertwitter").href = document.getElementById("entertwitter").value;
	document.getElementById("footertwitter").style.display = "inline-block";
	};
	if (document.getElementById("enterinstagram").value == "") {
	document.getElementById("footerinstagram").style.display = "none";
	}else{
	document.getElementById("footerinstagram").href = document.getElementById("enterinstagram").value;
	document.getElementById("footerinstagram").style.display = "inline-block";
	};
};

var clipboard = new ClipboardJS('.btn');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
	e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

if ((screen.width < 600) || (screen.height < 500)) {
    alert ("this site and the inclosed instructions only work on a Desktop Computer");
};

function copyHtml(){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', document.getElementById("displayfooter").innerHTML);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
};

function advancedSettings() {
	if (document.getElementById("advsettingsbutton").value == "Show School Settings") {
		document.getElementById("advsettingsbutton").value = "Hide School Settings";
		document.getElementById("advancedform").style.display = "block";
	} else {
		document.getElementById("advsettingsbutton").value = "Show School Settings";
		document.getElementById("advancedform").style.display = "none";
	};
};

function hidelegalinfo() {
	document.getElementById("legalinfo").style.display = "none";
};