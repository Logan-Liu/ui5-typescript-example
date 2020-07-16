import BaseController from "hotel/ui5/controller/BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "hotel/ui5/model/formatter";
import NumberFormat = sap.ui.core.format.NumberFormat;

@UI5("hotel.ui5.controller.StartpageController")
export default class StartpageController extends BaseController {
    public formatter = formatter;

    public onInit() {
        var sDataPath = sap.ui.require.toUrl("hotel/ui5/localService/mockdata") + "/News.json";
        var oModel = new JSONModel(sDataPath);
        this.getView().setModel(oModel, "news");
    };


    public getProgress(aNodes) {
        if (!aNodes || aNodes.length === 0) {
            return 0;
        }
        var iSum = 0;
        for (var i = 0; i < aNodes.length; i++) {
            iSum += aNodes[i].state === "Positive";
        }
        var fPercent = (iSum / aNodes.length) * 100;
        return fPercent.toFixed(0);
    };

    public getEntityCount(entities) {
        return entities && entities.length || 0;
    };

    public formatNumber(value) {
        var oFloatFormatter = NumberFormat.getFloatInstance({
            style: "short",
            decimals: 1
        });
        return oFloatFormatter.format(value);
    };

    public formatJSONDate(date) {
        var oDate = new Date(Date.parse(date));
        return oDate.toLocaleDateString();
    };

    public onNavToOrder(){
        this.getOwnerComponent().getRouter().navTo("order");
    };

    public onNavToHotel(){
        this.getOwnerComponent().getRouter().navTo("hotel");
    };


}
