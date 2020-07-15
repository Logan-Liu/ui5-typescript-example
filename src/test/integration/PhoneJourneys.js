/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
    "sap/ui/test/Opa5",
    "hotel/ui5/test/integration/pages/Common",
    "sap/ui/test/opaQunit",
    "hotel/ui5/test/integration/pages/App",
    "hotel/ui5/test/integration/pages/Browser",
    "hotel/ui5/test/integration/pages/Master",
    "hotel/ui5/test/integration/pages/Detail",
    "hotel/ui5/test/integration/pages/NotFound"
], function (Opa5, Common) {
    "use strict";
    Opa5.extendConfig({
        arrangements: new Common(),
        viewNamespace: "hotel.ui5.view."
    });

    sap.ui.require([
        "hotel/ui5/test/integration/NavigationJourneyPhone",
        "hotel/ui5/test/integration/NotFoundJourneyPhone",
        "hotel/ui5/test/integration/BusyJourneyPhone"
    ], function () {
        QUnit.start();
    });
});