sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.StartView", {
		onInit: function () {

		},
		
		press : function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ausbildungsabteilungView");
		}
		
		
	});
});