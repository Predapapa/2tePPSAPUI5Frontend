sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.AusbilderView", {
		onInit: function () {

		},
		
		onNavBack: function () {
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("start", true);
			
		}
	});
});