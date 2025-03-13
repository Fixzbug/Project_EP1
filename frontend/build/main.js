webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adduser_adduser__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__management_management__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tranfer_tranfer__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tranferrecord_tranferrecord__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdetail_userdetail__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userdevicedetail_userdevicedetail__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__usertranferrecord_usertranferrecord__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__report_report__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userreport_userreport__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl, alertCtrl, db, toastCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.uid = localStorage.getItem('uidwallet');
        this.role = localStorage.getItem('role');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad TranferrecorddetailPage');
                        if (!(this.role == "USER")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.getServiceJson({ type: "tranfer", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.name = _c.sent();
                                            _b = this;
                                            return [4 /*yield*/, (data.result.amounts / 100)];
                                        case 2:
                                            _b.credit = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.notifications('ไม่มีข้อมูล');
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.menu = function (selecter) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.role == "ADMIN")) return [3 /*break*/, 16];
                        _a = selecter;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 3];
                            case 3: return [3 /*break*/, 5];
                            case 4: return [3 /*break*/, 7];
                            case 5: return [3 /*break*/, 9];
                            case 6: return [3 /*break*/, 11];
                            case 7: return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 1: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adduser_adduser__["a" /* AdduserPage */])];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 3: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__management_management__["a" /* ManagementPage */])];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 5: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tranfer_tranfer__["a" /* TranferPage */])];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 7: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tranferrecord_tranferrecord__["a" /* TranferrecordPage */])];
                    case 8:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 9: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__report_report__["a" /* ReportPage */])];
                    case 10:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 11: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */])];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, this.logout()];
                    case 14:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 15: return [3 /*break*/, 29];
                    case 16:
                        if (!(this.role == "USER")) return [3 /*break*/, 29];
                        _b = selecter;
                        switch (_b) {
                            case 1: return [3 /*break*/, 17];
                            case 2: return [3 /*break*/, 19];
                            case 3: return [3 /*break*/, 21];
                            case 4: return [3 /*break*/, 23];
                            case 5: return [3 /*break*/, 25];
                            case 6: return [3 /*break*/, 27];
                        }
                        return [3 /*break*/, 29];
                    case 17: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__userdetail_userdetail__["a" /* UserdetailPage */])];
                    case 18:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 19: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__userdevicedetail_userdevicedetail__["a" /* UserdevicedetailPage */])];
                    case 20:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 21: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__usertranferrecord_usertranferrecord__["a" /* UsertranferrecordPage */])];
                    case 22:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 23: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__userreport_userreport__["a" /* UserreportPage */])];
                    case 24:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 25: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */])];
                    case 26:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 27: return [4 /*yield*/, this.logout()];
                    case 28:
                        _c.sent();
                        return [3 /*break*/, 29];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: 'ออกจากระบบ',
                            message: 'ต้องการออกจากระบบใช่หรือไม่?',
                            cssClass: 'alertCustomCssdetail',
                            buttons: [
                                {
                                    text: 'ตกลง ออกจากระบบ',
                                    handler: function () {
                                        localStorage.clear();
                                        _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                                    }
                                },
                                {
                                    text: 'ยกเลิก',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col margin-left>\n\n        <h2 text-center style="font-weight: bold;" *ngIf="role == \'ADMIN\'"> Managment system</h2>\n\n        <h2 text-start class="user" *ngIf="role == \'USER\'"> Hello : {{ name }} </h2>\n\n      </ion-col>\n\n      <ion-col margin-right text-end  *ngIf="role == \'USER\'">\n\n        <h2  class="user"> Credit: {{ credit }}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  class="bg">\n\n\n\n  <div *ngIf="role == \'ADMIN\'">\n\n    <ion-card (click)="menu(1)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col col-4>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 20px;"\n\n              name="md-person-add"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p text-left>เพิ่มผู้ใช้</p>\n\n            <h2 margin-top text-left>Add User</h2>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(2)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-people"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>จัดการผู้ใช้</p>\n\n            <h2 margin-top text-left>User Management</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(3)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-stats"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ฝาก/ถอน</p>\n\n            <h2 margin-top text-left>Tranfer</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(4)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-calculator"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ฝาก/ถอน</p>\n\n            <h2 margin-top text-left>Tranfer Record</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(5)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-book"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>รายงาน</p>\n\n            <h2 margin-top text-left>Report </h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(6)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-key"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>เปลี่ยนรหัสผ่าน</p>\n\n            <h2 margin-top text-left>Change Password</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(7)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-log-out"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ออกจากระบบ</p>\n\n            <h2 margin-top text-left>Logout</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="role == \'USER\'">\n\n    <ion-card (click)="menu(1)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col col-4>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 20px;"\n\n              name="md-person-add"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p text-left>ข้อมูลส่วนตัว</p>\n\n            <h2 margin-top text-left>User Data</h2>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(2)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-people"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ข้อมูลเครื่อง</p>\n\n            <h2 margin-top text-left>QR Name</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(3)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-clipboard"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ฝาก/ถอน</p>\n\n            <h2 margin-top text-left>Tranfer Record</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(4)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-book"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>รายงาน</p>\n\n            <h2 margin-top text-left>Report </h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(5)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-key"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>เปลี่ยนรหัสผ่าน</p>\n\n            <h2 margin-top text-left>Change Password</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="menu(6)">\n\n      <ion-card-content no-margin>\n\n        <ion-row no-margin>\n\n          <ion-col>\n\n            <ion-icon style="text-align: center; font-size: 4rem; margin-top: 10px; margin-left: 25px;"\n\n              name="md-log-out"></ion-icon>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p text-left>ออกจากระบบ</p>\n\n            <h2 margin-top text-left>Logout</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 margin-top text-right><ion-icon name="ios-arrow-forward"></ion-icon></h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n  <p text-center style="opacity: 0.5;">Version 1.0.0</p>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        this.http = http;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getServiceJson = function (data) {
        var _this = this;
        var headers = { 'Content-Type': 'application/json' };
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__environment__["a" /* environment */].URL, data, { headers: headers }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdduserPage = /** @class */ (function () {
    function AdduserPage(navCtrl, db, formBuilder, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.adduserForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            nickname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            bank_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            bank_number: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            createdate: [this.momentjs().format('YYYY-MM-DD'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        this.role = 'USER';
        this.uid = localStorage.getItem('uidwallet');
        this.db.getServiceJson({ type: "allbanks" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 3];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.banks = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.banks = [];
                        this.notifications("ไม่พบข้อมูล");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    AdduserPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad AdduserPage');
                        return [4 /*yield*/, this.db.getServiceJson({ type: "allbanks" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.banks = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.banks = [];
                                            this.notifications("ไม่พบข้อมูล");
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdduserPage.prototype.adduser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            message: 'คุณต้องการเพิ่มผู้ใช้งานใช่หรือไม่?',
                            cssClass: 'alertCustomCssdetail',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        var data = _this.adduserForm.value;
                                        var credentials = {
                                            type: "adduser",
                                            username: data.username,
                                            password: data.password,
                                            name: data.name,
                                            phone: data.phone,
                                            nickname: data.nickname,
                                            bank_name: data.bank_name,
                                            bank_number: data.bank_number,
                                            role: _this.role,
                                            createdate: Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.createdate), 'dd/MM/yyyy')
                                        };
                                        // console.log(credentials);
                                        _this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (data.status === 200) {
                                                    if (data.result) {
                                                        this.notifications('สมัครสมาชิกสำเร็จ');
                                                        this.navCtrl.pop();
                                                    }
                                                }
                                                else {
                                                    this.adduserError = "อีเมลถูกใช้ไปแล้ว";
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    }
                                },
                                {
                                    text: 'CANCEL',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdduserPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdduserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adduser',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\adduser\adduser.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Add User\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg">\n\n\n\n  <div class="btnsign">\n\n    <form [formGroup]="adduserForm" (ngSubmit)="adduser()">\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="username" placeholder="ชื่อผู้ใช้"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="password" formControlName="password" placeholder="รหัสผ่าน"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="name" placeholder="ชื่อ-นามสกุล"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="phone" placeholder="เบอร์โทร"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="nickname" placeholder="ชื่อลูกค้า"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="date" formControlName="createdate" placeholder="วันที่สร้าง"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n      <h3 text-center margin-top>Bank Account</h3>\n\n\n\n\n\n      <ion-item no-lines>\n\n        <ion-label> ชื่อธนาคาร</ion-label>\n\n        <ion-select multiple="false" cancelText="ปิด" okText="เลือก" formControlName="bank_name">\n\n          <ion-option *ngFor="let b of banks; let i = index;" value="{{b.name_th}}">{{b.name_th}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      \n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="bank_number" placeholder="หมายเลขบัญชี"></ion-input>\n\n      </ion-item>\n\n\n\n      <div class="error">\n\n        <div class="form-error">{{adduserError}}</div>\n\n      </div>\n\n      <button right margin-top ion-button full round type="submit" [disabled]="!adduserForm.valid">เพิ่มสมาชิก\n\n      </button>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\adduser\adduser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AdduserPage);
    return AdduserPage;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managementdetail_managementdetail__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManagementPage = /** @class */ (function () {
    function ManagementPage(navCtrl, navParams, db, toastCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.uid = localStorage.getItem('uidwallet');
        this.db.getServiceJson({ type: "allaccount" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 3];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.user = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.notifications('ไม่มีข้อมูลผู้ใช้งาน');
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    ManagementPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem('uidwallet');
                                    return [4 /*yield*/, this.db.getServiceJson({ type: "allaccount" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.user = _b.sent();
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.user = [];
                                                        this.notifications('ไม่มีข้อมูลผู้ใช้งาน');
                                                        this.loading.dismiss();
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    ManagementPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad ManagementPage');
                        return [4 /*yield*/, this.db.getServiceJson({ type: "allaccount" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.user = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.user = [];
                                            this.notifications('ไม่มีข้อมูลผู้ใช้งาน');
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementPage.prototype.Account = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__managementdetail_managementdetail__["a" /* ManagementdetailPage */], { uid: uid })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-management',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\management\management.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      User Management\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <br>\n\n  <ion-row *ngFor="let data of user;let i = index;">\n\n    <button (click)="Account(data.user_id)" ion-item>\n\n      <!-- <ion-label><b>{{ i }}. </b>{{ data.nickname }} ({{ data.username }})</ion-label> -->\n\n      <ion-label>{{ data.nickname }} ({{ data.username }})</ion-label>\n\n    </button>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\management\management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ManagementPage);
    return ManagementPage;
}());

//# sourceMappingURL=management.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adddevice_adddevice__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ManagementdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManagementdetailPage = /** @class */ (function () {
    function ManagementdetailPage(navCtrl, navParams, db, toastCtrl, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: "",
            name: "",
            phone: "",
            nickname: "",
            createdate: "",
            bank_name: "",
            bank_number: "",
        };
        this.uid = localStorage.getItem("uidwallet");
        this.db
            .getServiceJson({ type: "account", user_id: this.navParams.get("uid") })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 3];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.user = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.user = [];
                        this.notifications("ไม่มีข้อมูลผู้ใช้งาน");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.db
            .getServiceJson({ type: "device", user_id: this.navParams.get("uid") })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 3];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.device = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.device = [];
                        this.notifications("ไม่มีข้อมูลเครื่อง");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    ManagementdetailPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.db
                                        .getServiceJson({
                                        type: "account",
                                        user_id: this.navParams.get("uid"),
                                    })
                                        .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!(data != null)) return [3 /*break*/, 3];
                                                    if (!(data.status == 200)) return [3 /*break*/, 2];
                                                    _a = this;
                                                    return [4 /*yield*/, data.result];
                                                case 1:
                                                    _a.user = _b.sent();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    this.user = [];
                                                    this.notifications("ไม่มีข้อมูลผู้ใช้งาน");
                                                    _b.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({
                                            type: "device",
                                            user_id: this.navParams.get("uid"),
                                        })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.device = _b.sent();
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.device = [];
                                                        this.loading.dismiss();
                                                        this.notifications("ไม่มีข้อมูลเครื่อง");
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    ManagementdetailPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad ManagementdetailPage");
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "allbanks" })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.banks = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.banks = [];
                                            this.notifications("ไม่พบข้อมูล");
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.updateaccount = function (subtitle) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "ต้องการอัพเดทข้อมูลใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        var credentials = {
                                            type: "updateuser",
                                            username: _this.user.username,
                                            password: _this.user.password,
                                            name: _this.user.name,
                                            phone: _this.user.phone,
                                            nickname: _this.user.nickname,
                                            bank_name: _this.user.bank_name,
                                            bank_number: _this.user.bank_number,
                                            createdate: _this.user.createdate,
                                            user_id: _this.navParams.get("uid"),
                                        };
                                        // console.log(credentials);
                                        _this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    if (data.result) {
                                                        this.notifications("อัพเดทข้อมูลสำเร็จ");
                                                    }
                                                    else {
                                                        this.notifications("อัพเดทข้อมูลไม่สำเร็จ");
                                                    }
                                                }
                                                else {
                                                    this.notifications("ไม่มีข้อมูลเครื่อง");
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.adddevice = function (subtitle) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "คุณต้องการ" + subtitle + "อุปกรณ์ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adddevice_adddevice__["a" /* AdddevicePage */], {
                                            user_id: _this.navParams.get("uid"),
                                        });
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.removedevice = function (subtitle, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "คุณต้องการ" + subtitle + "อุปกรณ์ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            inputs: [
                                {
                                    name: "password",
                                    placeholder: "กรอกรหัสผ่าน",
                                    type: "text",
                                },
                            ],
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function (inputs) {
                                        // console.log(localStorage.getItem('pcheck'));
                                        if (localStorage.getItem("pcheck") != inputs.password) {
                                            _this.notifications("รหัสผ่านไม่ถูกต้อง รหัส:" + localStorage.getItem("pcheck"));
                                        }
                                        else {
                                            var credentials = {
                                                type: "removedevice",
                                                device_id: data.device_id,
                                            };
                                            // console.log(credentials);
                                            _this.db.getServiceJson(credentials).then(function (data) {
                                                // console.log(data);
                                                if (data != null) {
                                                    if (data.status == 200) {
                                                        if (data.result) {
                                                            _this.notifications("ลบข้อมูลสำเร็จ");
                                                            // localStorage.setItem('pcheck', 'null');
                                                        }
                                                        else {
                                                            _this.notifications("ลบข้อมูลไม่สำเร็จ");
                                                        }
                                                    }
                                                    else {
                                                        _this.notifications("ไม่มีข้อมูลเครื่อง");
                                                    }
                                                }
                                            });
                                        }
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.removeuser = function (subtitle, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "คุณต้องการ" + subtitle + "ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            inputs: [
                                {
                                    name: "password",
                                    placeholder: "กรอกรหัสผ่าน",
                                    type: "text",
                                },
                            ],
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function (inputs) {
                                        // console.log(localStorage.getItem('pcheck'));
                                        if (localStorage.getItem("pcheck") != inputs.password) {
                                            _this.notifications("รหัสผ่านไม่ถูกต้อง รหัส:" + localStorage.getItem("pcheck"));
                                        }
                                        else {
                                            var credentials = {
                                                type: "removeuser",
                                                user_id: user_id,
                                            };
                                            // console.log(credentials);
                                            _this.db.getServiceJson(credentials).then(function (data) {
                                                // console.log(data);
                                                if (data != null) {
                                                    if (data.status == 200) {
                                                        if (data.result) {
                                                            _this.notifications("ลบข้อมูลสำเร็จ");
                                                            // localStorage.setItem('pcheck', 'null');
                                                            _this.navCtrl.pop();
                                                        }
                                                        else {
                                                            _this.notifications("ลบข้อมูลไม่สำเร็จ");
                                                        }
                                                    }
                                                    else {
                                                        _this.notifications("ไม่มีข้อมูลเครื่อง");
                                                    }
                                                }
                                            });
                                        }
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-managementdetail",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\managementdetail\managementdetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      User Management\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="btnsign">\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.username" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Password</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n    <small text-center padding> *หากมีการเปลี่ยนแปลงรหัสผ่าน ขณะผู้ใช้ยังไม่ได้ออกจากระบบ\n\n      ให้ทำการแจ้งให้ผู้ใช้ออกจากระบบก่อน แล้วค่อยดำเนินการเปลี่ยนรหัสผ่าน แล้วจึงทำการ Login ใหม่</small>\n\n    <!-- <hr> -->\n\n    <ion-item no-lines margin-top>\n\n      <ion-label>ชื่อ-นามสกุล</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>เบอร์โทร</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.phone"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>ชื่อลูกค้า(Remark)</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.nickname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>วันที่สร้าง</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.createdate"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label> ชื่อธนาคาร</ion-label>\n\n      <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="user.bank_name">\n\n        <ion-option *ngFor="let b of banks; let i = index;" value="{{b.name_th}}">{{b.name_th}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>หมายเลขบัญชี</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.bank_number"></ion-input>\n\n    </ion-item>\n\n\n\n    <button margin-top ion-button full round color="primary" (click)="updateaccount(\'อัพเดทข้อมูล\')">\n\n      <ion-icon name="md-cloud-upload"></ion-icon>อัพเดทข้อมูล\n\n    </button>\n\n\n\n    <button margin-top ion-button full round color="danger" (click)="removeuser(\'ลบผู้ใช้งาน\',user.user_id)">\n\n      <ion-icon name="md-remove"></ion-icon>ลบผู้ใช้งาน\n\n    </button>\n\n\n\n  </div>\n\n  <br>\n\n  <hr>\n\n  <h3 text-center margin-top>QR Device</h3>\n\n\n\n  <ion-item no-lines *ngFor="let data of device;let i = index;">\n\n    <ion-row>\n\n      <ion-col start text-left>\n\n        {{ i + 1  }}.{{ data.macaddress}}\n\n      </ion-col>\n\n      <ion-col end text-right (click)="removedevice(\'ลบอุปกรณ์\',data)">\n\n        <ion-icon style="color: #eb445a;" name="md-remove"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n  <button margin-top ion-button full round color="primary" (click)="adddevice(\'เพิ่มเครื่อง\')">\n\n    <ion-icon name="md-add"></ion-icon>เพิ่มเครื่อง\n\n  </button>\n\n\n\n  <small>*คำเตือน หากทำการลบเครื่องคณะมีการใช้งานเครื่องจะไม่สามารถอัพเดทยอดเงินที่เข้ามาได้\n\n    ทำให้ระบบทำงานผิดพลาดได้</small>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\managementdetail\managementdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ManagementdetailPage);
    return ManagementdetailPage;
}());

//# sourceMappingURL=managementdetail.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdddevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the AdddevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdddevicePage = /** @class */ (function () {
    function AdddevicePage(navParams, navCtrl, db, formBuilder, toastCtrl, alertCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.uid = localStorage.getItem('uidwallet');
        this.user_id = this.navParams.get('user_id');
        this.date = this.momentjs().format('DD/MM/YYYY');
        this.time = this.momentjs().format('HH:mm:ss');
        this.deviceForm = formBuilder.group({
            macaddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            boardname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            createdate: [this.momentjs().format('YYYY-MM-DD'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    AdddevicePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, console.log('ionViewDidLoad AdddevicePage')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdddevicePage.prototype.Device = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            message: 'คุณต้องการเพิ่มอุปกรณ์ใช่หรือไม่?',
                            cssClass: 'alertCustomCssdetail',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        var data = _this.deviceForm.value;
                                        if (!data.macaddress || !data.boardname) {
                                            return;
                                        }
                                        var credentials = {
                                            type: "adddevice",
                                            user_id: _this.user_id,
                                            macaddress: data.macaddress.toUpperCase(),
                                            boardname: data.boardname,
                                            status: 0,
                                            amounts: 0,
                                            date: _this.date,
                                            datestamp: _this.date + " " + _this.time,
                                            createdate: _this.date,
                                        };
                                        // console.log(credentials);
                                        _this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data != null) {
                                                    if (data.status == 200) {
                                                        if (data.result) {
                                                            this.notifications('เพิ่มอุปกรณ์สำเร็จ');
                                                            this.navCtrl.pop();
                                                        }
                                                    }
                                                    else {
                                                        this.notifications("macaddress ถูกใช้ไปแล้ว");
                                                        // this.deviceError = "macaddress ถูกใช้ไปแล้ว";
                                                    }
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    }
                                },
                                {
                                    text: 'CANCEL',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdddevicePage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdddevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adddevice',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\adddevice\adddevice.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Add Device\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="btnsign">\n\n    <form [formGroup]="deviceForm" (ngSubmit)="Device()">\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="macaddress" placeholder="macaddress"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="boardname" placeholder="ชื่อเครื่อง"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item no-lines>\n\n        <ion-input type="date" formControlName="createdate" placeholder="วันที่"></ion-input>\n\n      </ion-item>\n\n\n\n      <div class="error">\n\n        <div class="form-error">{{deviceError}}</div>\n\n      </div>\n\n      <button right margin-top ion-button full round type="submit" [disabled]="!deviceForm.valid">เพิ่มเครื่อง\n\n      </button>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\adddevice\adddevice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AdddevicePage);
    return AdddevicePage;
}());

//# sourceMappingURL=adddevice.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the TranferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TranferPage = /** @class */ (function () {
    function TranferPage(navCtrl, navParams, db, toastCtrl, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_3_moment__;
        this.uid = localStorage.getItem("uidwallet");
        this.date = this.momentjs().format("YYYY-MM-DD");
        this.time = this.momentjs().format("HH:mm:ss");
        this.db.getServiceJson({ type: "alltranfer" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 3];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.device = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.device = [];
                        this.notifications("ไม่มีข้อมูล");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.totals().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isNaN(res)) return [3 /*break*/, 1];
                        this.notifications("ไม่มีข้อมูล");
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, res];
                    case 2:
                        _a.totalsum = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    TranferPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem("uidwallet");
                                    this.date = this.momentjs().format("DD/MM/YYYY");
                                    this.time = this.momentjs().format("HH:mm:ss");
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "alltranfer" })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.device = _b.sent();
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.device = [];
                                                        this.loading.dismiss();
                                                        this.notifications("ไม่มีข้อมูล");
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    this.totals().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!isNaN(res)) return [3 /*break*/, 1];
                                                    this.notifications("ไม่มีข้อมูล");
                                                    return [3 /*break*/, 3];
                                                case 1:
                                                    _a = this;
                                                    return [4 /*yield*/, res];
                                                case 2:
                                                    _a.totalsum = _b.sent();
                                                    _b.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    TranferPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferPage.prototype.totals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db.getServiceJson({ type: "alltranfer" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var balance_1, totalmoney_1, totalmoney, totalmoney;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 5];
                                        if (!(data.status == 200)) return [3 /*break*/, 3];
                                        balance_1 = [];
                                        totalmoney_1 = 0.0;
                                        return [4 /*yield*/, data.result.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a, _b;
                                                return __generator(this, function (_c) {
                                                    switch (_c.label) {
                                                        case 0:
                                                            _b = (_a = balance_1).push;
                                                            return [4 /*yield*/, element["amounts"]];
                                                        case 1:
                                                            _b.apply(_a, [(_c.sent()) / 100]);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, balance_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totalmoney_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        resolve(totalmoney_1);
                                        balance_1 = [];
                                        totalmoney_1 = 0.0;
                                        return [3 /*break*/, 4];
                                    case 3:
                                        totalmoney = 0.0;
                                        resolve(totalmoney);
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        totalmoney = 0.0;
                                        resolve(totalmoney);
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    TranferPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("ionViewDidLoad TranferPage");
                return [2 /*return*/];
            });
        });
    };
    TranferPage.prototype.deposit = function (subtitle, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "ระบุจำนวน Credit ที่ต้องการฝาก",
                            cssClass: "alertCustomCssdetail",
                            inputs: [
                                {
                                    name: "amounts",
                                    placeholder: "โปรดกรอกจำนวนเงิน",
                                    type: "number",
                                },
                            ],
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function (inputs) {
                                        if (inputs.amounts == "") {
                                            _this.notifications("โปรดกรอกจำนวนเงิน");
                                        }
                                        else {
                                            // console.log(inputs.amounts);
                                            _this.db
                                                .getServiceJson({
                                                type: "deposit",
                                                user_id: data.user_id,
                                                operation_id: "ADMIN",
                                                macaddress: "ADMIN",
                                                amounts: inputs.amounts * 100,
                                                ws_id: data.ws_id,
                                                date: _this.momentjs().format("YYYY-DD-MM"),
                                                time: _this.momentjs().format("HH:mm:ss"),
                                            })
                                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.notifications("ฝากเงินสำเร็จ");
                                                            // this.navCtrl.pop();
                                                            this.autoRefresh();
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                        }
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferPage.prototype.withdraw = function (subtitle, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data.amounts / 100 == 0)) return [3 /*break*/, 1];
                        this.notifications("ยอดเงินไม่เพียงพอตต่อการถอน");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "ระบุจำนวน Credit ที่ต้องการถอน",
                            cssClass: "alertCustomCssdetail",
                            inputs: [
                                {
                                    name: "amounts",
                                    placeholder: "โปรดกรอกจำนวนเงิน",
                                    type: "number",
                                },
                            ],
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function (inputs) {
                                        if (inputs.amounts == "") {
                                            _this.notifications("โปรดกรอกจำนวนเงิน");
                                        }
                                        else if (inputs.amounts == 0) {
                                            _this.notifications("โปรดกรอกจำนวนเงินให้มากกว่า 0");
                                        }
                                        else if (inputs.amounts > data.balance / 100) {
                                            _this.notifications("ยอดเงินไม่เพียงพอตต่อการถอน");
                                        }
                                        else {
                                            // console.log(inputs.amounts);
                                            _this.db
                                                .getServiceJson({
                                                type: "withdraw",
                                                user_id: data.user_id,
                                                operation_id: "ADMIN",
                                                macaddress: "ADMIN",
                                                amounts: inputs.amounts * 100,
                                                ws_id: data.ws_id,
                                                date: _this.momentjs().format("YYYY-DD-MM"),
                                                time: _this.momentjs().format("HH:mm:ss"),
                                            })
                                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.notifications("ถอนเงินสำเร็จ");
                                                            // this.navCtrl.pop();
                                                            this.autoRefresh();
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                        }
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 2:
                        confirm_1 = _a.sent();
                        return [4 /*yield*/, confirm_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TranferPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-tranfer",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\tranfer\tranfer.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Transfer\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div *ngIf="device != \'\'">\n\n    <ion-row>\n\n      <ion-col text-start>\n\n        <h3>User</h3>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h3>Credit</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <ion-item no-lines *ngFor="let data of device;let i = index;">\n\n    <ion-row no-padding>\n\n      <ion-col text-start style="font-size: 1.5rem; max-width: 20ch;">\n\n        {{ data.nickname }}({{ data.username }})\n\n      </ion-col>\n\n      <ion-col text-end class="money" style="font-size: 1.5rem;">\n\n        {{ data.amounts / 100}}\n\n      </ion-col>\n\n      <ion-col col-2 text-end (click)="deposit(\'Deposit\',data)" style="font-size: 1.5rem;">\n\n        <ion-icon style="color: #2dd36f;" name="md-add"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-2 text-end (click)="withdraw(\'Withdraw\',data)" style="font-size: 1.5rem;">\n\n        <ion-icon style="color: #eb445a;" name="md-remove"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n  <ion-row padding>\n\n    <ion-col text-start>\n\n      <h2>Total</h2>\n\n    </ion-col>\n\n    <ion-col text-end class="money">\n\n      <h2>{{ totalsum }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\tranfer\tranfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TranferPage);
    return TranferPage;
}());

//# sourceMappingURL=tranfer.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranferrecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tranferrecorddetail_tranferrecorddetail__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TranferrecordPage = /** @class */ (function () {
    function TranferrecordPage(navCtrl, navParams, db, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.uid = localStorage.getItem('uidwallet');
    }
    TranferrecordPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem('uidwallet');
                                    return [4 /*yield*/, this.db.getServiceJson({ type: "allaccount" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.user = _b.sent();
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.user = [];
                                                        this.loading.dismiss();
                                                        this.notifications('ไม่มีข้อมูล');
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    TranferrecordPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad TranferrecordPage');
                        return [4 /*yield*/, this.db.getServiceJson({ type: "allaccount" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.user = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.user = [];
                                            this.notifications('ไม่มีข้อมูลผ');
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferrecordPage.prototype.TranferRecord = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tranferrecorddetail_tranferrecorddetail__["a" /* TranferrecorddetailPage */], { uid: uid })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferrecordPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferrecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tranferrecord',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\tranferrecord\tranferrecord.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Tranfer Record\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <br>\n\n  <ion-row *ngFor="let data of user;let i = index;">\n\n    <button (click)="TranferRecord(data.user_id)" ion-item>\n\n      <!-- <ion-label>{{ i }}.{{ data.nickname }} ({{ data.username }})</ion-label> -->\n\n      <ion-label>{{ data.nickname }} ({{ data.username }})</ion-label>\n\n    </button>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\tranferrecord\tranferrecord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TranferrecordPage);
    return TranferrecordPage;
}());

//# sourceMappingURL=tranferrecord.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranferrecorddetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TranferrecorddetailPage = /** @class */ (function () {
    function TranferrecorddetailPage(navCtrl, navParams, db, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.uid = localStorage.getItem('uidwallet');
    }
    TranferrecorddetailPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem('uidwallet');
                                    return [4 /*yield*/, this.db.getServiceJson({ type: "tranferrecordbyid", user_id: this.navParams.get('uid') }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data != null) {
                                                    if (data.status == 200) {
                                                        this.user = data.result;
                                                        this.loading.dismiss();
                                                    }
                                                    else {
                                                        this.user = [];
                                                        this.loading.dismiss();
                                                        this.notifications('ไม่มีข้อมูล');
                                                    }
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    TranferrecorddetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad TranferrecorddetailPage');
                        return [4 /*yield*/, this.db.getServiceJson({ type: "tranferrecordbyid", user_id: this.navParams.get('uid') }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.user = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.user = [];
                                            this.notifications('ไม่มีข้อมูล');
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferrecorddetailPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TranferrecorddetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tranferrecorddetail',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\tranferrecorddetail\tranferrecorddetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Tranfer Record\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <br>\n\n  <ion-row *ngFor="let data of user;let i = index;">\n\n    <ion-col *ngIf="data.type == \'deposit\'">\n\n      <ion-label text-start color="primary">{{ i+1}}. [{{ data.date }}-{{ data.time }}]\n\n      </ion-label>\n\n      <ion-label text-start color="success">({{ data.operation_id }} -> {{ data.macaddress }})\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col *ngIf="data.type == \'deposit\'">\n\n      <ion-label text-end>\n\n        <h2 style="color: #2dd36f;"><ion-icon style="color: #2dd36f;" name="md-add"></ion-icon> {{ data.amounts / 100 }}\n\n        </h2>\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col *ngIf="data.type == \'withdraw\'">\n\n      <ion-label text-start color="primary">{{ i+1 }}. [{{ data.date }}-{{ data.time }}]\n\n      </ion-label>\n\n      <ion-label text-start color="danger">({{ data.operation_id }} -> {{ data.macaddress }})\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col *ngIf="data.type == \'withdraw\'">\n\n      <ion-label text-end>\n\n        <h2 style="color: #eb445a;"><ion-icon style="color: #eb445a;" name="md-remove"></ion-icon> {{ data.amounts / 100\n\n          }}</h2>\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\tranferrecorddetail\tranferrecorddetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TranferrecorddetailPage);
    return TranferrecorddetailPage;
}());

//# sourceMappingURL=tranferrecorddetail.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.uid = localStorage.getItem("uidwallet");
        this.role = localStorage.getItem("role");
        this.db
            .getServiceJson({ type: "account", user_id: this.uid })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 5];
                        if (!(data.status == 200)) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, data.result.username];
                    case 1:
                        _a.username = _e.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _e.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _e.sent();
                        _d = this;
                        return [4 /*yield*/, data.result.phone];
                    case 4:
                        _d.phone = _e.sent();
                        _e.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
    AccountPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem("uidwallet");
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "account", user_id: this.uid })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c, _d;
                                            return __generator(this, function (_e) {
                                                switch (_e.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 6];
                                                        if (!(data.status == 200)) return [3 /*break*/, 6];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.username];
                                                    case 1:
                                                        _a.username = _e.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _e.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _e.sent();
                                                        _d = this;
                                                        return [4 /*yield*/, data.result.phone];
                                                    case 4:
                                                        _d.phone = _e.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 5:
                                                        _e.sent();
                                                        _e.label = 6;
                                                    case 6: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    AccountPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad AccountPage");
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "account", user_id: this.uid })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c, _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 5];
                                            if (!(data.status == 200)) return [3 /*break*/, 5];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.username = _e.sent();
                                            _b = this;
                                            return [4 /*yield*/, data.result.password];
                                        case 2:
                                            _b.password = _e.sent();
                                            _c = this;
                                            return [4 /*yield*/, data.result.name];
                                        case 3:
                                            _c.name = _e.sent();
                                            _d = this;
                                            return [4 /*yield*/, data.result.phone];
                                        case 4:
                                            _d.phone = _e.sent();
                                            _e.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.updateprofile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: "อัพเดจข้อมูล",
                            message: "ต้องการอัพเดจข้อมูลใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง ออกจากระบบ",
                                    handler: function () {
                                        _this.db
                                            .getServiceJson({
                                            type: "updateprofile",
                                            username: _this.username,
                                            password: _this.password,
                                            user_id: _this.uid,
                                        })
                                            .then(function (data) {
                                            if (data.status == 200) {
                                                _this.notifications("อัพเดจสำเร็จ ต้องออกจากระบบแล้วเข้าใหม่");
                                                _this.logout();
                                            }
                                            else {
                                                _this.notifications("ไม่มีข้อมูลผู้ใช้งาน");
                                            }
                                        });
                                    },
                                },
                                {
                                    text: "ยกเลิก",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: "ออกจากระบบ",
                            message: "ต้องการออกจากระบบใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง ออกจากระบบ",
                                    handler: function () {
                                        localStorage.clear();
                                        _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                    },
                                },
                                {
                                    text: "ยกเลิก",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-account",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\account\account.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      {{ name }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <!-- <div class="account">\n\n    <ion-card>\n\n      <ion-card-header text-center>\n\n        <ion-label style="font-size: 2.5rem;">{{ name }}</ion-label>\n\n      </ion-card-header>\n\n    </ion-card>\n\n  </div> -->\n\n\n\n  <ion-item no-lines>\n\n    <ion-label stacked>ชื่อผู้ใช้</ion-label>\n\n    <ion-input type="text" [(ngModel)]="username" disabled></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines>\n\n    <ion-label stacked>ชื่อ</ion-label>\n\n    <ion-input type="text" [(ngModel)]="name" disabled></ion-input>\n\n  </ion-item>\n\n\n\n  <!-- <ion-item no-lines>\n\n    <ion-label stacked>เบอร์โทร</ion-label>\n\n    <ion-input type="text" [(ngModel)]="phone" [disabled]="role == ADMIN ? true : false"></ion-input>\n\n  </ion-item> -->\n\n\n\n  <ion-item no-lines>\n\n    <ion-label stacked>เบอร์โทร</ion-label>\n\n    <ion-input type="text" [(ngModel)]="phone" disabled></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines>\n\n    <ion-label stacked>รหัสผ่าน</ion-label>\n\n    <ion-input type="text" [(ngModel)]="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <br>\n\n  <button (click)="updateprofile()" ion-item no-lines>\n\n    <ion-label>อัพเดจรหัสผ่าน</ion-label>\n\n  </button>\n\n  <br>\n\n  <small text-center padding>*หลังจากการอัพเดจรหัสผ่านต้องทำการออกจากระบบทุกครั้ง</small>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdetailPage = /** @class */ (function () {
    function UserdetailPage(navCtrl, navParams, db, toastCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: "",
            name: "",
            phone: "",
            nickname: "",
            createdate: "",
            bank_name: "",
            bank_number: "",
        };
        this.uid = localStorage.getItem("uidwallet");
        this.role = localStorage.getItem("role");
    }
    UserdetailPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.db
                                        .getServiceJson({ type: "account", user_id: this.uid })
                                        .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!(data != null)) return [3 /*break*/, 3];
                                                    if (!(data.status == 200)) return [3 /*break*/, 2];
                                                    _a = this;
                                                    return [4 /*yield*/, data.result];
                                                case 1:
                                                    _a.user = _b.sent();
                                                    this.loading.dismiss();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    this.user = [];
                                                    this.loading.dismiss();
                                                    this.notifications("ไม่มีข้อมูลผู้ใช้งาน");
                                                    _b.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    UserdetailPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdetailPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad UserdetailPage");
                        if (!(this.role == "USER")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "tranfer", user_id: this.uid })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.name = _c.sent();
                                            _b = this;
                                            return [4 /*yield*/, (data.result.amounts / 100)];
                                        case 2:
                                            _b.credit = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.notifications("ไม่มีข้อมูล");
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.db
                            .getServiceJson({ type: "account", user_id: this.uid })
                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 3];
                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, data.result];
                                    case 1:
                                        _a.user = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.user = [];
                                        this.notifications("ไม่มีข้อมูลผู้ใช้งาน");
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "allbanks" })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.banks = _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.banks = [];
                                            this.notifications("ไม่พบข้อมูล");
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdetailPage.prototype.updateaccount = function (subtitle) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: "คุณต้องการ" + subtitle + "ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        var credentials = {
                                            type: "updateuser",
                                            username: _this.user.username,
                                            password: _this.user.password,
                                            name: _this.user.name,
                                            phone: _this.user.phone,
                                            nickname: _this.user.nickname,
                                            bank_name: _this.user.bank_name,
                                            bank_number: _this.user.bank_number,
                                            createdate: _this.user.createdate,
                                            user_id: _this.uid,
                                        };
                                        // console.log(credentials);
                                        _this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    if (data.result) {
                                                        this.notifications("อัพเดจข้อมูลสำเร็จ");
                                                    }
                                                    else {
                                                        this.notifications("อัพเดจข้อมูลไม่สำเร็จ");
                                                    }
                                                }
                                                else {
                                                    this.notifications("ไม่มีข้อมูลเครื่อง");
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    },
                                },
                                {
                                    text: "CANCEL",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); },
                                },
                            ],
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdetailPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-userdetail",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\userdetail\userdetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      User Data\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-row>\n\n    <ion-col padding>\n\n      <h2 text-center style="font-weight: bold;" *ngIf="role == \'ADMIN\'"> Managment system</h2>\n\n      <h2 text-start class="user" *ngIf="role == \'USER\'"> Hello : {{ name }} </h2>\n\n    </ion-col>\n\n    <ion-col text-end padding *ngIf="role == \'USER\'">\n\n      <h2  class="user"> Credit: {{ credit }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div class="btnsign">\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.username" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Password</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.username" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>ชื่อ-นามสกุล</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>เบอร์โทร</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.phone" ></ion-input>\n\n    </ion-item>\n\n\n\n    <!-- <ion-item no-lines>\n\n      <ion-label>ชื่อลูกค้า(Remark)</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.nickname"></ion-input>\n\n    </ion-item> -->\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>วันที่สร้าง</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.createdate" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label> ชื่อธนาคาร</ion-label>\n\n      <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="user.bank_name">\n\n        <ion-option *ngFor="let b of banks; let i = index;" value="{{b.name_th}}">{{b.name_th}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>หมายเลขบัญชี</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.bank_number"></ion-input>\n\n    </ion-item>\n\n\n\n    <button margin-top ion-button full round color="three" (click)="updateaccount(\'อัพเดจข้อมูล\')">\n\n      <ion-icon name="md-cloud-upload"></ion-icon>อัพเดจข้อมูล\n\n    </button>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\userdetail\userdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UserdetailPage);
    return UserdetailPage;
}());

//# sourceMappingURL=userdetail.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdevicedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the UserdevicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdevicedetailPage = /** @class */ (function () {
    function UserdevicedetailPage(navCtrl, navParams, db, toastCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: '',
            name: '',
            phone: '',
            nickname: '',
            createdate: '',
            bank_name: '',
            bank_number: ''
        };
        this.uid = localStorage.getItem('uidwallet');
        this.role = localStorage.getItem('role');
    }
    UserdevicedetailPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.db.getServiceJson({ type: "device", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!(data != null)) return [3 /*break*/, 3];
                                                    if (!(data.status == 200)) return [3 /*break*/, 2];
                                                    _a = this;
                                                    return [4 /*yield*/, data.result];
                                                case 1:
                                                    _a.device = _b.sent();
                                                    this.loading.dismiss();
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    this.device = [];
                                                    this.loading.dismiss();
                                                    this.notifications('ไม่มีข้อมูลเครื่อง');
                                                    _b.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    UserdevicedetailPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdevicedetailPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdevicedetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad UserdevicedetailPage');
                        if (!(this.role == "USER")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.getServiceJson({ type: "tranfer", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.name = _c.sent();
                                            _b = this;
                                            return [4 /*yield*/, (data.result.amounts / 100)];
                                        case 2:
                                            _b.credit = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.notifications('ไม่มีข้อมูล');
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.db.getServiceJson({ type: "device", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 3];
                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, data.result];
                                    case 1:
                                        _a.device = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.device = [];
                                        this.notifications('ไม่มีข้อมูลเครื่อง');
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdevicedetailPage.prototype.editnamedevice = function (subtitle, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: '<img src="../../assets/background/logo.png" />',
                            subTitle: subtitle,
                            message: 'คุณต้องการ' + subtitle + 'ใช่หรือไม่?',
                            cssClass: 'alertCustomCssdetail',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        // console.log(data.device_id);
                                        var credentials = {
                                            type: "updatenamedevice",
                                            boardname: data.boardname,
                                            device_id: data.device_id
                                        };
                                        // console.log(credentials);
                                        _this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    if (data.result) {
                                                        this.notifications('อัพเดจข้อมูลสำเร็จ');
                                                    }
                                                    else {
                                                        this.notifications('อัพเดจข้อมูลไม่สำเร็จ');
                                                    }
                                                }
                                                else {
                                                    this.notifications('ไม่มีข้อมูลเครื่อง');
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    }
                                },
                                {
                                    text: 'CANCEL',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdevicedetailPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserdevicedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userdevicedetail',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\userdevicedetail\userdevicedetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      QR Name\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-row>\n\n    <ion-col padding>\n\n      <h2 text-center style="font-weight: bold;" *ngIf="role == \'ADMIN\'"> Managment system</h2>\n\n      <h2 text-start class="user" *ngIf="role == \'USER\'"> Hello : {{ name }} </h2>\n\n    </ion-col>\n\n    <ion-col text-end padding *ngIf="role == \'USER\'">\n\n      <h2  class="user"> Credit: {{ credit }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div no-lines *ngFor="let data of device;let i = index;">\n\n    <ion-item no-lines>\n\n      <ion-label>Device</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.device_id" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Mac address</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.macaddress" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Nickname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.boardname"></ion-input>\n\n    </ion-item>\n\n\n\n    <button margin-top ion-button full round color="three" (click)="editnamedevice(\'แก้ไขชื่ออุปกรณ์\',data)">\n\n      <ion-icon name="md-add"></ion-icon>บันทึก\n\n    </button>\n\n\n\n    <br>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\userdevicedetail\userdevicedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UserdevicedetailPage);
    return UserdevicedetailPage;
}());

//# sourceMappingURL=userdevicedetail.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertranferrecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the UsertranferrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsertranferrecordPage = /** @class */ (function () {
    function UsertranferrecordPage(navCtrl, navParams, db, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.uid = localStorage.getItem("uidwallet");
        this.role = localStorage.getItem("role");
    }
    UsertranferrecordPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.uid = localStorage.getItem("uidwallet");
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "tranferrecordbyid", user_id: this.uid })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.user = _b.sent();
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.user = [];
                                                        this.loading.dismiss();
                                                        this.notifications("ไม่มีข้อมูล");
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    UsertranferrecordPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsertranferrecordPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsertranferrecordPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad UsertranferrecordPage");
                        if (!(this.role == "USER")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "tranfer", user_id: this.uid })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.name = _c.sent();
                                            _b = this;
                                            return [4 /*yield*/, (data.result.amounts / 100)];
                                        case 2:
                                            _b.credit = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.notifications("ไม่มีข้อมูล");
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.db
                            .getServiceJson({ type: "tranferrecordbyid", user_id: this.uid })
                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 3];
                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, data.result];
                                    case 1:
                                        _a.user = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.user = [];
                                        this.notifications("ไม่มีข้อมูล");
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsertranferrecordPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsertranferrecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-usertranferrecord",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\usertranferrecord\usertranferrecord.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Tranfer Record\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-row class="tf">\n\n    <ion-col padding>\n\n      <h2 text-center style="font-weight: bold;" *ngIf="role == \'ADMIN\'"> Managment system</h2>\n\n      <h2 text-start class="user" *ngIf="role == \'USER\'"> Hello : {{ name }} </h2>\n\n    </ion-col>\n\n    <ion-col text-end padding *ngIf="role == \'USER\'">\n\n      <h2 class="user"> Credit: {{ credit }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngFor="let data of user;let i = index;">\n\n    <ion-col *ngIf="data.type == \'deposit\'">\n\n      <ion-label text-start color="primary">{{ i+1 }}. [{{ data.date }}-{{ data.time }}]\n\n      </ion-label>\n\n      <ion-label text-start color="success">({{ data.operation_id  }} -> {{ data.macaddress }})\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col *ngIf="data.type == \'deposit\'">\n\n      <ion-label text-end>\n\n        <h2 style="color: #2dd36f;"><ion-icon style="color: #2dd36f;" name="md-add"></ion-icon> {{ data.amounts / 100 }}\n\n        </h2>\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col *ngIf="data.type == \'withdraw\'">\n\n      <ion-label text-start color="primary">{{ i+1 }}. [{{ data.date }}-{{ data.time }}]\n\n      </ion-label>\n\n      <ion-label text-start color="danger">({{ data.operation_id  }} -> {{ data.macaddress }})\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col *ngIf="data.type == \'withdraw\'">\n\n      <ion-label text-end>\n\n        <h2 style="color: #eb445a;"><ion-icon style="color: #eb445a;" name="md-remove"></ion-icon> {{ data.amounts / 100\n\n          }}</h2>\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <div class="header" padding margin-top>\n\n    <img src="../../assets/background/bot.png">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\usertranferrecord\usertranferrecord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UsertranferrecordPage);
    return UsertranferrecordPage;
}());

//# sourceMappingURL=usertranferrecord.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, db, formBuilder, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.datecheck = false;
        this.checkrefresh = "all";
        this.adduserForm = formBuilder.group({
            // form: ["2023-05-21", Validators.compose([Validators.required])],
            form: [
                this.momentjs().format("YYYY-MM-DD"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
            to: [
                this.momentjs().format("YYYY-MM-DD"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
            uid: ["all", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
        });
        this.uid = localStorage.getItem("uidwallet");
        this.date = this.momentjs().format("DD/MM/YYYY");
        this.time = this.momentjs().format("HH:mm:ss");
    }
    ReportPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // console.log(this.checkrefresh);
                                    if (this.checkrefresh == "all") {
                                        this.datecheck = true;
                                    }
                                    else {
                                        this.datecheck = false;
                                    }
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "allaccount" })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 3];
                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result];
                                                    case 1:
                                                        _a.user = _b.sent();
                                                        this.device = [];
                                                        this.loading.dismiss();
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        this.user = [];
                                                        this.notifications("ไม่พบข้อมูล");
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    ReportPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad ReportPage");
                        this.datecheck = true;
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "allaccount" })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 3];
                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, data.result];
                                        case 1:
                                            _a.user = _b.sent();
                                            this.device = [];
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.user = [];
                                            this.notifications("ไม่พบข้อมูล");
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPage.prototype.UseronChange = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(e);
                this.checkrefresh = e;
                if (e == "all") {
                    this.datecheck = true;
                    this.device = []; // clear list
                    this.totalt_amout = 0; // reset total
                    this.totalt_tran = 0; // reset total
                }
                else {
                    this.datecheck = false;
                    this.device = []; // clear list
                    this.totalt_amout = 0; // reset total
                    this.totalt_tran = 0; // reset total
                }
                return [2 /*return*/];
            });
        });
    };
    ReportPage.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                data = this.adduserForm.value;
                this.user_id = data.uid;
                if (data.uid == "all") {
                    // date format for sql
                    this.form = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "yyyy-MM-dd");
                    this.to = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "yyyy-MM-dd");
                    // change date format for display
                    this.formdisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "dd/MM/yyyy");
                    this.todisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "dd/MM/yyyy");
                    // display data
                    this.display = true;
                    this.db.getServiceJson({
                        type: "allreport",
                        form: this.form,
                        to: this.to,
                    })
                        .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            // console.log(data); //dbug
                            if (data != null) {
                                if (data.status == 200) {
                                    this.device = data.result;
                                    // call cal
                                    this.TotalAll(this.form, this.to).then(function (res) {
                                        if (isNaN(res.totalincome_all) &&
                                            isNaN(res.totaltransaction_all)) {
                                            _this.notifications("ไม่พบข้อมูล");
                                        }
                                        else {
                                            // console.log(res);
                                            _this.totalt_amout = res.totalincome_all;
                                            _this.totalt_tran = res.totaltransaction_all;
                                        }
                                    });
                                }
                                else {
                                    this.device = [];
                                    this.notifications("ไม่พบข้อมูล");
                                }
                            }
                            else {
                                this.device = [];
                                this.notifications("ไม่พบข้อมูล");
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                else {
                    // date format for sql
                    this.form = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "yyyy-MM-dd");
                    this.to = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "yyyy-MM-dd");
                    // change date format for display
                    this.formdisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "dd/MM/yyyy");
                    this.todisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "dd/MM/yyyy");
                    // display data
                    this.display = false;
                    this.db
                        .getServiceJson({
                        type: "perdayreport",
                        user_id: this.user_id,
                        form: this.form,
                        to: this.to,
                    })
                        .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            // console.log(data); //dbug
                            if (data != null) {
                                if (data.status == 200) {
                                    // let in html
                                    this.device = data.result;
                                    // call cal
                                    this.TotalPerDay(this.user_id, this.form, this.to).then(function (res) {
                                        // console.log(res);
                                        if (isNaN(res.totalincome) && isNaN(res.totaltransaction)) {
                                            _this.notifications("ไม่พบข้อมูล");
                                        }
                                        else {
                                            // console.log(res);
                                            _this.totalt_amout = res.totalincome;
                                            _this.totalt_tran = res.totaltransaction;
                                        }
                                    });
                                }
                                else {
                                    this.device = [];
                                    this.notifications("ไม่พบข้อมูล");
                                }
                            }
                            else {
                                this.device = [];
                                this.notifications("ไม่พบข้อมูล");
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    ReportPage.prototype.TotalAll = function (form, to) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db.getServiceJson({ type: "allreport", form: form, to: to }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var income_all_1, transaction_all_1, totalincome_all_1, totaltransaction_all_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 6];
                                        if (!(data.status == 200)) return [3 /*break*/, 4];
                                        income_all_1 = [];
                                        transaction_all_1 = [];
                                        totalincome_all_1 = 0.0;
                                        totaltransaction_all_1 = 0.0;
                                        return [4 /*yield*/, data.result.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a, _b, _c, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            _b = (_a = income_all_1).push;
                                                            return [4 /*yield*/, element["income_money_all"]];
                                                        case 1:
                                                            _b.apply(_a, [_e.sent()]);
                                                            _d = (_c = transaction_all_1).push;
                                                            return [4 /*yield*/, element["transaction_all"]];
                                                        case 2:
                                                            _d.apply(_c, [_e.sent()]);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, income_all_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totalincome_all_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, transaction_all_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totaltransaction_all_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 3:
                                        _a.sent();
                                        resolve({
                                            totalincome_all: totalincome_all_1,
                                            totaltransaction_all: totaltransaction_all_1,
                                        });
                                        income_all_1 = [];
                                        transaction_all_1 = [];
                                        totalincome_all_1 = 0.0;
                                        totaltransaction_all_1 = 0.0;
                                        return [3 /*break*/, 5];
                                    case 4:
                                        resolve({
                                            totalincome_all: 0,
                                            totaltransaction_all: 0,
                                        });
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        resolve({
                                            totalincome_all: 0,
                                            totaltransaction_all: 0,
                                        });
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    ReportPage.prototype.TotalPerDay = function (user_id, form, to) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db
                            .getServiceJson({
                            type: "perdayreport",
                            user_id: user_id,
                            form: form,
                            to: to,
                        })
                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var income_1, transaction_1, totalincome_1, totaltransaction_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 6];
                                        if (!(data.status == 200)) return [3 /*break*/, 4];
                                        income_1 = [];
                                        transaction_1 = [];
                                        totalincome_1 = 0.0;
                                        totaltransaction_1 = 0.0;
                                        return [4 /*yield*/, data.result.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a, _b, _c, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            _b = (_a = income_1).push;
                                                            return [4 /*yield*/, element["income_money"]];
                                                        case 1:
                                                            _b.apply(_a, [_e.sent()]);
                                                            _d = (_c = transaction_1).push;
                                                            return [4 /*yield*/, element["transaction"]];
                                                        case 2:
                                                            _d.apply(_c, [_e.sent()]);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, income_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totalincome_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, transaction_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totaltransaction_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 3:
                                        _a.sent();
                                        resolve({
                                            totalincome: totalincome_1,
                                            totaltransaction: totaltransaction_1,
                                        });
                                        income_1 = [];
                                        transaction_1 = [];
                                        totalincome_1 = 0.0;
                                        totaltransaction_1 = 0.0;
                                        return [3 /*break*/, 5];
                                    case 4:
                                        resolve({
                                            totalincome: 0,
                                            totaltransaction: 0,
                                        });
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        resolve({
                                            totalincome: 0,
                                            totaltransaction: 0,
                                        });
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    ReportPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-report",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\report\report.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <div class="btnsign">\n\n    <form [formGroup]="adduserForm" (ngSubmit)="search()">\n\n\n\n      <div *ngIf="datecheck == true">\n\n        <ion-item no-lines>\n\n          <ion-label> จาก</ion-label>\n\n          <ion-input type="date" formControlName="form" placeholder="วันที่สร้าง"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label> ถึง</ion-label>\n\n          <ion-input type="date" formControlName="to" placeholder="วันที่สร้าง"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <div *ngIf="datecheck == false">\n\n        <ion-item no-lines>\n\n          <ion-label> วันที่</ion-label>\n\n          <ion-input type="date" formControlName="form" placeholder="วันที่สร้าง"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label> ถึง</ion-label>\n\n          <ion-input type="date" formControlName="to" placeholder="วันที่สร้าง"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <ion-item no-lines>\n\n        <ion-label> Select User</ion-label>\n\n        <ion-select multiple="false" cancelText="ปิด" okText="เลือก" formControlName="uid"\n\n          (ionChange)="UseronChange($event)">\n\n          <ion-option value="all">ทั้งหมด</ion-option>\n\n          <ion-option *ngFor="let data of user; let i = index;" value="{{data.user_id}}">{{data.nickname}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <div class="error">\n\n        <div class="form-error">{{adduserError}}</div>\n\n      </div>\n\n      <button right margin-top ion-button full round type="submit" [disabled]="!adduserForm.valid">ค้นหา\n\n      </button>\n\n    </form>\n\n  </div>\n\n\n\n  <div *ngIf="device != \'\'">\n\n    <h3 text-center margin-top>รายงานประจำวันที่</h3>\n\n    <h3 text-center style="font-weight: bold; color:red;" *ngIf="datecheck == true">{{ formdisplay }} - {{ todisplay }}\n\n    </h3>\n\n    <h3 text-center style="font-weight: bold; color:red;" *ngIf="datecheck == false">{{ formdisplay }}  - {{ todisplay }}</h3>\n\n    <!-- <hr> -->\n\n    <ion-row>\n\n      <ion-col text-start>\n\n        <h3>User</h3>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h3>Transactions</h3>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h3>Amount</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div>\n\n    <ion-item no-lines *ngFor="let data of device;let i = index;">\n\n      <ion-row>\n\n        <ion-col text-start *ngIf="display == true">\n\n          <h3>{{ data.nickname }} <p>({{ data.username }})</p>\n\n          </h3>\n\n        </ion-col>\n\n        <ion-col text-start *ngIf="display == false">\n\n          <h3>{{ data.macaddress }}\n\n          </h3>\n\n        </ion-col>\n\n        <ion-col text-end class="money" *ngIf="display == true">\n\n          {{ data.transaction_all }}\n\n        </ion-col>\n\n        <ion-col text-end class="money" *ngIf="display == true">\n\n          {{ data.income_money_all }}\n\n        </ion-col>\n\n        <ion-col text-end class="money" *ngIf="display == false">\n\n          {{ data.transaction }}\n\n        </ion-col>\n\n        <ion-col text-end class="money" *ngIf="display == false">\n\n          {{ data.income_money }}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-row padding *ngIf="device != \'\'">\n\n      <ion-col text-start>\n\n        <h2>Total</h2>\n\n      </ion-col>\n\n      <ion-col text-end class="money">\n\n        <h2>{{ totalt_tran }}</h2>\n\n      </ion-col>\n\n      <ion-col text-end class="money">\n\n        <h2>{{ totalt_amout }}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the UserreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserreportPage = /** @class */ (function () {
    function UserreportPage(navCtrl, db, formBuilder, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.datecheck = false;
        this.adduserForm = formBuilder.group({
            // form: ["2023-05-21", Validators.compose([Validators.required])],
            form: [
                this.momentjs().format("YYYY-MM-DD"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
            to: [
                this.momentjs().format("YYYY-MM-DD"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
        });
        this.uid = localStorage.getItem("uidwallet");
        this.role = localStorage.getItem("role");
        this.date = this.momentjs().format("DD/MM/YYYY");
        this.time = this.momentjs().format("HH:mm:ss");
        this.device = [];
    }
    UserreportPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.loading = _this.loadingCtrl.create({});
                    _this.loading.present().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.uid = localStorage.getItem("uidwallet");
                            this.role = localStorage.getItem("role");
                            this.date = this.momentjs().format("DD/MM/YYYY");
                            this.time = this.momentjs().format("HH:mm:ss");
                            this.device = [];
                            this.loading.dismiss();
                            return [2 /*return*/];
                        });
                    }); });
                    refresher.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    UserreportPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                console.log("Refresher complete");
                            },
                        };
                        return [4 /*yield*/, this.doRefresh(refresher)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserreportPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewWillEnter");
                        return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserreportPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad UserreportPage");
                        if (!(this.role == "USER")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db
                                .getServiceJson({ type: "tranfer", user_id: this.uid })
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 3];
                                            _a = this;
                                            return [4 /*yield*/, data.result.username];
                                        case 1:
                                            _a.name = _c.sent();
                                            _b = this;
                                            return [4 /*yield*/, (data.result.amounts / 100)];
                                        case 2:
                                            _b.credit = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.notifications("ไม่มีข้อมูล");
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UserreportPage.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                data = this.adduserForm.value;
                this.form = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "yyyy-MM-dd");
                this.to = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "yyyy-MM-dd");
                // change date format for display
                this.formdisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.form), "dd/MM/yyyy");
                this.todisplay = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["a" /* format */])(new Date(data.to), "dd/MM/yyyy");
                this.db
                    .getServiceJson({
                    type: "perweekreport",
                    user_id: this.uid,
                    form: this.form,
                    to: this.to,
                })
                    .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.device = data.result;
                                // console.log(this.device);
                                this.TotalAll(this.uid, this.form, this.to).then(function (res) {
                                    // console.log(res);
                                    if (isNaN(res.totalincome) && isNaN(res.totaltransactions)) {
                                        _this.notifications("ไม่พบข้อมูล");
                                    }
                                    else {
                                        // console.log(res);
                                        _this.totalic = res.totalincome;
                                        _this.totalts = res.totaltransactions;
                                    }
                                });
                            }
                            else {
                                this.device = [];
                                this.notifications("ไม่พบข้อมูล");
                            }
                        }
                        else {
                            this.device = [];
                            this.notifications("ไม่พบข้อมูล");
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    UserreportPage.prototype.TotalAll = function (uid, form, to) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db
                            .getServiceJson({
                            type: "perweekreport",
                            user_id: uid,
                            form: form,
                            to: to,
                        })
                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var income_1, transactions_1, totalincome_1, totaltransactions_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 6];
                                        if (!(data.status == 200)) return [3 /*break*/, 4];
                                        income_1 = [];
                                        transactions_1 = [];
                                        totalincome_1 = 0.0;
                                        totaltransactions_1 = 0.0;
                                        return [4 /*yield*/, data.result.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a, _b, _c, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            _b = (_a = income_1).push;
                                                            return [4 /*yield*/, element["income_money"]];
                                                        case 1:
                                                            _b.apply(_a, [_e.sent()]);
                                                            _d = (_c = transactions_1).push;
                                                            return [4 /*yield*/, element["transaction"]];
                                                        case 2:
                                                            _d.apply(_c, [_e.sent()]);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, income_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totalincome_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, transactions_1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    totaltransactions_1 += parseInt(element);
                                                    return [2 /*return*/];
                                                });
                                            }); })];
                                    case 3:
                                        _a.sent();
                                        resolve({
                                            totalincome: totalincome_1,
                                            totaltransactions: totaltransactions_1,
                                        });
                                        income_1 = [];
                                        transactions_1 = [];
                                        totalincome_1 = 0.0;
                                        totaltransactions_1 = 0.0;
                                        return [3 /*break*/, 5];
                                    case 4:
                                        resolve({
                                            totalincome: 0,
                                            totaltransactions: 0,
                                        });
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        resolve({
                                            totalincome: 0,
                                            totaltransactions: 0,
                                        });
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    UserreportPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-userreport",template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\userreport\userreport.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-row>\n\n    <ion-col padding>\n\n      <h2 text-center style="font-weight: bold;" *ngIf="role == \'ADMIN\'"> Managment system</h2>\n\n      <h2 text-start class="user" *ngIf="role == \'USER\'"> Hello : {{ name }} </h2>\n\n    </ion-col>\n\n    <ion-col text-end padding *ngIf="role == \'USER\'">\n\n      <h2 class="user"> Credit: {{ credit }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n  <div class="btnsign">\n\n    <form [formGroup]="adduserForm" (ngSubmit)="search()">\n\n\n\n      <ion-item no-lines>\n\n        <ion-label> จาก</ion-label>\n\n        <ion-input type="date" formControlName="form" placeholder="วันที่สร้าง"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-label> ถึง</ion-label>\n\n        <ion-input type="date" formControlName="to" placeholder="วันที่สร้าง"></ion-input>\n\n      </ion-item>\n\n\n\n      <div class="error">\n\n        <div class="form-error">{{adduserError}}</div>\n\n      </div>\n\n      <button right margin-top ion-button full round type="submit" [disabled]="!adduserForm.valid">ค้นหา\n\n      </button>\n\n    </form>\n\n  </div>\n\n\n\n  <div *ngIf="device != \'\'">\n\n    <h3 text-center margin-top>รายงานประจำวันที่</h3>\n\n    <h3 text-center style="font-weight: bold; color:red;">{{ formdisplay }} - {{ todisplay }}</h3>\n\n    <ion-row>\n\n      <ion-col text-start>\n\n        <h3>User</h3>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h3>Transactions</h3>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h3>Amounts</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <ion-item no-lines *ngFor="let data of device;let i = index;">\n\n    <ion-row>\n\n      <ion-col text-start class="qr">\n\n        <h3>{{ data.macaddress }}\n\n        </h3>\n\n      </ion-col>\n\n      <ion-col text-end class="money">\n\n        {{ data.transaction }}\n\n      </ion-col>\n\n      <ion-col text-end class="money">\n\n        {{ data.income_money }}\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n  <ion-row padding *ngIf="device != \'\'">\n\n    <ion-col text-start>\n\n      <h2>Total</h2>\n\n    </ion-col>\n\n    <ion-col text-end class="money">\n\n      <h2>{{ totalts }}</h2>\n\n    </ion-col>\n\n    <ion-col text-end class="money">\n\n      <h2>{{ totalic }}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\userreport\userreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], UserreportPage);
    return UserreportPage;
}());

//# sourceMappingURL=userreport.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(489);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_management_management__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_managementdetail_managementdetail__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tranfer_tranfer__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tranferrecord_tranferrecord__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tranferrecorddetail_tranferrecorddetail__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adduser_adduser__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_adddevice_adddevice__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_userdetail_userdetail__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userdevicedetail_userdevicedetail__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_usertranferrecord_usertranferrecord__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_userreport_userreport__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_report_report__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adduser_adduser__["a" /* AdduserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_managementdetail_managementdetail__["a" /* ManagementdetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tranfer_tranfer__["a" /* TranferPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tranferrecord_tranferrecord__["a" /* TranferrecordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tranferrecorddetail_tranferrecorddetail__["a" /* TranferrecorddetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_adddevice_adddevice__["a" /* AdddevicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_userdetail_userdetail__["a" /* UserdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userdevicedetail_userdevicedetail__["a" /* UserdevicedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_usertranferrecord_usertranferrecord__["a" /* UsertranferrecordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userreport_userreport__["a" /* UserreportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adduser_adduser__["a" /* AdduserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_managementdetail_managementdetail__["a" /* ManagementdetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tranfer_tranfer__["a" /* TranferPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tranferrecord_tranferrecord__["a" /* TranferrecordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tranferrecorddetail_tranferrecorddetail__["a" /* TranferrecorddetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_adddevice_adddevice__["a" /* AdddevicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_userdetail_userdetail__["a" /* UserdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userdevicedetail_userdevicedetail__["a" /* UserdevicedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_usertranferrecord_usertranferrecord__["a" /* UsertranferrecordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userreport_userreport__["a" /* UserreportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            statusBar.styleDefault();
            if (localStorage.getItem('uidwallet') != null && localStorage.getItem('role') != null) {
                splashScreen.hide();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                splashScreen.hide();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\app\app_fridayqrv2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    URL: "https://washmevmm.com/fridayqr-sdk-apiv2/api/api.php",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 269,
	"./af.js": 269,
	"./ar": 270,
	"./ar-dz": 271,
	"./ar-dz.js": 271,
	"./ar-kw": 272,
	"./ar-kw.js": 272,
	"./ar-ly": 273,
	"./ar-ly.js": 273,
	"./ar-ma": 274,
	"./ar-ma.js": 274,
	"./ar-sa": 275,
	"./ar-sa.js": 275,
	"./ar-tn": 276,
	"./ar-tn.js": 276,
	"./ar.js": 270,
	"./az": 277,
	"./az.js": 277,
	"./be": 278,
	"./be.js": 278,
	"./bg": 279,
	"./bg.js": 279,
	"./bm": 280,
	"./bm.js": 280,
	"./bn": 281,
	"./bn-bd": 282,
	"./bn-bd.js": 282,
	"./bn.js": 281,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 291,
	"./de-at": 292,
	"./de-at.js": 292,
	"./de-ch": 293,
	"./de-ch.js": 293,
	"./de.js": 291,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-au": 296,
	"./en-au.js": 296,
	"./en-ca": 297,
	"./en-ca.js": 297,
	"./en-gb": 298,
	"./en-gb.js": 298,
	"./en-ie": 299,
	"./en-ie.js": 299,
	"./en-il": 300,
	"./en-il.js": 300,
	"./en-in": 301,
	"./en-in.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./en-sg": 303,
	"./en-sg.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 305,
	"./es-do": 306,
	"./es-do.js": 306,
	"./es-mx": 307,
	"./es-mx.js": 307,
	"./es-us": 308,
	"./es-us.js": 308,
	"./es.js": 305,
	"./et": 309,
	"./et.js": 309,
	"./eu": 310,
	"./eu.js": 310,
	"./fa": 311,
	"./fa.js": 311,
	"./fi": 312,
	"./fi.js": 312,
	"./fil": 313,
	"./fil.js": 313,
	"./fo": 314,
	"./fo.js": 314,
	"./fr": 315,
	"./fr-ca": 316,
	"./fr-ca.js": 316,
	"./fr-ch": 317,
	"./fr-ch.js": 317,
	"./fr.js": 315,
	"./fy": 318,
	"./fy.js": 318,
	"./ga": 319,
	"./ga.js": 319,
	"./gd": 320,
	"./gd.js": 320,
	"./gl": 321,
	"./gl.js": 321,
	"./gom-deva": 322,
	"./gom-deva.js": 322,
	"./gom-latn": 323,
	"./gom-latn.js": 323,
	"./gu": 324,
	"./gu.js": 324,
	"./he": 325,
	"./he.js": 325,
	"./hi": 326,
	"./hi.js": 326,
	"./hr": 327,
	"./hr.js": 327,
	"./hu": 328,
	"./hu.js": 328,
	"./hy-am": 329,
	"./hy-am.js": 329,
	"./id": 330,
	"./id.js": 330,
	"./is": 331,
	"./is.js": 331,
	"./it": 332,
	"./it-ch": 333,
	"./it-ch.js": 333,
	"./it.js": 332,
	"./ja": 334,
	"./ja.js": 334,
	"./jv": 335,
	"./jv.js": 335,
	"./ka": 336,
	"./ka.js": 336,
	"./kk": 337,
	"./kk.js": 337,
	"./km": 338,
	"./km.js": 338,
	"./kn": 339,
	"./kn.js": 339,
	"./ko": 340,
	"./ko.js": 340,
	"./ku": 341,
	"./ku.js": 341,
	"./ky": 342,
	"./ky.js": 342,
	"./lb": 343,
	"./lb.js": 343,
	"./lo": 344,
	"./lo.js": 344,
	"./lt": 345,
	"./lt.js": 345,
	"./lv": 346,
	"./lv.js": 346,
	"./me": 347,
	"./me.js": 347,
	"./mi": 348,
	"./mi.js": 348,
	"./mk": 349,
	"./mk.js": 349,
	"./ml": 350,
	"./ml.js": 350,
	"./mn": 351,
	"./mn.js": 351,
	"./mr": 352,
	"./mr.js": 352,
	"./ms": 353,
	"./ms-my": 354,
	"./ms-my.js": 354,
	"./ms.js": 353,
	"./mt": 355,
	"./mt.js": 355,
	"./my": 356,
	"./my.js": 356,
	"./nb": 357,
	"./nb.js": 357,
	"./ne": 358,
	"./ne.js": 358,
	"./nl": 359,
	"./nl-be": 360,
	"./nl-be.js": 360,
	"./nl.js": 359,
	"./nn": 361,
	"./nn.js": 361,
	"./oc-lnc": 362,
	"./oc-lnc.js": 362,
	"./pa-in": 363,
	"./pa-in.js": 363,
	"./pl": 364,
	"./pl.js": 364,
	"./pt": 365,
	"./pt-br": 366,
	"./pt-br.js": 366,
	"./pt.js": 365,
	"./ro": 367,
	"./ro.js": 367,
	"./ru": 368,
	"./ru.js": 368,
	"./sd": 369,
	"./sd.js": 369,
	"./se": 370,
	"./se.js": 370,
	"./si": 371,
	"./si.js": 371,
	"./sk": 372,
	"./sk.js": 372,
	"./sl": 373,
	"./sl.js": 373,
	"./sq": 374,
	"./sq.js": 374,
	"./sr": 375,
	"./sr-cyrl": 376,
	"./sr-cyrl.js": 376,
	"./sr.js": 375,
	"./ss": 377,
	"./ss.js": 377,
	"./sv": 378,
	"./sv.js": 378,
	"./sw": 379,
	"./sw.js": 379,
	"./ta": 380,
	"./ta.js": 380,
	"./te": 381,
	"./te.js": 381,
	"./tet": 382,
	"./tet.js": 382,
	"./tg": 383,
	"./tg.js": 383,
	"./th": 384,
	"./th.js": 384,
	"./tk": 385,
	"./tk.js": 385,
	"./tl-ph": 386,
	"./tl-ph.js": 386,
	"./tlh": 387,
	"./tlh.js": 387,
	"./tr": 388,
	"./tr.js": 388,
	"./tzl": 389,
	"./tzl.js": 389,
	"./tzm": 390,
	"./tzm-latn": 391,
	"./tzm-latn.js": 391,
	"./tzm.js": 390,
	"./ug-cn": 392,
	"./ug-cn.js": 392,
	"./uk": 393,
	"./uk.js": 393,
	"./ur": 394,
	"./ur.js": 394,
	"./uz": 395,
	"./uz-latn": 396,
	"./uz-latn.js": 396,
	"./uz.js": 395,
	"./vi": 397,
	"./vi.js": 397,
	"./x-pseudo": 398,
	"./x-pseudo.js": 398,
	"./yo": 399,
	"./yo.js": 399,
	"./zh-cn": 400,
	"./zh-cn.js": 400,
	"./zh-hk": 401,
	"./zh-hk.js": 401,
	"./zh-mo": 402,
	"./zh-mo.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 546;

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(app, navCtrl, db, formBuilder, toastCtrl, alertCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loginForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem('uidwallet', null);
                        localStorage.setItem('pcheck', null);
                        localStorage.setItem('role', null);
                        data = this.loginForm.value;
                        if (!data.username) {
                            return [2 /*return*/];
                        }
                        credentials = {
                            type: "login",
                            username: data.username,
                            password: data.password
                        };
                        return [4 /*yield*/, this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 10];
                                            if (!(data.status === 200)) return [3 /*break*/, 10];
                                            if (!(data.result === 401)) return [3 /*break*/, 1];
                                            this.loginError = "อีเมลหรือชื่อผู้ใช้ไม่ถูกต้อง";
                                            return [3 /*break*/, 10];
                                        case 1:
                                            if (!(data.result === 402)) return [3 /*break*/, 2];
                                            this.loginError = "รหัสผ่านไม่ถูกต้อง";
                                            return [3 /*break*/, 10];
                                        case 2:
                                            _b = (_a = localStorage).setItem;
                                            _c = ['uidwallet'];
                                            return [4 /*yield*/, data.result.user_id];
                                        case 3: return [4 /*yield*/, _b.apply(_a, _c.concat([_k.sent()]))];
                                        case 4:
                                            _k.sent();
                                            _e = (_d = localStorage).setItem;
                                            _f = ['pcheck'];
                                            return [4 /*yield*/, data.result.password];
                                        case 5: return [4 /*yield*/, _e.apply(_d, _f.concat([_k.sent()]))];
                                        case 6:
                                            _k.sent();
                                            _h = (_g = localStorage).setItem;
                                            _j = ['role'];
                                            return [4 /*yield*/, data.result.role];
                                        case 7: return [4 /*yield*/, _h.apply(_g, _j.concat([_k.sent()]))];
                                        case 8:
                                            _k.sent();
                                            return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */])];
                                        case 9:
                                            _k.sent();
                                            _k.label = 10;
                                        case 10: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                localStorage.clear();
                this.app.getRootNavs()[0].setRoot(LoginPage_1);
                return [2 /*return*/];
            });
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\app\app_fridayqrv2\src\pages\login\login.html"*/'<ion-content padding>\n\n    <!-- <div class="header" padding margin-top>\n\n        <h1>QR Wallet</h1>\n\n    </div> -->\n\n    <div class="header" padding margin-top>\n\n        <img src="../../assets/background/logo.png">\n\n    </div>\n\n    <div class="btnsign">\n\n        <form [formGroup]="loginForm" (ngSubmit)="login()">\n\n            <ion-item no-lines>\n\n                <ion-input type="text" formControlName="username"  placeholder="ชื่อผู้ใช้">\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="password" formControlName="password"  placeholder="รหัสผ่าน">\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <div class="error">\n\n                <div class="form-error">{{loginError}}</div>\n\n            </div>\n\n            <button right margin-top ion-button full round type="submit" [disabled]="!loginForm.valid">เข้าสู่ระบบ\n\n            </button>\n\n        </form>\n\n    </div>\n\n\n\n    <!-- <div class="btnform">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col text-center>\n\n                    <p>Powered by Friday Creative</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div> -->\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <div class="bheader" padding margin-top>\n\n      <img src="../../assets/background/bot.png" (click)="reset()">\n\n    </div>\n\n  </ion-footer>\n\n'/*ion-inline-end:"D:\app\app_fridayqrv2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[468]);
//# sourceMappingURL=main.js.map