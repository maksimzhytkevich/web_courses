sap.ui.define([
	"sap/ui/demo/db/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.db.controller.Home", {

		onDisplayNotFound : function () {
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},
		onNavToMoreInfo : function (oEvent){
			var data = this.getOwnerComponent().getModel("people");
			var rawID = oEvent.getSource().getId();
			var ID = (rawID.replace(/[^\d;]/g, ''));
			this.getRouter().navTo("peopleInfo", {details : ID});
		}
	});

});