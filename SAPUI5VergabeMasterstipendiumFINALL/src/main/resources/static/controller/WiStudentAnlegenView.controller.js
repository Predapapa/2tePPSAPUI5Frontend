sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.WiStudentAnlegenView", {
		onInit: function () {

		},
		
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("ausbildungsabteilungView", true);
			}
		},
		
		onSave: function() {

			
			var request = $.ajax({
				url: "api/v1/create",
				method: "POST",
				data: JSON.stringify(this.getView().getModel("applicationStudentModel").getData()),    
				dataType: "json",
				contentType: "application/json"
				});
			
			
				 
				request.done(function( msg ) {
					MessageToast.show("WI-Studierende angelegt");
				});
				
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("ausbildungsAbteilungView");
				 
				request.fail(function( jqXHR, textStatus ) {
				  alert( "Request failed: " + textStatus );
				});
			
			
			
		}
	});
});