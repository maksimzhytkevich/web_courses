sap.ui.require([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.db",
		settings : {
			id : "db"
		}
	}).placeAt("content");	
});
