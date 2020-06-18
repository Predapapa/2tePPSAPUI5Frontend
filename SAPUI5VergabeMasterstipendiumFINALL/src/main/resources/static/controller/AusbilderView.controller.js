sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.AusbilderView", {
		onInit: function () {

		},
		
		onNavBack: function () {
			
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("start", true);
			
		},
		
		sPress: function(oEvent){
			
			var oSource = oEvent.getSource(),
			oListItemData=
				oSource.getBindingContext().getObject();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("studentFormView",{
				"iuser":oListItemData.iuser});
			},
		
				
		
		
	});
});