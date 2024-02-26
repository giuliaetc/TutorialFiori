sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },

            setDateForControl: function () {

                var oModel = new JSONModel({
                items: [{
                    FolderNumber: "FN1",
                    WordO: "4443434-4343,43434",
                    Plant: "ITTN",
                    Date: "26/07/2022",
                    Status: "Draft"
                },
                 {
                    FolderNumber: "FN2",
                    WordO: "4443434-4343,43434",
                    Plant: "ITTN",
                    Date: "26/07/2022",
                    Status: "Draft"
                },

                {
                    FolderNumber: "FN3",
                    WordO: "4443434-4343,43434",
                    Plant: "ITTN",
                    Date: "26/07/2022",
                    Status: "Draft"
                },
                {
                    FolderNumber: "FN4",
                    WordO: "4443434-4343,43434",
                    Plant: "ITTN",
                    Date: "26/07/2022",
                    Status: "Draft"

                }]

            });

            oModel.setDefaultBindingMode("TwoWay");
            return oModel;

        }


    };
});