/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/masterstipendium/SAPUI5VergabeMasterstipendiumFrontEnd/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});