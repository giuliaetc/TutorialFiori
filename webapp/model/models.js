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
                    ProductName: "Macbook Air M2",
                    IdNumber: "9876543-2345",
                    Supplier:  "Apple",
                    Price: 1239,
                    CurrencyCode: "EUR"
                },
                 {
                    ProductName: "iPhone 15 Plus",
                    IdNumber: "1234567-6543",
                    Supplier:  "Apple",
                    Price: 956.49,
                    CurrencyCode: "EUR"
                },

                {
                    ProductName: "e-Book Reader",
                    IdNumber: "7773434-3485",
                    Supplier: "Amazon",
                    Price: 56.49,
                    CurrencyCode: "EUR"
                },
                {
                    ProductName:"Designer Mousepad",
                    IdNumber: "4443434-4343",
                    Supplier:  "Logitech",
                    Price: 22.29,
	                CurrencyCode: "EUR"

                }]

            });

            oModel.setDefaultBindingMode("TwoWay");
            return oModel;

        }


    };
});