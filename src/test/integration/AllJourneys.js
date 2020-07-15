/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Objects in the list
// * All 3 Objects have at least one LineItems

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
        "hotel/ui5/test/integration/MasterJourney",
        "hotel/ui5/test/integration/NavigationJourney",
        "hotel/ui5/test/integration/NotFoundJourney",
        "hotel/ui5/test/integration/BusyJourney"
    ], function () {
        QUnit.start();
    });
});