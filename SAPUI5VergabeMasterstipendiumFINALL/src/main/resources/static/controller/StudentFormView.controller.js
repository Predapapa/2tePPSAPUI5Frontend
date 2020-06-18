sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.masterstipendium.SAPUI5VergabeMasterstipendiumFrontEnd.controller.StudentFormView", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("studentFormView").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent){
			var sIuser = oEvent.getParameter("arguments").iuser;
			this._loadModel(sIuser);
			
		},
		
		_loadModel: function(sIuser){
			
			if(sIuser){
				var oStudentModel = new JSONModel();
				oStudentModel.loadData("/api/v1/get/"+sIuser);
				this.getView().setModel(oStudentModel);
			}
			else{
				console.log("hey");
			}
			
			
		}
});
	
});