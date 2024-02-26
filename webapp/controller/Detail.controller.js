sap.ui.define([
    "sap/btp/project1/controller/BaseController",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/Input",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,Dialog,Button,Text,Input,JSONModel) {
        "use strict";


        return BaseController.extend("sap.btp.project1.controller.Detail", {
            onInit: function () {
             
               // Creazione del modello JSON
                var oModel = new JSONModel();
                // Imposta la vista come contesto del modello
                this.getView().setModel(oModel, "formData");

              
                var oModel2 = new JSONModel([]);
                this.getView().setModel(oModel2, "dataModel");
                

            },

            onNameInputChange: function(oEvent) {
                let newValue1 = oEvent.getParameter("newValue");
               
                if (newValue1 === "") {
                    this.getView().byId("InputName").setValueState("Error");
                }
                else {
                    this.getView().byId("InputName").setValueState("Success");
 
                }
                this.controlActivateSave();
                this.controlActivateAction();
            },

            onIdInputChange: function(oEvent) {
                
                let newValue1 = this.getView().byId("InputId").getValue();
               
                function containsOnlyNumbers(newValue1) {
                  // Utilizza una regex per verificare se la stringa contiene solo caratteri numerici
                    return /^\d+$/.test(newValue1);
                  }

                if (!containsOnlyNumbers(newValue1)) {
                    this.getView().byId("InputId").setValueState("Error");
                }
                else {
                    this.getView().byId("InputId").setValueState("Success");
                }
                this.controlActivateSave();
                this.controlActivateAction();
            },

            onEmailInputChange:  function(oEvent){
              var oInput = oEvent.getSource();
              var sEmail = oInput.getValue();
        
              // Utilizzare una regex per verificare il formato dell'email
              var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
              if (emailRegex.test(sEmail)) {
                oInput.setValueState(sap.ui.core.ValueState.Success);
              } else {
                oInput.setValueState(sap.ui.core.ValueState.Error);
              }
              this.controlActivateSave();
              this.controlActivateAction();
            },

            controlActivateSave: function(){
                let button = this.getView().byId('saveButton');
                let valueState1 = this.getView().byId("InputName").getValueState();
                let valueState2 = this.getView().byId("InputId").getValueState();
                let valueState3 = this.getView().byId("InputEmail").getValueState();

            
                if ((valueState1 === sap.ui.core.ValueState.Success) 
                && (valueState2 === sap.ui.core.ValueState.Success) 
                && (valueState3 === sap.ui.core.ValueState.Success)) {
                  // Abilita il saveButton se tutti gli stati degli input sono "Success"
                  button.setEnabled(true); 
                } else {
                  button.setEnabled(false);
                }
            }, 
            
            controlActivateAction: function(){
              let button = this.getView().byId('actionButton');
              let valueState1 = this.getView().byId("InputName").getValueState();
              let valueState2 = this.getView().byId("InputId").getValueState();
              let valueState3 = this.getView().byId("InputEmail").getValueState();

          
              if ((valueState1 === sap.ui.core.ValueState.Success) 
              && (valueState2 === sap.ui.core.ValueState.Success) 
              && (valueState3 === sap.ui.core.ValueState.Success)) {
                // Abilita il saveButton se tutti gli stati degli input sono "Success"
                button.setEnabled(true); 
              } else {
                button.setEnabled(false);
              }
          },  
               

            onSave: function(){
              // Ottenere i valori dei campi della form e del modello su cui vogliamo salvare i dati
              let value1 = this.getView().byId("InputName").getValue();
              let value2 = this.getView().byId("InputId").getValue();
              let value3 = this.getView().byId("InputEmail").getValue();
  
              var oForm =this.getView().byId("oModelForm");
         
   
              // Ottenere il riferimento al modello
               var oModel = this.getView().getModel("formData");
  
              // Aggiornare il modello con i dati della form
              oModel.setProperty("/campo1", value1);
              oModel.setProperty("/campo2", value2);
              oModel.setProperty("/campo3", value3);
             
              
               // Crea il testo del riepilogo
               let riepilogoText = "Product name: " + oModel.getProperty("/campo1")+ "\nId: " 
               + oModel.getProperty("/campo2") + "\nSupplier's email: " + oModel.getProperty("/campo3");
   
             if (!this.oDefaultDialog) {
             this.oDefaultDialog = new Dialog({
             title: "Data Summary",
             content: [
                    new Text({ text: riepilogoText })
                ],
   
             beginButton: new Button({
               type: "Emphasized",
               text: "Conferma",
               press: function () {
                 this.oDefaultDialog.close();
                       // Imposta la proprietà "visible" della form su true per renderla visibile
                       if (oForm) {
                       oForm.setVisible(true);
                       }
                  }.bind(this)
             }),
   
               afterClose: function () {
               this.oDefaultDialog.destroy().bind(this);
                }
   
           });
   
              // to get access to the controller's model
              this.getView().addDependent(this.oDefaultDialog);
           }
              //Aprire il dialogo
             this.oDefaultDialog.open();
          
  
              },

              onAction: function(){
                // Ottenere i valori dei campi della form e del modello su cui vogliamo salvare i dati
                let value1 = this.getView().byId("InputName").getValue();
                let value2 = this.getView().byId("InputId").getValue();
                let value3 = this.getView().byId("InputEmail").getValue();
    
                let oForm =this.getView().byId("FormCRUD");
           
     
                // Ottenere il riferimento al modello
                let oModel = this.getView().getModel("dataModel");
    
                // Creare un nuovo oggetto con i dati della form
                var nuovoDato = {
                    dato1: value1,
                    dato2: value2,
                    dato3: value3
                   };
    
                // Aggiungere il nuovo dato al modello
                 oModel.getData().push(nuovoDato);
                 oModel.refresh(); // Aggiornare il modello per riflettere i nuovi dati

                // Ottenere l'array completo di dati dal modello
                var dati = oModel.getData();

                // Leggere dati specifici dal modello
                var valoreCampo1 = dati[0].dato1;
                var valoreCampo2 = dati[1].dato2;
                var valoreCampo3 = dati[2].dato3;
              
                
                // Crea il testo del riepilogo
                 let riepilogoText = "Product name: " + valoreCampo1+ "\nId: " 
                 + valoreCampo2 + "\nSupplier's email: " + valoreCampo3;
     
               if (!this.oDefaultDialog) {
               this.oDefaultDialog = new Dialog({
               title: "Data Summary",
               content: [
                      new Text({ text: riepilogoText })
                  ],
     
               beginButton: new Button({
                 type: "Emphasized",
                 text: "Conferma",
                 press: function () {
                   this.oDefaultDialog.close();
                         // Imposta la proprietà "visible" della form su true per renderla visibile
                         if (oForm) {
                         oForm.setVisible(true);
                         }
                    }.bind(this)
               }),
     
                 afterClose: function () {
                 this.oDefaultDialog.destroy().bind(this);
                  }
     
             });
     
                // to get access to the controller's model
                this.getView().addDependent(this.oDefaultDialog);
             }
                //Aprire il dialogo
               this.oDefaultDialog.open();

    
                }


        });
    });     