sap.ui.define([
	"sap/ui/demo/db/controller/BaseController"
], function (BaseController) {
    "use strict";
	return BaseController.extend("sap.ui.demo.db.controller.PeopleInfo", {
       onInit: function () {
        var oRouter = this.getRouter();
        oRouter.getRoute("peopleInfo").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched : function (oEvent) {
			var oArgs = oEvent.getParameter("arguments").details;
			this.byId("userName").setText(this.getView().getModel("i18n").getResourceBundle().getText("userNameLabelText") +
			": " + this.getView().getModel("people").oData.value[oArgs].UserName + "\n" + 
			this.getView().getModel("i18n").getResourceBundle().getText("firstNameLabelText") +
			": " + this.getView().getModel("people").oData.value[oArgs].FirstName + "\n" +
			this.getView().getModel("i18n").getResourceBundle().getText("lastNameLabelText") +
			": " + this.getView().getModel("people").oData.value[oArgs].LastName + "\n" +
			this.getView().getModel("i18n").getResourceBundle().getText("genderLabelText") +
			": "+ this.getView().getModel("people").oData.value[oArgs].Gender + "\n" +
			this.getView().getModel("i18n").getResourceBundle().getText("emailsLabelText") +
			": "+ this.getView().getModel("people").oData.value[oArgs].Emails);								
		}
	});
});