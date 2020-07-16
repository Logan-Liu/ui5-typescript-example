import BaseController   from "hotel/ui5/controller/BaseController";
import JSONModel        from "sap/ui/model/json/JSONModel";
import Event = sap.ui.base.Event;

@UI5("hotel.ui5.controller.App")
export default class App extends BaseController {

    public onInit(): void {
        var oViewModel: JSONModel,
            oComponent = this.getOwnerComponent(),
            oModel = oComponent.getModel<sap.ui.model.odata.v2.ODataModel>(),
            fnSetAppNotBusy: () => void,
            oListSelector = oComponent.oListSelector,
            iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

        oViewModel = new JSONModel({
            busy : true,
            delay : 0
        },true);
        this.setModel(oViewModel, "appView");

        fnSetAppNotBusy = () => {
            oViewModel.setProperty("/busy", false);
            oViewModel.setProperty("/delay", iOriginalBusyDelay);
        };

        oModel.metadataLoaded()
                .then(fnSetAppNotBusy);

        // Makes sure that master view is hidden in split app
        // after a new list entry has been selected.
        oListSelector.attachListSelectionChange(() => {
            this.byId<sap.m.SplitApp>("idAppControl").hideMaster();
        }, this);

        // apply content density mode to root view
        this.getView().addStyleClass(oComponent.getContentDensityClass());
    }

    public avatarPressed (oEvent:Event):void{
        
    }

}
