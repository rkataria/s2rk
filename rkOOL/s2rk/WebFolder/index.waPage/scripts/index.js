
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var topLogo = {};	// @image
	var photoCanvas = {};	// @canvas
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	topLogo.click = function topLogo_click (event)// @startlock
	{// @endlock
		//add link to website here
	
	};// @lock

	photoCanvas.click = function photoCanvas_click (event)// @startlock
	{// @endlock
		$('#tabView').show();
		$('#clickusText').hide();
		$('#welcomeText').show();
		this.hide();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//load karne ke baad kya hona chaiye
		$$('calendar').setValue('14/02,13', true);	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("topLogo", "click", topLogo.click, "WAF");
	WAF.addListener("photoCanvas", "click", photoCanvas.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
