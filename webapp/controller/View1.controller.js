sap.ui.define([
    "sap/btp/project1/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sap.btp.project1.controller.View1", {

            onNavToDetail : function () {
               // Vai alla vista di dettaglio usando il router
            this.getOwnerComponent().getRouter().navTo("detail");
            }

        });
    });
