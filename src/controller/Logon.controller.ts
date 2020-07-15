import BaseController from "hotel/ui5/controller/BaseController";
import JSONModel      from "sap/ui/model/json/JSONModel";
import formatter      from "hotel/ui5/model/formatter";

@UI5("hotel.ui5.controller.Logon")
export default class Logon extends BaseController
{
    public formatter = formatter;

    /* =========================================================== */
    /* lifecycle methods                                           */
    /* =========================================================== */

    onInit() {
        // Model used to manipulate control states. The chosen values make sure,
        // detail page is busy indication immediately so there is no break in
        // between the busy indication for loading the view's meta data
        /*let oViewModel = new JSONModel('',{
            busy : false,
            delay : 0,
            lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading")
        });

        this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);

        this.setModel(oViewModel, "detailView");

        this.getOwnerComponent().getModel<sap.ui.model.odata.v2.ODataModel>().metadataLoaded().then(this._onMetadataLoaded.bind(this));*/
    }

    /* =========================================================== */
    /* event handlers                                              */
    /* =========================================================== */


}
