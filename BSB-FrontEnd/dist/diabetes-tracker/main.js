(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephenmay/Desktop/BloodSugarBuddy/BloodSugarBuddyApp/BSB-FrontEnd/src/main.ts */"zUnb");


/***/ }),

/***/ "5Oz0":
/*!******************************************************!*\
  !*** ./src/app/record-logs/record-logs.component.ts ***!
  \******************************************************/
/*! exports provided: RecordLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordLogsComponent", function() { return RecordLogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bs_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bs-manager.service */ "xBwg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _record_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../record/record.component */ "efJd");




function RecordLogsComponent_app_record_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-record", 2);
} if (rf & 2) {
    const record_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("record", record_r1);
} }
class RecordLogsComponent {
    constructor(bsManagerService) {
        this.bsManagerService = bsManagerService;
    }
    ngOnInit() {
        this.bsManagerService.getAllRecords().subscribe(list => {
            this.records = list;
        });
    }
}
RecordLogsComponent.ɵfac = function RecordLogsComponent_Factory(t) { return new (t || RecordLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bs_manager_service__WEBPACK_IMPORTED_MODULE_1__["BsManagerService"])); };
RecordLogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordLogsComponent, selectors: [["app-record-logs"]], decls: 2, vars: 1, consts: [["id", "recordLogs"], [3, "record", 4, "ngFor", "ngForOf"], [3, "record"]], template: function RecordLogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordLogsComponent_app_record_1_Template, 1, 1, "app-record", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _record_record_component__WEBPACK_IMPORTED_MODULE_3__["RecordComponent"]], styles: ["#recordLogs[_ngcontent-%COMP%] {\nbackground-color: whitesmoke;\ndisplay: inline-block;\nborder-color: black;\nborder-style: solid;\nborder-width: 10px;\nwidth: 66%;\nmargin-left: 18%;\n\n\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC1sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw0QkFBNEI7QUFDNUIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnQkFBZ0I7Ozs7O0FBS2hCIiwiZmlsZSI6InJlY29yZC1sb2dzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVjb3JkTG9ncyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYm9yZGVyLWNvbG9yOiBibGFjaztcbmJvcmRlci1zdHlsZTogc29saWQ7XG5ib3JkZXItd2lkdGg6IDEwcHg7XG53aWR0aDogNjYlO1xubWFyZ2luLWxlZnQ6IDE4JTtcblxuXG5cblxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D/Oe":
/*!****************************************************!*\
  !*** ./src/app/add-record/add-record.component.ts ***!
  \****************************************************/
/*! exports provided: AddRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordComponent", function() { return AddRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bs_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bs-manager.service */ "xBwg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddRecordComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    addRecord(label) {
        let toAdd = { bsValue: this.bsValue, label };
        this.service.addRecord(toAdd).subscribe((_) => { this.router.navigate(["/allrecords"]); });
    }
}
AddRecordComponent.ɵfac = function AddRecordComponent_Factory(t) { return new (t || AddRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bs_manager_service__WEBPACK_IMPORTED_MODULE_1__["BsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRecordComponent, selectors: [["app-add-record"]], decls: 33, vars: 1, consts: [["id", "addBS"], ["id", "textValue"], ["type", "text", 3, "ngModel", "ngModelChange"], ["labelSelect", ""], ["value", "Before Breakfast"], ["value", "After Breakfast"], ["value", "Before Lunch"], ["value", "After Lunch"], ["value", "Before Dinner"], ["value", "After Dinenr"], ["value", "Before Snack"], ["value", "Before Bed"], ["value", "Before Workout"], ["value", "After Workout"], ["id", "add", 3, "click"]], template: function AddRecordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddRecordComponent_Template_input_ngModelChange_3_listener($event) { return ctx.bsValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Label ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Before Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "After Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Before Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "After Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Before Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "After Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Before Snack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Before Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Before Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "After Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRecordComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.addRecord(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bsValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["#addBS[_ngcontent-%COMP%] {\n    \n    display: inline-block;\n    border: solid black;\n    margin-left: 42%;\n\n\n}\n\n#textValue[_ngcontent-%COMP%] {\n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7O0FBR3BCOztBQUVBOzs7QUFHQSIsImZpbGUiOiJhZGQtcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWRkQlMge1xuICAgIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiA0MiU7XG5cblxufVxuXG4jdGV4dFZhbHVlIHtcbiAgICBcbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ "HQjV":
/*!************************************************************!*\
  !*** ./src/app/record-by-date/record-by-date.component.ts ***!
  \************************************************************/
/*! exports provided: RecordByDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordByDateComponent", function() { return RecordByDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bs_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bs-manager.service */ "xBwg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _record_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../record/record.component */ "efJd");




function RecordByDateComponent_app_record_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-record", 2);
} if (rf & 2) {
    const record_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("record", record_r1);
} }
class RecordByDateComponent {
    constructor(bsManagerService) {
        this.bsManagerService = bsManagerService;
    }
    ngOnInit() {
        this.bsManagerService.getByDate().subscribe(list => {
            this.records = list;
        });
    }
}
RecordByDateComponent.ɵfac = function RecordByDateComponent_Factory(t) { return new (t || RecordByDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bs_manager_service__WEBPACK_IMPORTED_MODULE_1__["BsManagerService"])); };
RecordByDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordByDateComponent, selectors: [["app-record-by-date"]], decls: 10, vars: 1, consts: [["id", "dayRecords"], [3, "record", 4, "ngFor", "ngForOf"], [3, "record"]], template: function RecordByDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecordByDateComponent_app_record_2_Template, 1, 1, "app-record", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Daily Carb Intake: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Average Blood Sugar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _record_record_component__WEBPACK_IMPORTED_MODULE_3__["RecordComponent"]], styles: ["#dayRecords[_ngcontent-%COMP%] {\n\n    background-color: ghostwhite;\n    display: inline-block;\n    border-color: black;\n    border-style: solid;\n    border-width: 10px;\n    width: 66%;\n    margin-left: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC1ieS1kYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InJlY29yZC1ieS1kYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGF5UmVjb3JkcyB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIHdpZHRoOiA2NiU7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'diabetes-tracker';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "page"], ["id", "header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Diabetes Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome to Blood Sugar Buddy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#header[_ngcontent-%COMP%] {\n    text-align: center;\n    color: ghostwhite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _record_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record/record.component */ "efJd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _record_logs_record_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record-logs/record-logs.component */ "5Oz0");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-record/add-record.component */ "D/Oe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _record_by_date_record_by_date_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./record-by-date/record-by-date.component */ "HQjV");
/* harmony import */ var _food_tracker_food_tracker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food-tracker/food-tracker.component */ "cRWA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _record_record_component__WEBPACK_IMPORTED_MODULE_3__["RecordComponent"],
        _record_logs_record_logs_component__WEBPACK_IMPORTED_MODULE_5__["RecordLogsComponent"],
        _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_6__["AddRecordComponent"],
        _record_by_date_record_by_date_component__WEBPACK_IMPORTED_MODULE_8__["RecordByDateComponent"],
        _food_tracker_food_tracker_component__WEBPACK_IMPORTED_MODULE_9__["FoodTrackerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();


/***/ }),

/***/ "cRWA":
/*!********************************************************!*\
  !*** ./src/app/food-tracker/food-tracker.component.ts ***!
  \********************************************************/
/*! exports provided: FoodTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodTrackerComponent", function() { return FoodTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bs_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bs-manager.service */ "xBwg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




let total = 0;
class FoodTrackerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    findFood() {
        // add reset function if needed
        let foodName = $("#search").val();
        $.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=SohihGmRVzAtcLPY0c3Yo2SQsWE8V2992IbSe4VT&query=${foodName}`, function (data, textStatus, jqXHR) {
            let carbs = `${data.foods[0].foodNutrients[2].value}`;
            document.getElementById("carbs").textContent = carbs;
            console.log(data);
            let carbNum = parseFloat(carbs);
            total += carbNum;
            let output = total.toString();
            document.getElementById("totalCarbs").textContent = output;
            let name = foodName.toString();
            let foodItem = document.createElement("span");
            let carbCount = document.createElement("span");
            let br = document.createElement("br");
            foodItem.textContent = name;
            carbCount.textContent = " | " + carbs;
            document.getElementById("showFood").appendChild(br);
            document.getElementById("showFood").appendChild(foodItem);
            document.getElementById("showFood").appendChild(carbCount);
            document.getElementById("showFood").appendChild(br);
            document.getElementById("carbCount").textContent = carbs;
        });
    }
    addMeal(totalCarbs, label) {
        console.log(totalCarbs);
        let carbs = parseFloat(totalCarbs);
        console.log(carbs);
        let toAdd = { carbs, label };
        this.service.addMeal(toAdd).subscribe();
    }
}
FoodTrackerComponent.ɵfac = function FoodTrackerComponent_Factory(t) { return new (t || FoodTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bs_manager_service__WEBPACK_IMPORTED_MODULE_1__["BsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FoodTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodTrackerComponent, selectors: [["app-food-tracker"]], decls: 32, vars: 0, consts: [["id", "body"], ["id", "searchFood"], ["id", "search", "type", "text", "placeholder", "Add a food item"], ["id", "button", 3, "click"], ["id", "carbs"], ["id", "showFood"], ["id", "totalCarbs"], ["totalCarbs", ""], ["labelSelect", ""], ["value", "Breakfast"], ["value", "Lunch"], ["value", "Dinner"], ["value", "Snack"]], template: function FoodTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodTrackerComponent_Template_button_click_4_listener() { return ctx.findFood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Carbohydrates: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " This meal's total carbohydrates: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Snack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodTrackerComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.addMeal(_r0.textContent, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["#searchFood[_ngcontent-%COMP%] {\n\n    background-color: whitesmoke;\n    display: inline-block;\n    border-color: black;\n    border-style: solid;\n    border-width: 10px;\n    width: 66%;\n    margin-left: 18%;\n}\n\n#body[_ngcontent-%COMP%] {\n\n    background-color: #24305e;\n}\n\n#button[_ngcontent-%COMP%]{\n    background-color: #2a71d4;\n    display:inline-block;\n    padding:0.3em 1.2em;\n    margin:0 0.1em 0.1em 0;\n    border:0.16em solid #2a71d4;\n    border-radius:2em;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-weight:300;\n    color:#FFFFFF;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align:center;\n    transition: all 0.2s;\n    }\n\n#button[_ngcontent-%COMP%]:hover{\n    border:0.16em solid #000000;\n}\n\n#showFood[_ngcontent-%COMP%] {\n\n    background-color: whitesmoke;\n    display: inline-block;\n    border-color: black;\n    border-style: solid;\n    border-width: 10px;\n    width: 66%;\n    margin-left: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCOztBQUNKO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJmb29kLXRyYWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hGb29kIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBtYXJnaW4tbGVmdDogMTglO1xufVxuXG4jYm9keSB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMDVlO1xufVxuXG4jYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTcxZDQ7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzowLjNlbSAxLjJlbTtcbiAgICBtYXJnaW46MCAwLjFlbSAwLjFlbSAwO1xuICAgIGJvcmRlcjowLjE2ZW0gc29saWQgIzJhNzFkNDtcbiAgICBib3JkZXItcmFkaXVzOjJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMC4wNGVtIDAuMDRlbSByZ2JhKDAsMCwwLDAuMzUpO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIH1cbiNidXR0b246aG92ZXJ7XG4gICAgYm9yZGVyOjAuMTZlbSBzb2xpZCAjMDAwMDAwO1xufVxuXG4jc2hvd0Zvb2Qge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMTBweDtcbiAgICB3aWR0aDogNjYlO1xuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XG59Il19 */"] });


/***/ }),

/***/ "efJd":
/*!********************************************!*\
  !*** ./src/app/record/record.component.ts ***!
  \********************************************/
/*! exports provided: RecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordComponent", function() { return RecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RecordComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecordComponent.ɵfac = function RecordComponent_Factory(t) { return new (t || RecordComponent)(); };
RecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordComponent, selectors: [["app-record"]], inputs: { record: "record" }, decls: 4, vars: 4, consts: [["id", "singleValue"]], template: function RecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.record.bsValue, " | ", ctx.record.label, " | ", ctx.record.date, " | ", ctx.record.time, "");
    } }, styles: ["#singleValue[_ngcontent-%COMP%] {\n\n    display: inline-block;\n    margin-left: 30px;\n    \n}\n\n#data[_ngcontent-%COMP%]{\n\n    display: inline;\n}\n\n#allRecords[_ngcontent-%COMP%] {\n\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixpQkFBaUI7O0FBRXJCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpbmdsZVZhbHVlIHtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBcbn1cblxuI2RhdGF7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNhbGxSZWNvcmRzIHtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-record/add-record.component */ "D/Oe");
/* harmony import */ var _food_tracker_food_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-tracker/food-tracker.component */ "cRWA");
/* harmony import */ var _record_by_date_record_by_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record-by-date/record-by-date.component */ "HQjV");
/* harmony import */ var _record_logs_record_logs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./record-logs/record-logs.component */ "5Oz0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{ path: "allrecords", component: _record_logs_record_logs_component__WEBPACK_IMPORTED_MODULE_4__["RecordLogsComponent"] },
    { path: "bloodsugar", component: _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_1__["AddRecordComponent"] },
    { path: "day", component: _record_by_date_record_by_date_component__WEBPACK_IMPORTED_MODULE_3__["RecordByDateComponent"] },
    { path: "food", component: _food_tracker_food_tracker_component__WEBPACK_IMPORTED_MODULE_2__["FoodTrackerComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xBwg":
/*!***************************************!*\
  !*** ./src/app/bs-manager.service.ts ***!
  \***************************************/
/*! exports provided: BsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsManagerService", function() { return BsManagerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BsManagerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/api";
        //url to begin calling food nutrition data, (+ food name)
        this.nutUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=SohihGmRVzAtcLPY0c3Yo2SQsWE8V2992IbSe4VT&query=";
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Content-Type": "application/json" }) };
    }
    getAllRecords() {
        return this.http.get(this.baseUrl + "/allrecords")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            let empty = [];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(empty);
        }));
    }
    addRecord(toAdd) {
        console.log(toAdd);
        return this.http.post(this.baseUrl + "/bloodsugar", toAdd, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    addMeal(toAdd) {
        console.log(toAdd);
        return this.http.post(this.baseUrl + "/addmeal", toAdd, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    getByDate() {
        return this.http.get(this.baseUrl + "/day")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            let empty = [];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(empty);
        }));
    }
    findFood(name) {
        return this.http.get(this.nutUrl + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    getDailyValues() {
        return this.http.get(this.baseUrl + "/dailyvalues")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log(err);
            let empty;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(empty);
        }));
    }
}
BsManagerService.ɵfac = function BsManagerService_Factory(t) { return new (t || BsManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BsManagerService, factory: BsManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map