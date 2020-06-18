sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.AusbildungsabteilungView", {
		onInit: function () {

		},
		
		press: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("wistudentanlegenView", true);
		},
		
		onNavBack: function () {
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("start", true);
			
		}
	});
});