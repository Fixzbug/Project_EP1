webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announce_announce__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__docslist_docslist__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.icon = this.role === 'USER' ? 'md-document' : 'md-chatbubbles';
        this.titletabs = this.role === 'USER' ? 'ติดตามเอกสาร' : 'ประกาศ';
        if (this.role === "USER") {
            this.RootHome = __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */];
            this.Root = __WEBPACK_IMPORTED_MODULE_6__docslist_docslist__["a" /* DocslistPage */];
            this.RootAccount = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
        }
        else if (this.role === "ADMIN") {
            this.RootHome = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
            this.Root = __WEBPACK_IMPORTED_MODULE_4__announce_announce__["a" /* AnnouncePage */];
            this.RootAccount = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-tabs",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="RootHome" tabTitle="หน้าหลัก" tabIcon="md-home"></ion-tab>\n\n    <ion-tab [root]="Root" [tabTitle]="titletabs" [tabIcon]="icon"></ion-tab>\n\n    <ion-tab [root]="RootAccount" tabTitle="ข้อมูล" tabIcon="md-person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(54);
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

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(15);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, navCtrl, navParams, auth, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.registerForm = formBuilder.group({
            role: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50),
                ],
            ],
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    RegisterPage.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.registerForm.value;
                        credentials = {};
                        if (!data.email && !data.role && !data.name && data.password) {
                            return [2 /*return*/];
                        }
                        if (data.role === "ADMIN" && !data.email.endsWith("@maruyasu.co.th")) {
                            this.notifications("อีเมลไม่ถูกต้อง");
                            return [2 /*return*/];
                        }
                        if (data.role === "USER" && data.email.endsWith("@maruyasu.co.th")) {
                            this.notifications("อีเมลไม่ถูกต้อง");
                            return [2 /*return*/];
                        }
                        if (!data.role) return [3 /*break*/, 2];
                        switch (data.role) {
                            case "USER": {
                                credentials = {
                                    type: "adduser",
                                    role: 'USER',
                                    email: data.email,
                                    password: data.password,
                                    name: data.name,
                                };
                                break;
                            }
                            case "ADMIN": {
                                credentials = {
                                    type: "adduser",
                                    role: 'ADMIN',
                                    email: data.email,
                                    password: data.password,
                                    name: data.name,
                                };
                                break;
                            }
                        }
                        // console.log(credentials);
                        return [4 /*yield*/, this.auth.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 5];
                                            if (!(data.status === 200)) return [3 /*break*/, 3];
                                            if (!data.result) return [3 /*break*/, 2];
                                            this.notifications("ยินดีต้อนรับเข้าสู่ระบบ");
                                            return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */])];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [3 /*break*/, 4];
                                        case 3:
                                            if (data.status === 201) {
                                                this.notifications("อีเมลถูกใช้งานแล้ว");
                                            }
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            this.notifications("อีเมลถูกใช้งานแล้ว");
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (error) {
                                _this.registerError = error.message;
                            })];
                    case 1:
                        // console.log(credentials);
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.btnlogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.notifications = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
                            position: "top",
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\register\register.html"*/'<ion-content padding class="bg">\n\n    <div class="header" padding>\n\n        <h1>สร้างบัญชีผู้ใช้</h1>\n\n    </div>\n\n    <div class="btnsign">\n\n        <form [formGroup]="registerForm" (ngSubmit)="signup()">\n\n\n\n            <ion-item no-lines>\n\n                <ion-label>ประเภท</ion-label>\n\n                <ion-select formControlName="role">\n\n                    <ion-option value="USER">ผู้รับเหมา</ion-option>\n\n                    <ion-option value="ADMIN">official</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="text" formControlName="email" placeholder="อีเมล"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="password" formControlName="password" placeholder="รหัสผ่าน"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="text" formControlName="name" placeholder="ชื่อ-นามสกุล"></ion-input>\n\n            </ion-item>\n\n\n\n            <div class="error">\n\n                <div class="form-error">{{registerError}}</div>\n\n            </div>\n\n\n\n            <button right margin-top ion-button full round type="submit" [disabled]="!registerForm.valid">สมัครสมาชิก</button>\n\n        </form>\n\n    </div>\n\n\n\n\n\n    <div class="btnform">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col text-center>\n\n                    <p padding margin-left>Have account <b (click)="btnlogin()">Login</b></p> \n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__docs_docs__ = __webpack_require__(204);
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
    function HomePage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db
            .getServiceJson({ type: "account", user_id: this.uid })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.username];
                    case 1:
                        _a.username = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    HomePage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "account", user_id: this.uid })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.username];
                                                    case 1:
                                                        _a.username = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5: return [2 /*return*/];
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
    HomePage.prototype.autoRefresh = function () {
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
    HomePage.prototype.ionViewWillEnter = function () {
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
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("ionViewDidLoad AccountPage");
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.menu = function (number) {
        return __awaiter(this, void 0, void 0, function () {
            var pack, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pack = {};
                        _a = number;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 3];
                            case 3: return [3 /*break*/, 5];
                            case 4: return [3 /*break*/, 7];
                            case 5: return [3 /*break*/, 9];
                            case 6: return [3 /*break*/, 11];
                            case 7: return [3 /*break*/, 13];
                            case 8: return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 17];
                    case 1:
                        pack = {
                            title: "เพิ่มเอกสาร",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 3:
                        pack = {
                            title: "การอบรม",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 5:
                        pack = {
                            title: "งานที่สูง",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 7:
                        pack = {
                            title: "งานสารเคมี",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 9:
                        pack = {
                            title: "งานความร้อน",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 11:
                        pack = {
                            title: "งานอับอากาศ",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 13:
                        pack = {
                            title: "รายชื่อบริษัท",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 15:
                        pack = {
                            title: "เพิ่มการติดต่อ",
                            content: "",
                        };
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docs_docs__["a" /* DocsPage */], { data: pack })];
                    case 16:
                        _b.sent();
                        return [3 /*break*/, 18];
                    case 17: return [3 /*break*/, 18];
                    case 18: return [2 /*return*/];
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\home\home.html"*/'<ion-header no-shadow no-border>\n\n  <ion-item no-lines margin-top>\n\n    <ion-thumbnail item-start>\n\n      <img style="border-radius: 50%;" src="../../assets/imgs/safety-first.png">\n\n    </ion-thumbnail>\n\n    <h3>{{ name }}</h3>\n\n    <p>MARUYASU INDUSTRIES (THAILAND) CO. LTD</p>\n\n  </ion-item>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div text-center>\n\n    <img style="border-radius: 16px;" src="../../assets/imgs/re-check.jpg">\n\n  </div>\n\n  <br>\n\n\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(1)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="document" class="card-icon"></ion-icon>\n\n            เพิ่มเอกสาร\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(2)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="school" class="card-icon"></ion-icon>\n\n            การอบรม\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(3)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="construct" class="card-icon"></ion-icon>\n\n            งานที่สูง\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(4)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="flask" class="card-icon"></ion-icon>\n\n            งานสารเคมี\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(5)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="thermometer" class="card-icon"></ion-icon>\n\n            งานความร้อน\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(6)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="cloud" class="card-icon"></ion-icon>\n\n            งานอับอากาศ\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(7)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="people" class="card-icon"></ion-icon>\n\n            รายชื่อบริษัท\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(8)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="call" class="card-icon"></ion-icon>\n\n            เพิ่มการติดต่อ\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workdetail_workdetail__ = __webpack_require__(205);
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
 * Generated class for the DocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocsPage = /** @class */ (function () {
    function DocsPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db, formBuilder, http) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.http = http;
        // menu 3
        this.fileCategories = [{ label: "", selectedFile: null }];
        this.uploadStatus = null;
        this.displayMenu1 = false;
        this.displayMenu2 = false;
        this.displayMenu3 = false;
        this.displayMenu4 = false;
        this.displayMenu5 = false;
        this.displayMenu6 = false;
        this.displayMenu7 = false;
        this.displayMenu8 = false;
        this.statusdoc = false;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.Forms = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            position: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            mobile: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
        });
        this.FormsFolder = this.formBuilder.group({
            folder: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
        });
        // this.title = "เพิ่มเอกสาร";
        this.title = navParams.get("data").title;
        this.menu = "work";
        // Use switch to set the specific displayMenu based on title
        switch (this.title) {
            case "เพิ่มเอกสาร":
                this.displayMenu1 = true;
                this.worktype = 0; // no need
                // เรียกรายการ folder 
                this.db.getServiceJson({
                    "type": "allfolder"
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listfolder = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "การอบรม":
                this.displayMenu2 = true;
                this.worktype = 0; // no need
                this.db.getServiceJson({ "type": "alltrainingadmin" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.traininglist = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานที่สูง":
                this.displayMenu3 = true;
                this.worktype = 1;
                this.db.getServiceJson({
                    "type": "allfileworktypeid",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filework = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type all
                this.db.getServiceJson({
                    "type": "allwork",
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.fileform = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานสารเคมี":
                this.displayMenu4 = true;
                this.worktype = 2;
                this.db.getServiceJson({
                    "type": "allfileworktypeid",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filework = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type all
                this.db.getServiceJson({
                    "type": "allwork",
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.fileform = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานความร้อน":
                this.displayMenu5 = true;
                this.worktype = 3;
                this.db.getServiceJson({
                    "type": "allfileworktypeid",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filework = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type all
                this.db.getServiceJson({
                    "type": "allwork",
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.fileform = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานอับอากาศ":
                this.displayMenu6 = true;
                this.worktype = 4;
                this.db.getServiceJson({
                    "type": "allfileworktypeid",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filework = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type all
                this.db.getServiceJson({
                    "type": "allwork",
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.fileform = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "รายชื่อบริษัท":
                this.displayMenu7 = true;
                this.worktype = 0; // no need
                // ดึงไฟล์รายชื่อมาแสดง
                this.db.getServiceJson({
                    "type": "allfilecompany"
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(data != null)) return [3 /*break*/, 2];
                                if (!(data.status == 200)) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, data.result];
                            case 1:
                                _a.filecompany = _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                break;
            case "เพิ่มการติดต่อ":
                this.displayMenu8 = true;
                this.worktype = 0; // no need
                this.db.getServiceJson({ "type": "allcontacts" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(data != null)) return [3 /*break*/, 3];
                                if (!(data.status == 200)) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, data.result];
                            case 1:
                                _a.contact = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.contact = null;
                                _b.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                break;
        }
    }
    DocsPage.prototype.onSegmentSelect = function (selectedMenu) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, selectedMenu.value];
                    case 1:
                        _a.menu = _b.sent();
                        return [4 /*yield*/, this.autoRefresh()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    this.role = localStorage.getItem("role");
                                    // Use switch to set the specific displayMenu based on title
                                    switch (this.title) {
                                        case "เพิ่มเอกสาร":
                                            this.displayMenu1 = true;
                                            this.worktype = 0; // no need
                                            // เรียกรายการ folder 
                                            this.db.getServiceJson({
                                                "type": "allfolder"
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listfolder = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "การอบรม":
                                            this.displayMenu2 = true;
                                            this.worktype = 0; // no need
                                            this.db.getServiceJson({ "type": "alltrainingadmin" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.traininglist = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานที่สูง":
                                            this.displayMenu3 = true;
                                            this.worktype = 1;
                                            this.db.getServiceJson({
                                                "type": "allfileworktypeid",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filework = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type all
                                            this.db.getServiceJson({
                                                "type": "allwork",
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.fileform = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานสารเคมี":
                                            this.displayMenu4 = true;
                                            this.worktype = 2;
                                            this.db.getServiceJson({
                                                "type": "allfileworktypeid",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filework = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type all
                                            this.db.getServiceJson({
                                                "type": "allwork",
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.fileform = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานความร้อน":
                                            this.displayMenu5 = true;
                                            this.worktype = 3;
                                            this.db.getServiceJson({
                                                "type": "allfileworktypeid",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filework = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type all
                                            this.db.getServiceJson({
                                                "type": "allwork",
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.fileform = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานอับอากาศ":
                                            this.displayMenu6 = true;
                                            this.worktype = 4;
                                            this.db.getServiceJson({
                                                "type": "allfileworktypeid",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filework = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type all
                                            this.db.getServiceJson({
                                                "type": "allwork",
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.fileform = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "รายชื่อบริษัท":
                                            this.displayMenu7 = true;
                                            this.worktype = 0; // no need
                                            // ดึงไฟล์รายชื่อมาแสดง
                                            this.db.getServiceJson({
                                                "type": "allfilecompany"
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            if (!(data != null)) return [3 /*break*/, 2];
                                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                                            _a = this;
                                                            return [4 /*yield*/, data.result];
                                                        case 1:
                                                            _a.filecompany = _b.sent();
                                                            _b.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            break;
                                        case "เพิ่มการติดต่อ":
                                            this.displayMenu8 = true;
                                            this.worktype = 0; // no need
                                            this.db.getServiceJson({ "type": "allcontacts" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            if (!(data != null)) return [3 /*break*/, 3];
                                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                                            _a = this;
                                                            return [4 /*yield*/, data.result];
                                                        case 1:
                                                            _a.contact = _b.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            this.contact = null;
                                                            _b.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            break;
                                    }
                                    return [4 /*yield*/, this.loading.dismiss()];
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
    DocsPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                // console.log("Refresher complete");
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
    DocsPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("ionViewWillEnter");
                    return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        // console.log("ionViewWillEnter");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DocsPage.prototype.lookfile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_5__environment__["a" /* environment */].URL_Work_download + file.filename;
                        return [4 /*yield*/, window.open(url, "_blank")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsPage.prototype.lookdata = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__workdetail_workdetail__["a" /* WorkdetailPage */], { data: file });
                return [2 /*return*/];
            });
        });
    };
    DocsPage.prototype.AddFolder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                data = this.FormsFolder.value;
                if (!data) {
                    return [2 /*return*/];
                }
                this.db.getServiceJson({
                    "type": "addfolder",
                    "folder": data.folder
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.notifications("เพิ่ม folder");
                                this.menu = 'work';
                                this.autoRefresh();
                            }
                            else {
                                this.notifications("เพิ่ม folder ไม่สำเร็จ");
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DocsPage.prototype.lookfolder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // เรียกไฟล์มาแสดงที่ folder นั้นๆ
                    return [4 /*yield*/, this.db.getServiceJson({
                            "type": "allfiles",
                            "folder_id": this.selectedFolderId
                        }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // console.log(data);
                                if (data != null) {
                                    if (data.status == 200) {
                                        this.files = data.result;
                                    }
                                }
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        // เรียกไฟล์มาแสดงที่ folder นั้นๆ
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Log status function
    DocsPage.prototype.updatestatusdoc = function (data, training_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.training_id = training_id;
                this.statusdoc = !this.statusdoc;
                if (data.training_id == this.training_id) {
                    this.db.getServiceJson({
                        "type": "alldocslistbycodegen",
                        "codegen": data.codegen
                    }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            // console.log(data);
                            if (data != null) {
                                if (data.status == 200) {
                                    // console.log(data.result);
                                    this.reportActivity = data.result.status_work1 == 'Approve' ? true : false;
                                    this.waitingForReview = data.result.status_work2 == 'Approve' ? true : false;
                                    this.waitingForApproval = data.result.status_work3 == 'Approve' ? true : false;
                                    this.approved = data.result.status_work4 == 'Approve' ? true : false;
                                    this.noapproved = data.result.status_work5 == 'Approve' ? true : false;
                                    this.remarks = data.result.remarks;
                                    // this.notifications("อัพเดทสถานะสำเร็จ");
                                }
                                else {
                                    this.notifications("เรียกสถานะไม่สำเร็จ");
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    DocsPage.prototype.logStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log(data);
                    return [4 /*yield*/, this.db.getServiceJson({
                            "type": "updatestatuswork",
                            "codegen": data.codegen,
                            "status_work1": this.reportActivity == true ? 'Approve' : 'Pending',
                            "status_work2": this.waitingForReview == true ? 'Approve' : 'Pending',
                            "status_work3": this.waitingForApproval == true ? 'Approve' : 'Pending',
                            "status_work4": this.approved == true ? 'Approve' : 'Pending',
                            "status_work5": this.noapproved == true ? 'Approve' : 'Pending',
                            "remarks": this.remarks
                        }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 3];
                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                        this.notifications("อัพเดทสถานะสำเร็จ");
                                        return [4 /*yield*/, this.autoRefresh()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.notifications("อัพเดทสถานะไม่สำเร็จ");
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // console.log(data);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsPage.prototype.deletetraining = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการลบ" + this.title + "หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ลบ",
                                    handler: function () {
                                        _this.db.getServiceJson({
                                            "type": "deletetraining",
                                            "training_id": file.training_id,
                                            "codegen": file.codegen
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                if (file.file_id == null) {
                                                    _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                    _this.traininglist = null;
                                                    _this.autoRefresh();
                                                }
                                                else {
                                                    _this.db.getServiceJson({
                                                        "type": "deletefiletraining",
                                                        "file_id": file.file_id
                                                    }).then(function (data) {
                                                        // console.log(data);
                                                        if (data.status == 200) {
                                                            if (file == null) {
                                                                _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                                _this.traininglist = null;
                                                                _this.autoRefresh();
                                                            }
                                                            else {
                                                                _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                                _this.traininglist = null;
                                                                _this.autoRefresh();
                                                            }
                                                        }
                                                        else {
                                                            _this.notifications("ยกเลิกการเข้าอบรมไม่สำเร็จ");
                                                        }
                                                    });
                                                }
                                            }
                                            else {
                                                _this.notifications("ยกเลิกการเข้าอบรมไม่สำเร็จ");
                                            }
                                        });
                                    }
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
    // menu 8
    DocsPage.prototype.AddContact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subTitle: "เพิ่มข้อมูล" + this.title,
                            message: "เพิ่มข้อมูล" + this.title + "ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var data = _this.Forms.value;
                                        // console.log(data);
                                        _this.db.getServiceJson({
                                            "type": "newContact",
                                            "name": data.name,
                                            "position": data.position,
                                            "mobile": data.mobile,
                                            "email": data.email,
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("อัพโหลดสำเร็จ");
                                                _this.menu = 'title';
                                            }
                                            else {
                                                _this.notifications("อัพโหลดไม่สำเร็จ");
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
    DocsPage.prototype.deletework = function (file, work_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการลบ" + this.title + "หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ลบ",
                                    handler: function () {
                                        _this.db.getServiceJson({
                                            "type": "deletework",
                                            "work_id": work_id,
                                            "codegen": file.codegen
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("ลบเอกสารสำเร็จ");
                                                _this.menu = 'work';
                                                _this.filework = null;
                                            }
                                            else {
                                                _this.notifications("ลบเอกสารไม่สำเร็จ");
                                            }
                                        });
                                    }
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
    DocsPage.prototype.deletecontact = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subTitle: "ลบข้อมูล" + this.title,
                            message: "เพิ่มข้อมูล" + this.title + "ใช่หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        // console.log(data);
                                        _this.db.getServiceJson({
                                            "type": "deletecontact",
                                            "contact_id": data.contact_id
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("ลบสำเร็จ");
                                                _this.menu = 'work';
                                            }
                                            else {
                                                _this.notifications("ลบไม่สำเร็จ");
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
    DocsPage.prototype.deletefile = function (work_type_db, file_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการลบไฟล์หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ลบ",
                                    handler: function () {
                                        if (work_type_db == 'deletefile_files') {
                                            _this.db.getServiceJson({
                                                "type": "deletefiles",
                                                "file_id": file_id
                                            }).then(function (data) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    _this.notifications("ลบเอกสารสำเร็จ");
                                                    _this.files = null;
                                                    _this.menu = 'work';
                                                }
                                                else {
                                                    _this.notifications("ลบเอกสารไม่สำเร็จ");
                                                }
                                            });
                                        }
                                        else if (work_type_db == 'deletefile_form') {
                                            _this.db.getServiceJson({
                                                "type": "deletefileform",
                                                "file_id": file_id
                                            }).then(function (data) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    _this.notifications("ลบเอกสารสำเร็จ");
                                                    _this.fileform = null;
                                                    _this.menu = 'work';
                                                }
                                                else {
                                                    _this.notifications("ลบเอกสารไม่สำเร็จ");
                                                }
                                            });
                                        }
                                        else if (work_type_db == 'deletefile_work') {
                                        }
                                        else if (work_type_db == 'deletefile_company') {
                                            _this.db.getServiceJson({
                                                "type": "deletefilecompany",
                                                "file_id": file_id
                                            }).then(function (data) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    _this.notifications("ลบเอกสารสำเร็จ");
                                                    _this.filecompany = null;
                                                    _this.autoRefresh(); // ใช้ได้เพราะไม่มี tabs
                                                }
                                                else {
                                                    _this.notifications("ลบเอกสารไม่สำเร็จ");
                                                }
                                            });
                                        }
                                    }
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
    // ฟังก์ชันเมื่อมีการเลือกไฟล์
    DocsPage.prototype.onFileSelected = function (event, index) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event.target.files[0]];
                    case 1:
                        file = _a.sent();
                        if (file && file.type === "application/pdf") {
                            this.fileCategories[index].selectedFile = file;
                        }
                        else {
                            this.notifications("กรุณาเลือกไฟล์ PDF เท่านั้น");
                            this.fileCategories[index].selectedFile = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ฟังก์ชันอัปโหลดไฟล์
    DocsPage.prototype.uploadFiles = function (work_type_db) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subTitle: "อัพโหลดไฟล์",
                            message: "อัพโหลดไฟล์ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var formData = new FormData();
                                        // วนลูปเพิ่มไฟล์ที่ถูกเลือกลงใน FormData
                                        _this.fileCategories.forEach(function (category, index) {
                                            if (category.selectedFile) {
                                                formData.append("files[" + index + "]", category.selectedFile, category.selectedFile.name);
                                            }
                                        });
                                        if (work_type_db == 'addfile_files') {
                                            // console.log(this.selectedFolderId);
                                            formData.append("user_id", _this.uid.toString());
                                            formData.append("work_type_db", work_type_db);
                                            formData.append("folder_id", _this.selectedFolderId);
                                        }
                                        else if (work_type_db == 'addfile_form') {
                                            if (_this.fileform) {
                                                _this.notifications('กรุณาลบไฟล์ก่อนหน้าเพื่อทำการอัพโหลดใหม่');
                                                return;
                                            }
                                            else {
                                                formData.append("user_id", _this.uid.toString());
                                                formData.append("work_type_db", work_type_db);
                                                formData.append("work_type_id", _this.worktype.toString());
                                            }
                                        }
                                        else if (work_type_db == 'addfile_work') {
                                            formData.append("user_id", _this.uid.toString());
                                            formData.append("work_type_db", work_type_db);
                                            formData.append("work_type_id", _this.worktype.toString());
                                        }
                                        else if (work_type_db == 'addfile_company') {
                                            formData.append("user_id", _this.uid.toString());
                                            formData.append("work_type_db", work_type_db);
                                        }
                                        if (!formData.has("files[0]") && !formData.has("files[1]") && !formData.has("files[2]")) {
                                            _this.notifications("กรุณาเลือกไฟล์อย่างน้อยหนึ่งไฟล์ก่อนอัปโหลด");
                                            return;
                                        }
                                        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
                                        headers.append("Accept", "application/json");
                                        // ส่งคำร้อง HTTP POST ไปยัง API สำหรับอัปโหลด
                                        _this.http.post(__WEBPACK_IMPORTED_MODULE_5__environment__["a" /* environment */].URL_Work_upload, formData, { headers: headers, }).subscribe(function (response) {
                                            console.log(response[0]);
                                            if (response[0].status === "error") {
                                                _this.notifications("มีไฟล์ชื่อนี้อยู่แล้ว");
                                            }
                                            else {
                                                _this.notifications("อัปโหลดไฟล์เรียบร้อย");
                                                if (work_type_db == 'addfile_files') {
                                                    _this.autoRefresh();
                                                }
                                                else if (work_type_db == 'addfile_form') {
                                                    _this.autoRefresh();
                                                }
                                                else if (work_type_db == 'addfile_work') {
                                                }
                                                else if (work_type_db == 'addfile_company') {
                                                    _this.autoRefresh();
                                                }
                                                // เคลียร์ไฟล์ในตัวแปรหลังอัปโหลด
                                                _this.fileCategories.forEach(function (category) {
                                                    category.selectedFile = null; // หรือ undefined
                                                });
                                            }
                                        }, function (error) {
                                            _this.notifications("เกิดข้อผิดพลาดในการอัปโหลดไฟล์");
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
    DocsPage.prototype.notifications = function (text) {
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
    DocsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-docs",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\docs\docs.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title text-center>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="displayMenu1">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        เพิ่มเอกสาร\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        เอกสาร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <form [formGroup]="FormsFolder" (ngSubmit)="AddFolder()">\n\n          <ion-item>\n\n            <ion-label stacked><ion-icon name="md-folder"></ion-icon> Folder</ion-label>\n\n            <ion-input type="text" formControlName="folder" placeholder="Folder Name"></ion-input>\n\n          </ion-item>\n\n          <button margin-top ion-button full round type="submit" [disabled]="!FormsFolder.valid"><ion-icon margin-right\n\n              name="md-folder"></ion-icon>บันทึกข้อมูล</button>\n\n        </form>\n\n\n\n        <div class="menu">\n\n          <ion-label><ion-icon margin-right name="md-cloud-download"></ion-icon>อัพโหลดเอกสาร</ion-label>\n\n\n\n          <ion-item>\n\n            <ion-label> เลือก Folder</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFolderId">\n\n              <ion-option *ngFor="let item of listfolder; let i = index;"\n\n                value="{{item.folder_id}}">{{item.folder_name}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <br>\n\n\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'addfile_files\')"><ion-icon margin-right\n\n                name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu" margin-top>\n\n          <h3 margin-right text-left><ion-icon name="md-cloud-download"></ion-icon> รายการ Folder\n\n          </h3>\n\n\n\n          <ion-item>\n\n            <ion-label> เลือก Folder</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFolderId">\n\n              <ion-option *ngFor="let item of listfolder; let i = index;"\n\n                value="{{item.folder_id}}">{{item.folder_name}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <button ion-button full round margin-top (click)="lookfolder()"><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon> ดูไฟล์</button>\n\n\n\n          <h3 margin-right text-left><ion-icon name="md-cloud-download"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n          </h3>\n\n          <div *ngIf="files">\n\n            <ion-card *ngFor="let file of files">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                    name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletefile(\'deletefile_files\',file.file_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบทั้งหมด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!files">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ไม่พบข้อมูลการจอง</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu2">\n\n    <div class="menus">\n\n      <ion-card *ngFor="let data of traininglist;let i = index;" padding>\n\n        <h5><b>ID Number : </b>{{ data.codegen }}</h5>\n\n        <h5><b>บริษัท : </b>{{ data.company }}</h5>\n\n        <h5><b>จำนวนคน : </b>{{ data.personamounts }}</h5>\n\n        <h5><b>วันที่อบรม : </b>{{ data.trainingdate | date: \'dd/MM/yyyy\' }}</h5>\n\n        <h5><b>เวลาอบรม : </b>{{ data.trainingdate | date:"HH:mm:ss" }}</h5>\n\n        <h5><b>หมายเหตุ : </b>{{ data.note }}</h5>\n\n        <h5><b>แนบไฟล์รายชื่อ : </b>{{ data.file_id == null ? \'ยังไม่แนบไฟล์รายชื่อ\' : data.filename }}</h5>\n\n\n\n        <button *ngIf="data.file_id" ion-button margin-top full round color="dark" (click)="lookfile(data)"><ion-icon\n\n            margin-right name="md-cloud-upload"></ion-icon> ดูไฟล์</button>\n\n\n\n        <hr>\n\n        <button padding margin-top ion-button full round color="primary" (click)="updatestatusdoc(data,data.training_id)"><ion-icon\n\n            margin-right name="md-checkbox"></ion-icon>อัพเดจสถานะการเข้าอบรม</button>\n\n\n\n        <div *ngIf="statusdoc == true && data.training_id == training_id" margin-top>\n\n\n\n          <ion-item no-lines>\n\n            <ion-label>อนุมัติ</ion-label>\n\n            <ion-checkbox color="danger" [checked]="approved" (click)="logStatus(data,approved = !approved)">\n\n            </ion-checkbox>\n\n          </ion-item>\n\n\n\n          <ion-item no-lines>\n\n            <ion-label>ไม่อนุมัติ</ion-label>\n\n            <ion-checkbox color="danger" [checked]="noapproved" (click)="logStatus(data,noapproved = !noapproved)">\n\n            </ion-checkbox>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked>หมายเหตุ</ion-label>\n\n            <ion-input type="text" [(ngModel)]="remarks" placeholder="หมายเหตุ"></ion-input>\n\n          </ion-item>\n\n        </div>\n\n\n\n        <hr>\n\n        <button padding margin-top ion-button full round color="danger" (click)="deletetraining(data)"><ion-icon\n\n            margin-right name="md-close-circle"></ion-icon>ยกเลิกการเข้าอบรม</button>\n\n\n\n      </ion-card>\n\n      <div *ngIf="!traininglist">\n\n        <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu3">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        {{ title }}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        เอกสาร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา\n\n          </h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button margin-top padding ion-button full round color="dark" (click)="lookdata(file)"><ion-icon\n\n                    margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบทั้งหมด</button>\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <ion-label><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</ion-label>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'addfile_form\')"><ion-icon margin-right\n\n                name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n          </h3>\n\n          <div *ngIf="fileform">\n\n            <ion-card *ngFor="let file of fileform">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                    name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletefile(\'deletefile_form\',file.file_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบไฟล์</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!fileform">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu4">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        {{ title }}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        เอกสาร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา\n\n          </h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button margin-top padding ion-button full round color="dark" (click)="lookdata(file)"><ion-icon\n\n                    margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบทั้งหมด</button>\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <ion-label><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</ion-label>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'addfile_form\')"><ion-icon margin-right\n\n                name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n          </h3>\n\n          <div *ngIf="fileform">\n\n            <ion-card *ngFor="let file of fileform">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                    name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletefile(\'deletefile_form\',file.file_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบไฟล์</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!fileform">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu5">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        {{ title }}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        เอกสาร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา\n\n          </h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button margin-top padding ion-button full round color="dark" (click)="lookdata(file)"><ion-icon\n\n                    margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบทั้งหมด</button>\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <ion-label><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</ion-label>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'addfile_form\')"><ion-icon margin-right\n\n                name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n          </h3>\n\n          <div *ngIf="fileform">\n\n            <ion-card *ngFor="let file of fileform">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                    name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletefile(\'deletefile_form\',file.file_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบไฟล์</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!fileform">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu6">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        {{ title }}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        เอกสาร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา\n\n          </h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button margin-top padding ion-button full round color="dark" (click)="lookdata(file)"><ion-icon\n\n                    margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบทั้งหมด</button>\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <ion-label><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</ion-label>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'addfile_form\')"><ion-icon margin-right\n\n                name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n          </h3>\n\n          <div *ngIf="fileform">\n\n            <ion-card *ngFor="let file of fileform">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                    name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletefile(\'deletefile_form\',file.file_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบไฟล์</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!fileform">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu7">\n\n    <div class="menu">\n\n      <ion-label><ion-icon margin-right name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารรายชื่อบริษัท</ion-label>\n\n      <div *ngFor="let file of fileCategories; let i = index">\n\n        <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n        <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n        <ng-template #noFileSelected>\n\n          <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n        </ng-template>\n\n        <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n            name="md-add"></ion-icon> เลือกไฟล์</button>\n\n        <button ion-button full round margin-top (click)="uploadFiles(\'addfile_company\')"><ion-icon margin-right\n\n            name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n      </div>\n\n    </div>\n\n    <div class="menu" margin-top>\n\n      <h3 margin-right text-left><ion-icon name="md-checkbox"></ion-icon> รายการเอกสารที่อัพโหลดแล้ว\n\n      </h3>\n\n      <div *ngIf="filecompany">\n\n        <ion-card *ngFor="let file of filecompany">\n\n          <ion-item>\n\n            <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n            <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n            <button padding ion-button full round color="dark" (click)="lookfile(file)"><ion-icon margin-right\n\n                name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n            <hr>\n\n            <button padding margin-top ion-button full round color="danger"\n\n              (click)="deletefile(\'deletefile_company\',file.file_id)"><ion-icon margin-right\n\n                name="md-trash"></ion-icon>ลบไฟล์</button>\n\n          </ion-item>\n\n        </ion-card>\n\n      </div>\n\n      <div *ngIf="!filecompany">\n\n        <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="displayMenu8">\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        กรอกข้อมูลการติดต่อ\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        รายการข้อมูลการติดต่อ\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menu" margin-top>\n\n          <h5 text-left><ion-icon margin-right name="md-card"></ion-icon>กรอกข้อมูลการติดต่อ</h5>\n\n          <form [formGroup]="Forms" (ngSubmit)="AddContact()">\n\n            <ion-item>\n\n              <ion-label stacked><ion-icon name="md-person"></ion-icon> ชื่อ</ion-label>\n\n              <ion-input type="text" formControlName="name" placeholder="ชื่อ"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked><ion-icon name="md-briefcase"></ion-icon> ตำแหน่ง</ion-label>\n\n              <ion-input type="text" formControlName="position" placeholder="ตำแหน่ง"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked><ion-icon name="md-call"></ion-icon> เบอร์โทรศัพท์</ion-label>\n\n              <ion-input type="tel" formControlName="mobile" placeholder="เบอร์โทรศัพท์"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked><ion-icon name="md-mail"></ion-icon> อีเมล</ion-label>\n\n              <ion-input type="email" formControlName="email" placeholder="อีเมล"></ion-input>\n\n            </ion-item>\n\n            <div class="error">\n\n              <div class="form-error">{{formError}}</div>\n\n            </div>\n\n            <button margin-top ion-button full round type="submit" [disabled]="!Forms.valid"><ion-icon margin-right\n\n                name="md-person-add"></ion-icon>บันทึกข้อมูล</button>\n\n          </form>\n\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu" margin-top>\n\n          <h5 text-left><ion-icon margin-right name="md-person"></ion-icon>รายการข้อมูลการติดต่อ</h5>\n\n          <ion-card *ngFor="let data of contact" class="contacts">\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="md-person"></ion-icon> เจ้าหน้าที่ชื่อ\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="data.name" placeholder="ชื่อ" disabled="true"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="md-briefcase"></ion-icon> ตำแหน่ง\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="data.position" placeholder="ตำแหน่ง" disabled="true"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="md-call"></ion-icon> เบอร์โทรศัพท์\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="data.mobile" disabled="true"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="md-mail"></ion-icon> อีเมล\n\n              </ion-label>\n\n              <ion-input type="email" [(ngModel)]="data.email" disabled="true"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <button padding ion-button full round color="danger" (click)="deletecontact(data)"><ion-icon margin-right\n\n                  name="md-trash"></ion-icon>ลบข้อการติดต่อ</button>\n\n            </ion-item>\n\n          </ion-card>\n\n          <div *ngIf="!contact">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\docs\docs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], DocsPage);
    return DocsPage;
}());

//# sourceMappingURL=docs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment__ = __webpack_require__(54);
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
 * Generated class for the WorkdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkdetailPage = /** @class */ (function () {
    function WorkdetailPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db, formBuilder, http) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.http = http;
        this.fileCategories = [{ label: "", selectedFile: null }];
        this.uploadStatus = null;
        this.displayMenu1 = false;
        this.displayMenu2 = false;
        this.displayMenu3 = false;
        this.displayMenu4 = false;
        this.displayMenu5 = false;
        this.displayMenu6 = false;
        this.displayMenu7 = false;
        this.displayMenu8 = false;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.data = navParams.get("data");
        this.menu = "docs";
        // console.log(this.data);
        switch (this.menu) {
            case "docs":
                this.doclistwork = this.data;
                // console.log(this.doclistwork);
                this.db.getServiceJson({
                    "type": "alldocslistbycodegen",
                    "codegen": this.doclistwork.codegen
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                // console.log(data.result);
                                this.reportActivity = data.result.status_work1 == 'Approve' ? true : false;
                                this.waitingForReview = data.result.status_work2 == 'Approve' ? true : false;
                                this.waitingForApproval = data.result.status_work3 == 'Approve' ? true : false;
                                this.approved = data.result.status_work4 == 'Approve' ? true : false;
                                this.noapproved = data.result.status_work5 == 'Approve' ? true : false;
                                this.remarks = data.result.remarks;
                                // this.notifications("อัพเดทสถานะสำเร็จ");
                            }
                            else {
                                this.notifications("อัพเดทสถานะไม่สำเร็จ");
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "point":
                this.doclistwork = this.data;
                // console.log(this.doclistwork);
                break;
            case "card":
                this.doclistwork = this.data;
                // console.log(this.doclistwork);
                break;
        }
    }
    WorkdetailPage.prototype.onSegmentSelect = function (selectedMenu) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, selectedMenu.value];
                    case 1:
                        _a.menu = _b.sent();
                        this.autoRefresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkdetailPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    this.role = localStorage.getItem("role");
                                    switch (this.menu) {
                                        case "docs":
                                            this.doclistwork = this.data;
                                            this.db.getServiceJson({
                                                "type": "alldocslistbycodegen",
                                                "codegen": this.doclistwork.codegen
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            // console.log(data.result);
                                                            this.reportActivity = data.result.status_work1 == 'Approve' ? true : false;
                                                            this.waitingForReview = data.result.status_work2 == 'Approve' ? true : false;
                                                            this.waitingForApproval = data.result.status_work3 == 'Approve' ? true : false;
                                                            this.approved = data.result.status_work4 == 'Approve' ? true : false;
                                                            this.noapproved = data.result.status_work5 == 'Approve' ? true : false;
                                                            this.remarks = data.result.remarks;
                                                            // this.notifications("อัพเดทสถานะสำเร็จ");
                                                        }
                                                        else {
                                                            this.notifications("อัพเดทสถานะไม่สำเร็จ");
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "point":
                                            this.doclistwork = this.data;
                                            // console.log(this.doclistwork);
                                            break;
                                        case "card":
                                            this.doclistwork = this.data;
                                            // console.log(this.doclistwork);
                                            break;
                                    }
                                    return [4 /*yield*/, this.loading.dismiss()];
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
    WorkdetailPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                // console.log("Refresher complete");
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
    WorkdetailPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("ionViewWillEnter");
                    return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        // console.log("ionViewWillEnter");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkdetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // Log status function
    WorkdetailPage.prototype.logStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.getServiceJson({
                            "type": "updatestatuswork",
                            "codegen": this.doclistwork.codegen,
                            "status_work1": this.reportActivity == true ? 'Approve' : 'Pending',
                            "status_work2": this.waitingForReview == true ? 'Approve' : 'Pending',
                            "status_work3": this.waitingForApproval == true ? 'Approve' : 'Pending',
                            "status_work4": this.approved == true ? 'Approve' : 'Pending',
                            "status_work5": this.noapproved == true ? 'Approve' : 'Pending',
                            "remarks": this.remarks
                        }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data != null)) return [3 /*break*/, 3];
                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                        this.notifications("อัพเดทสถานะสำเร็จ");
                                        return [4 /*yield*/, this.autoRefresh()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.notifications("อัพเดทสถานะไม่สำเร็จ");
                                        _a.label = 3;
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
    // menu 3
    WorkdetailPage.prototype.lookfile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_5__environment__["a" /* environment */].URL_Work_download + file;
                        return [4 /*yield*/, window.open(url, "_blank")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkdetailPage.prototype.deletefile = function (menu, file_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการลบไฟล์หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ลบ",
                                    handler: function () {
                                        _this.db.getServiceJson({
                                            "type": "deletefilework",
                                            "file_id": file_id
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("ลบเอกสารสำเร็จ");
                                                if (menu == 'point') {
                                                    _this.menu = 'point';
                                                }
                                                else if (menu == 'card') {
                                                    _this.menu = 'card';
                                                }
                                                _this.navCtrl.pop();
                                            }
                                            else {
                                                _this.notifications("ลบเอกสารไม่สำเร็จ");
                                            }
                                        });
                                    }
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
    // ฟังก์ชันเมื่อมีการเลือกไฟล์
    WorkdetailPage.prototype.onFileSelected = function (event, index) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event.target.files[0]];
                    case 1:
                        file = _a.sent();
                        if (file && file.type === "application/pdf") {
                            this.fileCategories[index].selectedFile = file;
                        }
                        else {
                            this.notifications("กรุณาเลือกไฟล์ PDF เท่านั้น");
                            this.fileCategories[index].selectedFile = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ฟังก์ชันอัปโหลดไฟล์
    WorkdetailPage.prototype.uploadFiles = function (menu, work_type_db, work_id, column) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subTitle: "อัพโหลด",
                            message: "อัพโหลดใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var formData = new FormData();
                                        // วนลูปเพิ่มไฟล์ที่ถูกเลือกลงใน FormData
                                        _this.fileCategories.forEach(function (category, index) {
                                            if (category.selectedFile) {
                                                formData.append("files[" + index + "]", category.selectedFile, category.selectedFile.name);
                                            }
                                        });
                                        if (work_type_db == 'updatefile_work') {
                                            if (menu == 'point') {
                                                if (_this.doclistwork.file_7_name) {
                                                    _this.notifications('กรุณาลบไฟล์ก่อนหน้าเพื่อทำการอัพโหลดใหม่');
                                                    return;
                                                }
                                                else {
                                                    formData.append("user_id", _this.uid.toString());
                                                    formData.append("work_type_db", work_type_db);
                                                    formData.append("work_type_id", _this.doclistwork.work_type_id);
                                                    formData.append("work_id", work_id);
                                                    formData.append("column", column);
                                                }
                                            }
                                            else if (menu == 'card') {
                                                if (_this.doclistwork.file_8_name) {
                                                    _this.notifications('กรุณาลบไฟล์ก่อนหน้าเพื่อทำการอัพโหลดใหม่');
                                                    return;
                                                }
                                                else {
                                                    formData.append("user_id", _this.uid.toString());
                                                    formData.append("work_type_db", work_type_db);
                                                    formData.append("work_type_id", _this.doclistwork.work_type_id);
                                                    formData.append("work_id", work_id);
                                                    formData.append("column", column);
                                                }
                                            }
                                        }
                                        if (!formData.has("files[0]")) {
                                            // ตรวจสอบว่ามีไฟล์ใน FormData หรือไม่
                                            _this.notifications("กรุณาเลือกไฟล์อย่างน้อยหนึ่งไฟล์ก่อนอัปโหลด");
                                            return;
                                        }
                                        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
                                        headers.append("Accept", "application/json");
                                        // ส่งคำร้อง HTTP POST ไปยัง API สำหรับอัปโหลด
                                        _this.http.post(__WEBPACK_IMPORTED_MODULE_5__environment__["a" /* environment */].URL_Work_upload, formData, { headers: headers, }).subscribe(function (response) {
                                            console.log(response[0]);
                                            if (response[0].status === "error") {
                                                _this.notifications("มีไฟล์ชื่อนี้อยู่แล้ว");
                                                _this.autoRefresh();
                                            }
                                            else {
                                                _this.notifications("อัปโหลดไฟล์เรียบร้อย");
                                                if (work_type_db == 'updatefile_work') {
                                                    if (menu == 'point') {
                                                        _this.menu = 'point';
                                                    }
                                                    else if (menu == 'card') {
                                                        _this.menu = 'card';
                                                    }
                                                }
                                                _this.fileCategories.forEach(function (category) {
                                                    category.selectedFile = null;
                                                });
                                                _this.navCtrl.pop();
                                            }
                                        }, function (error) {
                                            _this.notifications("เกิดข้อผิดพลาดในการอัปโหลดไฟล์");
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
    WorkdetailPage.prototype.notifications = function (text) {
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
    WorkdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-workdetail",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\workdetail\workdetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title>รายละเอียดงาน</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n    <ion-segment-button value="docs">\n\n      เอกสารประกอบ\n\n    </ion-segment-button>\n\n    <ion-segment-button value="point">\n\n      คะแนนประเมิน\n\n    </ion-segment-button>\n\n    <ion-segment-button value="card">\n\n      บัตรอนุญาต\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="menu">\n\n    <div *ngSwitchCase="\'docs\'">\n\n      <div class="menu">\n\n        <h3 margin-top text-left><ion-icon margin-right name="md-cloud-download"></ion-icon>เอกสารประกอบอื่นๆ</h3>\n\n        <div *ngIf="doclistwork">\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แผนการทำงาน</h3>\n\n            <ion-item *ngIf="doclistwork.file_1_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_1_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_1_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_1)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_1_name">\n\n              <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>รายชื่อผู้ปฏิบัติงาน\n\n            </h3>\n\n            <ion-item *ngIf="doclistwork.file_2_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_2_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_2_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_2)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_2_name">\n\n               <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบ Certificate</h3>\n\n            <ion-item *ngIf="doclistwork.file_3_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_3_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_3_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_3)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_3_name">\n\n               <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ผลตรวจสุขภาพ</h3>\n\n            <ion-item *ngIf="doclistwork.file_4_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_4_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_4_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_4)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_4_name">\n\n               <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบรับรองเครื่องจักร\n\n            </h3>\n\n            <ion-item *ngIf="doclistwork.file_5_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_5_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_5_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_5)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_5_name">\n\n               <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แบบฟอร์มขออนุญาตทำงาน\n\n            </h3>\n\n            <ion-item *ngIf="doclistwork.file_6_name">\n\n              <p>ชื่อไฟล์ : {{ doclistwork.file_6_name }}</p>\n\n              <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_6_name)"><ion-icon\n\n                  margin-right name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n              <hr>\n\n              <button padding margin-top ion-button full round color="danger"\n\n                (click)="deletefile(doclistwork.file_6)"><ion-icon margin-right\n\n                  name="md-document"></ion-icon>ลบไฟล์</button>\n\n            </ion-item>\n\n            <ion-item *ngIf="!doclistwork.file_6_name">\n\n               <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n            </ion-item>\n\n          </ion-card>\n\n        </div>\n\n\n\n        <div *ngIf="!doclistwork">\n\n          <p text-center>ยังไม่มีไฟล์ในระบบ</p>\n\n        </div>\n\n\n\n        <h3 text-left><ion-icon margin-right name="md-checkbox"></ion-icon>การติดตามสถานะ ID Number: {{\n\n          doclistwork.codegen }}\n\n        </h3>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label>รายงานกิจกรรม</ion-label>\n\n          <ion-checkbox color="danger" [checked]="reportActivity" (click)="logStatus(reportActivity = !reportActivity)">\n\n          </ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label>รอตรวจสอบเอกสาร</ion-label>\n\n          <ion-checkbox color="danger" [checked]="waitingForReview"\n\n            (click)="logStatus(waitingForReview = !waitingForReview)">\n\n          </ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label>รออนุมัติ</ion-label>\n\n          <ion-checkbox color="danger" [checked]="waitingForApproval"\n\n            (click)="logStatus(waitingForApproval = !waitingForApproval)">\n\n          </ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label>อนุมัติ</ion-label>\n\n          <ion-checkbox color="danger" [checked]="approved" (click)="logStatus(approved = !approved)">\n\n          </ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n          <ion-label>ไม่อนุมัติ</ion-label>\n\n          <ion-checkbox color="danger" [checked]="noapproved" (click)="logStatus(noapproved = !noapproved)">\n\n          </ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>หมายเหตุ</ion-label>\n\n          <ion-input type="text" [(ngModel)]="remarks" placeholder="หมายเหตุ"></ion-input>\n\n        </ion-item>\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'point\'">\n\n      <div class="menu">\n\n        <div *ngFor="let file of fileCategories; let i = index">\n\n          <ion-label><ion-icon name="md-cloud-upload"></ion-icon>\n\n            อัพโหลดเอกสารประเมินคะแนน</ion-label>\n\n          <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n          <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n          <ng-template #noFileSelected>\n\n            <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n          </ng-template>\n\n          <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n              name="md-add"></ion-icon> เลือกไฟล์</button>\n\n          <button ion-button full round margin-top\n\n            (click)="uploadFiles(\'point\',\'updatefile_work\',doclistwork.work_id, \'file_7\')"><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n        </div>\n\n      </div>\n\n\n\n      <div class="menu">\n\n        <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เอกสารประเมินคะแนน\n\n        </h3>\n\n\n\n\n\n        <ion-card *ngIf="doclistwork.file_7_name">\n\n          <ion-item>\n\n            <h3>ชื่อไฟล์ : {{ doclistwork.file_7_name }}</h3>\n\n            <p>อัพเดตล่าสุด : {{ doclistwork.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n            <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_7_name)"><ion-icon\n\n                margin-right name="md-cloud-download"></ion-icon>ดูไฟล์</button>\n\n\n\n            <hr>\n\n            <button padding margin-top ion-button full round color="danger"\n\n              (click)="deletefile(\'point\',doclistwork.file_7)"><ion-icon margin-right\n\n                name="md-trash"></ion-icon>ลบไฟล์</button>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n        <ion-item *ngIf="!doclistwork.file_7_name" no-lines>\n\n          <h5 text-center><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h5>\n\n        </ion-item>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'card\'">\n\n\n\n      <div class="menu">\n\n        <div *ngFor="let file of fileCategories; let i = index">\n\n          <ion-label><ion-icon name="md-cloud-upload"></ion-icon>\n\n            อัพโหลดบัตรอนุญาตเข้าทำงาน</ion-label>\n\n          <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n          <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n          <ng-template #noFileSelected>\n\n            <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n          </ng-template>\n\n          <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n              name="md-add"></ion-icon> เลือกไฟล์</button>\n\n          <button ion-button full round margin-top\n\n            (click)="uploadFiles(\'card\',\'updatefile_work\',doclistwork.work_id,\'file_8\')"><ion-icon margin-right\n\n              name="md-cloud-upload"></ion-icon> อัปโหลดไฟล์</button>\n\n        </div>\n\n      </div>\n\n\n\n      <div class="menu">\n\n        <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เอกสารบัตรอนุญาตเข้าทำงาน\n\n        </h3>\n\n\n\n        <ion-card *ngIf="doclistwork.file_8_name">\n\n          <ion-item>\n\n            <h3>ชื่อไฟล์ : {{ doclistwork.file_8_name }}</h3>\n\n            <p>อัพเดตล่าสุด : {{ doclistwork.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n            <button padding ion-button full round color="dark" (click)="lookfile(doclistwork.file_8_name)"><ion-icon\n\n                margin-right name="md-cloud-download"></ion-icon>ดูไฟล์</button>\n\n            <hr>\n\n            <button padding margin-top ion-button full round color="danger"\n\n              (click)="deletefile(\'card\',doclistwork.file_8)"><ion-icon margin-right\n\n                name="md-trash"></ion-icon>ลบไฟล์</button>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n        <ion-item *ngIf="!doclistwork.file_8_name" no-lines>\n\n          <h5 text-center><ion-icon name="md-alert"></ion-icon>ไม่พบเอกสาร</h5>\n\n        </ion-item>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\workdetail\workdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], WorkdetailPage);
    return WorkdetailPage;
}());

//# sourceMappingURL=workdetail.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
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
        this.uid = localStorage.getItem("uidmitwork");
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
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _e.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.username];
                    case 2:
                        _b.username = _e.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.password];
                    case 3:
                        _c.password = _e.sent();
                        _d = this;
                        return [4 /*yield*/, data.result.name];
                    case 4:
                        _d.name = _e.sent();
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
                                    this.uid = localStorage.getItem("uidmitwork");
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
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _e.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.username];
                                                    case 2:
                                                        _b.username = _e.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 3:
                                                        _c.password = _e.sent();
                                                        _d = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 4:
                                                        _d.name = _e.sent();
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
                                var _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 4];
                                            if (!(data.status == 200)) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, data.result.email];
                                        case 1:
                                            _a.email = _d.sent();
                                            _b = this;
                                            return [4 /*yield*/, data.result.password];
                                        case 2:
                                            _b.password = _d.sent();
                                            _c = this;
                                            return [4 /*yield*/, data.result.name];
                                        case 3:
                                            _c.name = _d.sent();
                                            _d.label = 4;
                                        case 4: return [2 /*return*/];
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
                            // title: '<img src="../../assets/background/logo.png" />',
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
                                            name: _this.name,
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
                            // title: '<img src="../../assets/background/logo.png" />',
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
            selector: "page-account",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\account\account.html"*/'<ion-header no-shadow no-border>\n\n  <ion-item no-lines margin-top>\n\n    <ion-thumbnail item-start>\n\n      <img style="border-radius: 50%;" src="../../assets/imgs/safety-first.png">\n\n    </ion-thumbnail>\n\n    <h3>{{ name }}</h3>\n\n    <p>MARUYASU INDUSTRIES (THAILAND) CO. LTD</p>\n\n  </ion-item>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n  \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>ตำแหน่ง</ion-label>\n\n    <ion-input type="text" [(ngModel)]="role" disabled></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label stacked>อีเมล</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email" disabled></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>ชื่อ</ion-label>\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>รหัสผ่าน</ion-label>\n\n    <ion-input type="text" [(ngModel)]="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <br>\n\n  <button no-lines (click)="updateprofile()" ion-item>\n\n    <ion-label>อัพเดทรหัสผ่าน</ion-label>\n\n  </button>\n\n  <br>\n\n  <small text-center padding>*หลังจากการอัพเดทรหัสผ่านต้องทำการออกจากระบบทุกครั้ง</small>\n\n\n\n  <button right margin-top ion-button full round (click)="logout()">ออกจากระบบ</button>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\account\account.html"*/,
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
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
 * Generated class for the AnnouncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncePage = /** @class */ (function () {
    function AnnouncePage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db, formBuilder) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db
            .getServiceJson({ type: "account", user_id: this.uid })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.db.getServiceJson({ type: "allannounce" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(data);
                if (data != null) {
                    if (data.status == 200) {
                        this.acc = data.result.announce_content;
                    }
                }
                return [2 /*return*/];
            });
        }); });
        this.Forms = formBuilder.group({
            anndata: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
    }
    AnnouncePage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "account", user_id: this.uid })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.db
                                            .getServiceJson({ type: "allannounce" })
                                            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                // console.log(data);
                                                if (data != null) {
                                                    if (data.status == 200) {
                                                        this.acc = data.result.announce_content;
                                                    }
                                                }
                                                return [2 /*return*/];
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
    AnnouncePage.prototype.autoRefresh = function () {
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
    AnnouncePage.prototype.ionViewWillEnter = function () {
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
    AnnouncePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("ionViewDidLoad AnnouncePage");
                return [2 /*return*/];
            });
        });
    };
    AnnouncePage.prototype.AddAnnounce = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            // title: '<img src="../../assets/imgs/folder.png" />',
                            subTitle: "อัพโหลดประกาศ",
                            message: "อัพโหลดประกาศใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var data = _this.Forms.value;
                                        // console.log(data.anndata);
                                        _this.db
                                            .getServiceJson({
                                            type: "announce",
                                            data: data.anndata,
                                        })
                                            .then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("อัพโหลดสำเร็จ");
                                                _this.autoRefresh();
                                            }
                                            else {
                                                _this.notifications("อัพโหลดไม่สำเร็จ");
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
    AnnouncePage.prototype.notifications = function (text) {
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
    AnnouncePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-announce",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\announce\announce.html"*/'<ion-header no-shadow no-border>\n\n  <ion-item no-lines margin-top>\n\n    <ion-thumbnail item-start>\n\n      <img style="border-radius: 50%;" src="../../assets/imgs/safety-first.png">\n\n    </ion-thumbnail>\n\n    <h3>{{ name }}</h3>\n\n    <p>MARUYASU INDUSTRIES (THAILAND) CO. LTD</p>\n\n  </ion-item>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div text-center>\n\n    <img style="border-radius: 16px;" src="../../assets/imgs/re-check.jpg">\n\n  </div>\n\n  \n\n  <div class="acc">\n\n    <h3 padding text-left>ประกาศ : {{ acc }}</h3>\n\n  </div>\n\n\n\n  <form [formGroup]="Forms" (ngSubmit)="AddAnnounce()">\n\n\n\n    <ion-item>\n\n      <ion-label stacked>กรอกประกาศ</ion-label>\n\n      <ion-input type="text" formControlName="anndata" placeholder="ประกาศ">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <div class="error">\n\n      <div class="form-error">{{FormsError}}</div>\n\n    </div>\n\n    <button  margin-top ion-button full round type="submit" [disabled]="!Forms.valid">อัพโหลดประกาศ</button>\n\n  </form>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\announce\announce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AnnouncePage);
    return AnnouncePage;
}());

//# sourceMappingURL=announce.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__docsuser_docsuser__ = __webpack_require__(209);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db.getServiceJson({ type: "account", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    UserPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db.getServiceJson({ type: "account", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5: return [2 /*return*/];
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
    UserPage.prototype.autoRefresh = function () {
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
    UserPage.prototype.ionViewWillEnter = function () {
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
    UserPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("ionViewDidLoad UserPage");
                return [2 /*return*/];
            });
        });
    };
    UserPage.prototype.menu = function (number) {
        return __awaiter(this, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (number) {
                            case 1:
                                title = "รายชื่อบริษัท";
                                break;
                            case 2:
                                title = "การอบรม";
                                break;
                            case 3:
                                title = "งานที่สูง";
                                break;
                            case 4:
                                title = "งานความร้อน";
                                break;
                            case 5:
                                title = "งานอับอากาศ";
                                break;
                            case 6:
                                title = "งานสารเคมี";
                                break;
                            case 7:
                                title = "ติดต่อSafety";
                                break;
                        }
                        if (!title) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__docsuser_docsuser__["a" /* DocsuserPage */], { data: { title: title } })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.notifications = function (text) {
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
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-user",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\user\user.html"*/'<ion-header no-shadow no-border>\n\n  <ion-item no-lines margin-top>\n\n    <ion-thumbnail item-start>\n\n      <img style="border-radius: 50%;" src="../../assets/imgs/safety-first.png">\n\n    </ion-thumbnail>\n\n    <h3>{{ name }}</h3>\n\n    <p>MARUYASU INDUSTRIES (THAILAND) CO. LTD</p>\n\n  </ion-item>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n  <div text-center padding>\n\n    <img style="border-radius: 16px;" src="../../assets/imgs/re-check.jpg">\n\n  </div>\n\n\n\n\n\n  <ion-grid no-padding margin-top *ngIf="!items">\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(1)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="document" class="card-icon"></ion-icon>\n\n            รายชื่อบริษัท\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(2)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="school" class="card-icon"></ion-icon>\n\n            การอบรม\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(3)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="construct" class="card-icon"></ion-icon>\n\n            งานที่สูง\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(4)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="thermometer" class="card-icon"></ion-icon>\n\n            งานความร้อน\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(5)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="cloud" class="card-icon"></ion-icon>\n\n            งานอับอากาศ\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(6)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="flask" class="card-icon"></ion-icon>\n\n            งานสารเคมี\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col size="6">\n\n        <ion-card (click)="menu(7)" color="primary">\n\n          <ion-card-content>\n\n            <ion-icon name="call" class="card-icon"></ion-icon>\n\n            ติดต่อ Safety\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folderdetail_folderdetail__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(54);
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
 * Generated class for the DocsuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocsuserPage = /** @class */ (function () {
    function DocsuserPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db, formBuilder, http) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.http = http;
        this.selectedFile = null;
        this.uploadStatus = null;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_4_moment__;
        this.displayMenu1 = false;
        this.displayMenu2 = false;
        this.displayMenu3 = false;
        this.displayMenu4 = false;
        this.displayMenu5 = false;
        this.displayMenu6 = false;
        this.displayMenu7 = false;
        this.displayMenu8 = false;
        this.displaydocs = false;
        this.displaypoint = false;
        this.displaycard = false;
        this.lables = [
            { label: "แผนการทำงาน", file_id: "file_1" },
            { label: "รายชื่อผู้ปฏิบัติงาน", file_id: "file_2" },
            { label: "ใบ Certificate", file_id: "file_3" },
            { label: "ผลตรวจสุขภาพ", file_id: "file_4" },
            { label: "ใบรับรองเครื่องจักร", file_id: "file_5" },
            { label: "แบบฟอร์มขออนุญาตทำงาน", file_id: "file_6" },
        ];
        this.fileCategories = [{ selectedFile: null }];
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.FormsWork = this.formBuilder.group({
            names: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            company: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            workDetails: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            startDate: [this.momentjs().format("YYYY-MM-DD"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            endDate: [this.momentjs().format("YYYY-MM-DD"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        this.FormsTraining = this.formBuilder.group({
            trainingDate: [
                this.momentjs().format("YYYY-MM-DD"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
            trainingTime: [
                this.momentjs().format("HH:mm:ss"),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            ],
            company: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            personamounts: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [""],
        });
        this.menu = "work";
        this.title = navParams.get("data").title;
        // this.title = "งานที่สูง";
        // Use switch to set the specific displayMenu based on title
        switch (this.title) {
            case "รายชื่อบริษัท":
                this.displayMenu1 = true;
                this.db.getServiceJson({
                    "type": "allfilecompany"
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(data != null)) return [3 /*break*/, 2];
                                if (!(data.status == 200)) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, data.result];
                            case 1:
                                _a.filecompany = _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                break;
            case "การอบรม":
                this.displayMenu2 = true;
                this.worktype = 0;
                this.menu = 'data'; //กรอกข้อมูล
                // ประกาศ
                this.db.getServiceJson({ "type": "allannounce" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.announce = data.result.announce_content;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                //  รายการอบรมทั้งหมด
                this.db.getServiceJson({ "type": "alltrainingadmin" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.traininglist = data.result;
                            }
                            else {
                                this.traininglist = null;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานที่สูง":
                this.displayMenu3 = true;
                this.worktype = 1;
                // get file form for user read only
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filelistwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type by id user and work type id
                this.db.getServiceJson({
                    "type": "allwork_by_userid_and_work_type",
                    "user_id": this.uid,
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานความร้อน":
                this.displayMenu4 = true;
                this.worktype = 2;
                // get file form for user read only
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filelistwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type by id user and work type id
                this.db.getServiceJson({
                    "type": "allwork_by_userid_and_work_type",
                    "user_id": this.uid,
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานอับอากาศ":
                this.displayMenu5 = true;
                this.worktype = 3;
                // get file form for user read only
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filelistwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type by id user and work type id
                this.db.getServiceJson({
                    "type": "allwork_by_userid_and_work_type",
                    "user_id": this.uid,
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "งานสารเคมี":
                this.displayMenu6 = true;
                this.worktype = 4;
                // get file form for user read only
                this.db.getServiceJson({
                    "type": "allfileform",
                    "work_type_id": this.worktype,
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.filelistwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                // get work display on work type by id user and work type id
                this.db.getServiceJson({
                    "type": "allwork_by_userid_and_work_type",
                    "user_id": this.uid,
                    "work_type_id": this.worktype
                }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(data);
                        if (data != null) {
                            if (data.status == 200) {
                                this.listwork = data.result;
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                break;
            case "ติดต่อSafety":
                this.displayMenu7 = true;
                this.db.getServiceJson({ "type": "allcontacts" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(data != null)) return [3 /*break*/, 2];
                                if (!(data.status == 200)) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, data.result];
                            case 1:
                                _a.contact = _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                break;
        }
    }
    DocsuserPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db.getServiceJson({ "type": "account", user_id: this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    // Use switch to set the specific displayMenu based on title
                                    switch (this.title) {
                                        case "รายชื่อบริษัท":
                                            this.displayMenu1 = true;
                                            // ไฟล์ชื่อบริษัท
                                            this.db.getServiceJson({
                                                "type": "allfilecompany"
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            if (!(data != null)) return [3 /*break*/, 2];
                                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                                            _a = this;
                                                            return [4 /*yield*/, data.result];
                                                        case 1:
                                                            _a.filecompany = _b.sent();
                                                            _b.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            break;
                                        case "การอบรม":
                                            this.displayMenu2 = true;
                                            this.worktype = 0;
                                            // ประกาศ
                                            this.db.getServiceJson({ "type": "allannounce" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.announce = data.result.announce_content;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            //  รายการอบรมทั้งหมด
                                            this.db.getServiceJson({ "type": "alltrainingadmin" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.traininglist = data.result;
                                                        }
                                                        else {
                                                            this.traininglist = null;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานที่สูง":
                                            this.displayMenu3 = true;
                                            this.worktype = 1;
                                            // get file form for user read only
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filelistwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type by id user and work type id
                                            this.db.getServiceJson({
                                                "type": "allwork_by_userid_and_work_type",
                                                "user_id": this.uid,
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานความร้อน":
                                            this.displayMenu4 = true;
                                            this.worktype = 2;
                                            // get file form for user read only
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filelistwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type by id user and work type id
                                            this.db.getServiceJson({
                                                "type": "allwork_by_userid_and_work_type",
                                                "user_id": this.uid,
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานอับอากาศ":
                                            this.displayMenu5 = true;
                                            this.worktype = 3;
                                            // get file form for user read only
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filelistwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type by id user and work type id
                                            this.db.getServiceJson({
                                                "type": "allwork_by_userid_and_work_type",
                                                "user_id": this.uid,
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "งานสารเคมี":
                                            this.displayMenu6 = true;
                                            this.worktype = 4;
                                            // get file form for user read only
                                            this.db.getServiceJson({
                                                "type": "allfileform",
                                                "work_type_id": this.worktype,
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.filelistwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            // get work display on work type by id user and work type id
                                            this.db.getServiceJson({
                                                "type": "allwork_by_userid_and_work_type",
                                                "user_id": this.uid,
                                                "work_type_id": this.worktype
                                            }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    // console.log(data);
                                                    if (data != null) {
                                                        if (data.status == 200) {
                                                            this.listwork = data.result;
                                                        }
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                            break;
                                        case "ติดต่อSafety":
                                            this.displayMenu7 = true;
                                            this.db.getServiceJson({ "type": "allcontacts" }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            if (!(data != null)) return [3 /*break*/, 2];
                                                            if (!(data.status == 200)) return [3 /*break*/, 2];
                                                            _a = this;
                                                            return [4 /*yield*/, data.result];
                                                        case 1:
                                                            _a.contact = _b.sent();
                                                            _b.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            break;
                                    }
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
    DocsuserPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                // console.log("Refresher complete");
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
    DocsuserPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("ionViewWillEnter");
                    return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        // console.log("ionViewWillEnter");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsuserPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DocsuserPage.prototype.menuupload = function (file, work_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(file, work_id);
                if (file != null) {
                    this.menu = "doc";
                    this.work_id_check = work_id;
                    this.doclistwork = file;
                    localStorage.setItem('work_id', work_id);
                }
                return [2 /*return*/];
            });
        });
    };
    DocsuserPage.prototype.lookpoint = function (file, work_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(file, work_id);
                if (file != null) {
                    this.menu = "point";
                    this.work_id_check = work_id;
                    localStorage.setItem('work_id', work_id);
                    this.filelistpoint = file;
                }
                return [2 /*return*/];
            });
        });
    };
    DocsuserPage.prototype.lookcard = function (file, work_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(file, work_id);
                if (file != null) {
                    this.menu = "card";
                    this.work_id_check = work_id;
                    localStorage.setItem('work_id', work_id);
                    this.filelistcard = file;
                }
                return [2 /*return*/];
            });
        });
    };
    DocsuserPage.prototype.deletework = function (file, work_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(file, work_id);
                        if (file == null && work_id == null) {
                            this.notifications("ไม่สามารถลบได้");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: "ต้องการลบ" + this.title + "หรือไม่?",
                                cssClass: "alertCustomCssdelete",
                                enableBackdropDismiss: false,
                                buttons: [
                                    {
                                        text: "ลบ",
                                        handler: function () {
                                            _this.db.getServiceJson({
                                                "type": "deletework",
                                                "work_id": work_id,
                                                "codegen": file.codegen
                                            }).then(function (data) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    _this.notifications("เพิ่มเอกสารสำเร็จ");
                                                    var confirm_1 = _this.alertCtrl.create({
                                                        subTitle: _this.title,
                                                        message: "เลข Transaction ID :" + data.result +
                                                            "<br> * สามารถตรวจสอบสถานะข้อมูล" +
                                                            "<br> ได้จากเลข ID Number",
                                                        cssClass: "alertCustomCssdetail",
                                                        enableBackdropDismiss: false,
                                                        buttons: [
                                                            {
                                                                text: "ตกลง",
                                                                handler: function () {
                                                                    _this.menu = 'work';
                                                                    _this.autoRefresh();
                                                                    _this.doclistwork = null;
                                                                },
                                                            },
                                                        ],
                                                    });
                                                    confirm_1.present();
                                                }
                                                else {
                                                    _this.notifications("เพิ่มเอกสารไม่สำเร็จ");
                                                }
                                            });
                                        }
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
    DocsuserPage.prototype.deletetraining = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการลบ" + this.title + "หรือไม่?",
                            cssClass: "alertCustomCssdelete",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ลบ",
                                    handler: function () {
                                        _this.db.getServiceJson({
                                            "type": "deletetraining",
                                            "training_id": file.training_id,
                                            "codegen": file.codegen
                                        }).then(function (data) {
                                            // console.log(data);
                                            if (data.status == 200) {
                                                if (file.file_id == null) {
                                                    _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                    _this.traininglist = null;
                                                    _this.menu = 'list';
                                                }
                                                else {
                                                    _this.db.getServiceJson({
                                                        "type": "deletefiletraining",
                                                        "file_id": file.file_id
                                                    }).then(function (data) {
                                                        // console.log(data);
                                                        if (data.status == 200) {
                                                            if (file == null) {
                                                                _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                                _this.traininglist = null;
                                                                _this.menu = 'list';
                                                            }
                                                            else {
                                                                _this.notifications("ยกเลิกการเข้าอบรมเรียบร้อย");
                                                                _this.traininglist = null;
                                                                _this.menu = 'list';
                                                            }
                                                        }
                                                        else {
                                                            _this.notifications("ยกเลิกการเข้าอบรมไม่สำเร็จ");
                                                        }
                                                    });
                                                }
                                            }
                                            else {
                                                _this.notifications("ยกเลิกการเข้าอบรมไม่สำเร็จ");
                                            }
                                        });
                                    }
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
    DocsuserPage.prototype.lookfile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_7__environment__["a" /* environment */].URL_Work_download + file;
                        return [4 /*yield*/, window.open(url, "_blank")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsuserPage.prototype.onSegmentSelect = function (selectedMenu) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, selectedMenu.value];
                    case 1:
                        _a.menu = _b.sent();
                        this.autoRefresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocsuserPage.prototype.generateRandomCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var letters, numbers, randomLetters, randomNumbers;
            return __generator(this, function (_a) {
                letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
                numbers = Array.from("0123456789");
                randomLetters = Array.from({ length: 4 }, function () { return letters[Math.floor(Math.random() * letters.length)]; }).join("");
                randomNumbers = Array.from({ length: 4 }, function () { return numbers[Math.floor(Math.random() * numbers.length)]; }).join("");
                this.codegen = randomLetters + randomNumbers;
                return [2 /*return*/];
            });
        });
    };
    // menu 1
    DocsuserPage.prototype.folders = function (rootfolder) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__folderdetail_folderdetail__["a" /* FolderdetailPage */], { data: rootfolder });
                return [2 /*return*/];
            });
        });
    };
    // menu 2
    DocsuserPage.prototype.AddWork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการยืนยัน" + this.title + "หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var data = _this.FormsWork.value;
                                        if (!data) {
                                            return;
                                        }
                                        _this.generateRandomCode();
                                        if (_this.codegen) {
                                            _this.db.getServiceJson({
                                                "type": "newWork",
                                                "user_id": _this.uid,
                                                "work_type_id": _this.worktype,
                                                "owner_name": data.names,
                                                "owner_company": data.company,
                                                "work_detail": data.workDetails,
                                                "startdate": data.startDate,
                                                "enddate": data.endDate,
                                                "codegen": _this.codegen,
                                                "work_name": _this.title,
                                                "date": data.startDate,
                                                "status_work1": "Pending",
                                                "status_work2": "Pending",
                                                "status_work3": "Pending",
                                                "status_work4": "Pending",
                                                "status_work5": "Pending",
                                                "remarks": null
                                            }).then(function (data) {
                                                // console.log(data);
                                                if (data.status == 200) {
                                                    _this.notifications("เพิ่มเอกสารสำเร็จ");
                                                    var confirm_2 = _this.alertCtrl.create({
                                                        subTitle: _this.title,
                                                        message: "เลข Transaction ID :" +
                                                            data.result +
                                                            "<br> สามารถตรวจสอบสถานะข้อมูลได้จากเลข ID Number",
                                                        cssClass: "alertCustomCssdetail",
                                                        enableBackdropDismiss: false,
                                                        buttons: [
                                                            {
                                                                text: "ตกลง",
                                                                handler: function () {
                                                                    _this.menu = 'work';
                                                                    // this.autoRefresh();
                                                                },
                                                            },
                                                        ],
                                                    });
                                                    confirm_2.present();
                                                }
                                                else {
                                                    _this.notifications("เพิ่มเอกสารไม่สำเร็จ");
                                                }
                                            });
                                        }
                                        else {
                                            _this.notifications("โค้ดเจนไม่ทำงาน");
                                        }
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
    //  menu 8
    DocsuserPage.prototype.AddTraining = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "ต้องการยืนยัน" + this.title + "หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        var data = _this.FormsTraining.value;
                                        if (!data) {
                                            return;
                                        }
                                        _this.generateRandomCode();
                                        _this.db.getServiceJson({
                                            "type": "newTraining",
                                            "user_id": _this.uid,
                                            "company": data.company,
                                            "personamounts": data.personamounts,
                                            "trainingdate": data.trainingDate + " " + data.trainingTime,
                                            "note": data.remarks,
                                            "codegen": _this.codegen,
                                            "work_name": _this.title,
                                            "date": __WEBPACK_IMPORTED_MODULE_4_moment__().format("DD-MM-YYYY"),
                                            "status_work1": "Pending",
                                            "status_work2": "Pending",
                                            "status_work3": "Pending",
                                            "status_work4": "Pending",
                                            "status_work5": "Pending",
                                            "remarks": null
                                        }).then(function (data) {
                                            console.log(data);
                                            if (data.status == 200) {
                                                _this.notifications("จองการอบรมสำเร็จ");
                                                var confirm_3 = _this.alertCtrl.create({
                                                    subTitle: "จองการอบรม",
                                                    message: "เลข Transaction ID :" +
                                                        data.result.codegen +
                                                        "<br> สามารถตรวจสอบสถานะข้อมูลได้จากเลข ID Number",
                                                    cssClass: "alertCustomCssdetail",
                                                    enableBackdropDismiss: false,
                                                    buttons: [
                                                        {
                                                            text: "ตกลง",
                                                            handler: function () {
                                                                _this.menu = 'list';
                                                            },
                                                        },
                                                    ],
                                                });
                                                confirm_3.present();
                                            }
                                            else {
                                                _this.notifications("จองการอบรมไม่สำเร็จ");
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
    DocsuserPage.prototype.uploadname = function (training_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(training_id);
                this.menu = 'uplist';
                localStorage.setItem('training_id', training_id);
                return [2 /*return*/];
            });
        });
    };
    // ฟังก์ชันเมื่อมีการเลือกไฟล์
    DocsuserPage.prototype.onFileSelected = function (event, index) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event.target.files[0]];
                    case 1:
                        file = _a.sent();
                        if (file && file.type === "application/pdf") {
                            this.fileCategories[index].selectedFile = file;
                        }
                        else {
                            this.notifications("กรุณาเลือกไฟล์ PDF เท่านั้น");
                            this.fileCategories[index].selectedFile = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ฟังก์ชันอัปโหลดไฟล์
    DocsuserPage.prototype.uploadFiles = function (work_type_db) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subTitle: "อัพโหลดไฟล์",
                            message: "อัพโหลดไฟล์ใช่หรือไม่?",
                            cssClass: "alertCustomCssdetail",
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: "ตกลง",
                                    handler: function () {
                                        if (work_type_db == 'updatefile_work') {
                                            if (!_this.selectedFileId) {
                                                _this.notifications("โปรดเลือกหัวข้อ");
                                                console.log('updatefile_work');
                                                return;
                                            }
                                        }
                                        else if (work_type_db == 'updatefile_tranining') {
                                            console.log('updatefile_tranining');
                                        }
                                        var formData = new FormData();
                                        // วนลูปเพิ่มไฟล์ที่ถูกเลือกลงใน FormData
                                        _this.fileCategories.forEach(function (category, index) {
                                            if (category.selectedFile) {
                                                formData.append("files[" + index + "]", category.selectedFile, category.selectedFile.name);
                                            }
                                        });
                                        if (!formData.has("files[0]")) {
                                            _this.notifications("กรุณาเลือกไฟล์อย่างน้อยหนึ่งไฟล์ก่อนอัปโหลด");
                                            return;
                                        }
                                        if (work_type_db == 'updatefile_work') {
                                            formData.append('user_id', _this.uid.toString());
                                            formData.append('work_type_db', work_type_db);
                                            formData.append('work_type_id', _this.worktype.toString());
                                            formData.append('work_id', localStorage.getItem('work_id'));
                                            formData.append('column', _this.selectedFileId);
                                        }
                                        else if (work_type_db == 'updatefile_tranining') {
                                            formData.append('user_id', _this.uid.toString());
                                            formData.append('work_type_db', work_type_db);
                                            formData.append('training_id', localStorage.getItem('training_id'));
                                            formData.append('column', 'file_id');
                                        }
                                        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]();
                                        headers.append("Accept", "application/json");
                                        _this.http.post(__WEBPACK_IMPORTED_MODULE_7__environment__["a" /* environment */].URL_Work_upload, formData, { headers: headers, }).subscribe(function (response) {
                                            console.log(response[0]);
                                            if (response[0].status === "error") {
                                                _this.notifications("มีไฟล์ชื่อนี้อยู่แล้ว");
                                            }
                                            else {
                                                _this.notifications("อัปโหลดไฟล์เรียบร้อย");
                                                // เคลียร์ไฟล์ในตัวแปรหลังอัปโหลด
                                                _this.selectedFile = null;
                                                if (work_type_db == 'updatefile_work') {
                                                    _this.menu = 'work';
                                                }
                                                else if (work_type_db == 'updatefile_tranining') {
                                                    _this.menu = 'list';
                                                }
                                                _this.fileCategories.forEach(function (category) {
                                                    category.selectedFile = null; // หรือ undefined
                                                });
                                            }
                                        }, function (error) {
                                            _this.notifications("เกิดข้อผิดพลาดในการอัปโหลดไฟล์");
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
    DocsuserPage.prototype.notifications = function (text) {
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
    DocsuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-docsuser",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\docsuser\docsuser.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title text-center>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n  <div text-center padding-left padding-right>\n\n    <img style="border-radius: 16px;" src="../../assets/imgs/re-check.jpg">\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="displayMenu1">\n\n    <div class="menu" margin-top>\n\n      <h3 margin-right text-left><ion-icon name="md-cloud-download"></ion-icon> ไฟล์รายชื่อบริษัท</h3>\n\n      <div *ngIf="filecompany">\n\n        <ion-card *ngFor="let file of filecompany">\n\n          <ion-item>\n\n            <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n            <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n            <button padding ion-button full round color="dark" (click)="lookfile(file.filename)"><ion-icon margin-right\n\n                name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n          </ion-item>\n\n        </ion-card>\n\n      </div>\n\n      <div *ngIf="!filecompany">\n\n        <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu2">\n\n\n\n    <div class="acc">\n\n      <h3 padding text-left><ion-icon name="md-notifications-outline"></ion-icon> ประกาศ :\n\n        {{ announce }}</h3>\n\n    </div>\n\n\n\n    <div class="war">\n\n      <p margin-left> <ion-icon name="md-notifications-outline"></ion-icon>\n\n        โปรดเช็คข้อมูลของท่านก่อนการเริ่มงานทุกครั้ง</p>\n\n    </div>\n\n\n\n\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="data">\n\n        กรอกข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="list">\n\n        รายการอบรม\n\n      </ion-segment-button>\n\n      <ion-segment-button value="uplist" disabled="true" hidden>\n\n        อัพโหลดรายชื่อ\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n\n\n    <div [ngSwitch]="menu">\n\n      <div *ngSwitchCase="\'data\'">\n\n\n\n\n\n        <form [formGroup]="FormsTraining" (ngSubmit)="AddTraining()">\n\n          <ion-item>\n\n            <ion-label stacked>โปรดระบุวันที่ท่านต้องการอบรม</ion-label>\n\n            <ion-input type="date" formControlName="trainingDate"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>เวลาการเข้าอบรม</ion-label>\n\n            <ion-input type="time" formControlName="trainingTime"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>บริษัท / หน่วยงาน</ion-label>\n\n            <ion-input type="text" formControlName="company" placeholder="บริษัท / หน่วยงาน"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>จำนวนคน</ion-label>\n\n            <ion-input type="number" formControlName="personamounts" placeholder="จำนวนคน"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>หมายเหตุ</ion-label>\n\n            <ion-input type="text" formControlName="remarks" placeholder="หมายเหตุ"></ion-input>\n\n          </ion-item>\n\n\n\n          <div margin-top>\n\n            <button margin-top ion-button full round type="submit" [disabled]="!FormsTraining.valid"><ion-icon\n\n                margin-right name="md-person-add"></ion-icon>จองวันทำการอบรม</button>\n\n          </div>\n\n\n\n        </form>\n\n\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'list\'">\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n\n          <ion-refresher-content></ion-refresher-content>\n\n        </ion-refresher>\n\n\n\n        <div class="menus">\n\n          <ion-card *ngFor="let data of traininglist;let i = index;" padding>\n\n            <h5><b>ID Number : </b>{{ data.codegen }}</h5>\n\n            <h5><b>บริษัท : </b>{{ data.company }}</h5>\n\n            <h5><b>จำนวนคน : </b>{{ data.personamounts }}</h5>\n\n            <h5><b>วันที่อบรม : </b>{{ data.trainingdate | date: \'dd/MM/yyyy\' }}</h5>\n\n            <h5><b>เวลาอบรม : </b>{{ data.trainingdate | date:"HH:mm:ss" }}</h5>\n\n            <h5><b>หมายเหตุ : </b>{{ data.note }}</h5>\n\n            <h5><b>แนบไฟล์รายชื่อ : </b>{{ data.file_id == null ? \'ยังไม่แนบไฟล์รายชื่อ\' : data.filename }}</h5>\n\n\n\n            <button *ngIf="data.file_id" ion-button full samll round margin-top color="dark"\n\n              (click)="lookfile(data.filename)"><ion-icon margin-right name="md-cloud-download"></ion-icon>\n\n              ดูไฟล์</button>\n\n\n\n            <button *ngIf="!data.file_id" ion-button full round margin-top\n\n              (click)="uploadname(data.training_id)"><ion-icon margin-right name="md-cloud-upload"></ion-icon>\n\n              อัพโหลดรายชื่อเข้ารบรม</button>\n\n\n\n            <hr>\n\n            <button padding margin-top ion-button full round color="danger" (click)="deletetraining(data)"><ion-icon\n\n                margin-right name="md-close-circle"></ion-icon>ยกเลิกการเข้าอบรม</button>\n\n          </ion-card>\n\n\n\n          <div *ngIf="!traininglist">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ไม่พบข้อมูลการจอง</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'uplist\'">\n\n\n\n        <div class="menus">\n\n          <h3 margin-top><ion-icon margin-right name="md-person-add"></ion-icon> อัพโหลดรายชื่อเข้ารบรม</h3>\n\n          <div *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p text-center *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}\n\n            </p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'updatefile_tranining\')"><ion-icon\n\n                margin-right name="md-cloud-upload"></ion-icon> อัพโหลดรายชื่อเข้ารบรม</button>\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu3">\n\n\n\n    <div class="war">\n\n      <p margin-left> <ion-icon name="md-notifications-outline"></ion-icon>\n\n        โปรดเช็คข้อมูลของท่านก่อนการเริ่มงานทุกครั้ง</p>\n\n    </div>\n\n\n\n\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        ข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        กรอกข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="doc" disabled="true" hidden>\n\n        อัพโหลด\n\n      </ion-segment-button>\n\n      <ion-segment-button value="point" disabled="true" hidden>\n\n        คะแนน\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card" disabled="true" hidden>\n\n        บัตร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="menu">\n\n\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา</h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-person"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button padding margin-top ion-button full round color="dark"\n\n                  (click)="menuupload(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารเพิ่มเติม</button>\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookpoint(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-document"></ion-icon>ดูคะแนนประเมิน</button>\n\n\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookcard(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-card"></ion-icon>ดูบัตรอนุญาต</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบงาน</button>\n\n\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> ดาวโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</h3>\n\n          <div *ngIf="filelistwork">\n\n            <ion-card *ngFor="let file of filelistwork">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file.filename)"><ion-icon\n\n                    margin-right name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> กรอกข้อมูลงาน</h3>\n\n          <form [formGroup]="FormsWork" (ngSubmit)="AddWork()" margin-top>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon> ชื่อ\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="names" placeholder="ชื่อ"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="document"></ion-icon> บริษัท / หน่วยงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="company" placeholder="บริษัท / หน่วยงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="clipboard"></ion-icon> รายละเอียดงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="workDetails" placeholder="รายละเอียดงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> เริ่มงาน\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="startDate" placeholder="เริ่มงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> ถึงวันที่\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="endDate" placeholder="ถึงวันที่"></ion-input>\n\n            </ion-item>\n\n            <div class="error">\n\n              <div class="form-error">{{ formError }}</div>\n\n            </div>\n\n            <div class="submit-container" margin-top>\n\n              <button ion-button full round type="submit" [disabled]="!FormsWork.valid"\n\n                class="submit-button">อัพโหลดข้อมูล</button>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'doc\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เลือกหัวข้อไฟล์ที่จะอัพโหลด</h3>\n\n          <ion-item>\n\n            <ion-label> เลือกหัวข้อ</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFileId">\n\n              <ion-option *ngFor="let item of lables; let i = index;" value="{{item.file_id}}">{{item.label}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <br>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'updatefile_work\')"><ion-icon margin-right\n\n                name="md-cloud"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n\n\n          <div class="menu">\n\n            <h3 margin-top text-left><ion-icon margin-right name="md-cloud-download"></ion-icon>เอกสารประกอบอื่นๆ</h3>\n\n            <div *ngIf="doclistwork">\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แผนการทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_1_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_1_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_1_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_1_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>รายชื่อผู้ปฏิบัติงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_2_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_2_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_2_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_2_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบ Certificate\n\n                </h3>\n\n                <ion-item *ngIf="doclistwork.file_3_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_3_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_3_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_3_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ผลตรวจสุขภาพ</h3>\n\n                <ion-item *ngIf="doclistwork.file_4_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_4_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_4_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_4_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ใบรับรองเครื่องจักร</h3>\n\n                <ion-item *ngIf="doclistwork.file_5_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_5_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_5_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_5_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>แบบฟอร์มขออนุญาตทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_6_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_6_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_6_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_6_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n            </div>\n\n\n\n            <div *ngIf="!doclistwork">\n\n              <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n            </div>\n\n\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'point\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> คะแนนประเมิน</h3>\n\n          <div *ngIf="filelistpoint.file_7_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistpoint.file_7_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistpoint.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistpoint.file_7_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistpoint.file_7_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'card\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> บัตรอนุญาตเข้าทำงาน</h3>\n\n          <div *ngIf="filelistcard.file_8_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistcard.file_8_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistcard.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistcard.file_8_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistcard.file_8_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardf.jpg">\n\n              <p text-center>หน้า</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardb.jpg">\n\n              <p text-center>หลัง</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu4">\n\n\n\n\n\n\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        ข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        กรอกข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="doc" disabled="true" hidden>\n\n        อัพโหลด\n\n      </ion-segment-button>\n\n      <ion-segment-button value="point" disabled="true" hidden>\n\n        คะแนน\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card" disabled="true" hidden>\n\n        บัตร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="menu">\n\n\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา</h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-person"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button padding margin-top ion-button full round color="dark"\n\n                  (click)="menuupload(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารเพิ่มเติม</button>\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookpoint(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-document"></ion-icon>ดูคะแนนประเมิน</button>\n\n\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookcard(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-card"></ion-icon>ดูบัตรอนุญาต</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบงาน</button>\n\n\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> ดาวโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</h3>\n\n          <div *ngIf="filelistwork">\n\n            <ion-card *ngFor="let file of filelistwork">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file.filename)"><ion-icon\n\n                    margin-right name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> กรอกข้อมูลงาน</h3>\n\n          <form [formGroup]="FormsWork" (ngSubmit)="AddWork()" margin-top>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon> ชื่อ\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="names" placeholder="ชื่อ"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="document"></ion-icon> บริษัท / หน่วยงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="company" placeholder="บริษัท / หน่วยงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="clipboard"></ion-icon> รายละเอียดงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="workDetails" placeholder="รายละเอียดงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> เริ่มงาน\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="startDate" placeholder="เริ่มงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> ถึงวันที่\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="endDate" placeholder="ถึงวันที่"></ion-input>\n\n            </ion-item>\n\n            <div class="error">\n\n              <div class="form-error">{{ formError }}</div>\n\n            </div>\n\n            <div class="submit-container" margin-top>\n\n              <button ion-button full round type="submit" [disabled]="!FormsWork.valid"\n\n                class="submit-button">อัพโหลดข้อมูล</button>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'doc\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เลือกหัวข้อไฟล์ที่จะอัพโหลด</h3>\n\n          <ion-item>\n\n            <ion-label> เลือกหัวข้อ</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFileId">\n\n              <ion-option *ngFor="let item of lables; let i = index;" value="{{item.file_id}}">{{item.label}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <br>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'updatefile_work\')"><ion-icon margin-right\n\n                name="md-cloud"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n\n\n          <div class="menu">\n\n            <h3 margin-top text-left><ion-icon margin-right name="md-cloud-download"></ion-icon>เอกสารประกอบอื่นๆ</h3>\n\n            <div *ngIf="doclistwork">\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แผนการทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_1_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_1_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_1_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_1_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>รายชื่อผู้ปฏิบัติงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_2_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_2_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_2_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_2_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบ Certificate\n\n                </h3>\n\n                <ion-item *ngIf="doclistwork.file_3_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_3_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_3_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_3_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ผลตรวจสุขภาพ</h3>\n\n                <ion-item *ngIf="doclistwork.file_4_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_4_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_4_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_4_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ใบรับรองเครื่องจักร</h3>\n\n                <ion-item *ngIf="doclistwork.file_5_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_5_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_5_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_5_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>แบบฟอร์มขออนุญาตทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_6_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_6_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_6_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_6_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n            </div>\n\n\n\n            <div *ngIf="!doclistwork">\n\n              <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n            </div>\n\n\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'point\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> คะแนนประเมิน</h3>\n\n          <div *ngIf="filelistpoint.file_7_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistpoint.file_7_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistpoint.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistpoint.file_7_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistpoint.file_7_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'card\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> บัตรอนุญาตเข้าทำงาน</h3>\n\n          <div *ngIf="filelistcard.file_8_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistcard.file_8_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistcard.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistcard.file_8_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistcard.file_8_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardf.jpg">\n\n              <p text-center>หน้า</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardb.jpg">\n\n              <p text-center>หลัง</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu5">\n\n\n\n\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        ข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        กรอกข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="doc" disabled="true" hidden>\n\n        อัพโหลด\n\n      </ion-segment-button>\n\n      <ion-segment-button value="point" disabled="true" hidden>\n\n        คะแนน\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card" disabled="true" hidden>\n\n        บัตร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="menu">\n\n\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา</h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-person"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button padding margin-top ion-button full round color="dark"\n\n                  (click)="menuupload(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารเพิ่มเติม</button>\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookpoint(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-document"></ion-icon>ดูคะแนนประเมิน</button>\n\n\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookcard(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-card"></ion-icon>ดูบัตรอนุญาต</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบงาน</button>\n\n\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> ดาวโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</h3>\n\n          <div *ngIf="filelistwork">\n\n            <ion-card *ngFor="let file of filelistwork">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file.filename)"><ion-icon\n\n                    margin-right name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> กรอกข้อมูลงาน</h3>\n\n          <form [formGroup]="FormsWork" (ngSubmit)="AddWork()" margin-top>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon> ชื่อ\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="names" placeholder="ชื่อ"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="document"></ion-icon> บริษัท / หน่วยงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="company" placeholder="บริษัท / หน่วยงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="clipboard"></ion-icon> รายละเอียดงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="workDetails" placeholder="รายละเอียดงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> เริ่มงาน\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="startDate" placeholder="เริ่มงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> ถึงวันที่\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="endDate" placeholder="ถึงวันที่"></ion-input>\n\n            </ion-item>\n\n            <div class="error">\n\n              <div class="form-error">{{ formError }}</div>\n\n            </div>\n\n            <div class="submit-container" margin-top>\n\n              <button ion-button full round type="submit" [disabled]="!FormsWork.valid"\n\n                class="submit-button">อัพโหลดข้อมูล</button>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'doc\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เลือกหัวข้อไฟล์ที่จะอัพโหลด</h3>\n\n          <ion-item>\n\n            <ion-label> เลือกหัวข้อ</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFileId">\n\n              <ion-option *ngFor="let item of lables; let i = index;" value="{{item.file_id}}">{{item.label}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <br>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'updatefile_work\')"><ion-icon margin-right\n\n                name="md-cloud"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n\n\n          <div class="menu">\n\n            <h3 margin-top text-left><ion-icon margin-right name="md-cloud-download"></ion-icon>เอกสารประกอบอื่นๆ</h3>\n\n            <div *ngIf="doclistwork">\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แผนการทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_1_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_1_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_1_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_1_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>รายชื่อผู้ปฏิบัติงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_2_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_2_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_2_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_2_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบ Certificate\n\n                </h3>\n\n                <ion-item *ngIf="doclistwork.file_3_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_3_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_3_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_3_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ผลตรวจสุขภาพ</h3>\n\n                <ion-item *ngIf="doclistwork.file_4_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_4_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_4_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_4_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ใบรับรองเครื่องจักร</h3>\n\n                <ion-item *ngIf="doclistwork.file_5_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_5_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_5_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_5_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>แบบฟอร์มขออนุญาตทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_6_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_6_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_6_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_6_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n            </div>\n\n\n\n            <div *ngIf="!doclistwork">\n\n              <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n            </div>\n\n\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'point\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> คะแนนประเมิน</h3>\n\n          <div *ngIf="filelistpoint.file_7_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistpoint.file_7_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistpoint.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistpoint.file_7_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistpoint.file_7_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'card\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> บัตรอนุญาตเข้าทำงาน</h3>\n\n          <div *ngIf="filelistcard.file_8_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistcard.file_8_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistcard.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistcard.file_8_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistcard.file_8_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardf.jpg">\n\n              <p text-center>หน้า</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardb.jpg">\n\n              <p text-center>หลัง</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu6">\n\n\n\n\n\n    <ion-segment [(ngModel)]="menu" color="primary" (ionChange)="onSegmentSelect($event)">\n\n      <ion-segment-button value="work">\n\n        ข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="title">\n\n        กรอกข้อมูล\n\n      </ion-segment-button>\n\n      <ion-segment-button value="doc" disabled="true" hidden>\n\n        อัพโหลด\n\n      </ion-segment-button>\n\n      <ion-segment-button value="point" disabled="true" hidden>\n\n        คะแนน\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card" disabled="true" hidden>\n\n        บัตร\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="menu">\n\n\n\n      <div *ngSwitchCase="\'work\'">\n\n        <div class="menus">\n\n          <h3 margin-top text-left><ion-icon name="md-cloud-upload"></ion-icon> รายการเอกสารของผู้รับเหมา</h3>\n\n          <div *ngIf="listwork">\n\n            <ion-card *ngFor="let file of listwork">\n\n              <ion-item>\n\n                <h3><b><ion-icon margin-right name="md-card"></ion-icon>ID Number : </b>{{ file.codegen }}</h3>\n\n                <h3><b><ion-icon margin-right name="md-construct"></ion-icon>บริษัท</b></h3>\n\n                <p>{{ file.owner_company }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-person"></ion-icon>ชื่อ</b></h3>\n\n                <p>{{ file.owner_name }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-briefcase"></ion-icon>รายละเอียดงาน</b></h3>\n\n                <p>{{ file.work_detail }}</p>\n\n                <br>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันที่เริ่ม : </b>{{ file.startdate | date:\n\n                  \'dd/MM/yyyy\'}}</h3>\n\n                <h3><b><ion-icon margin-right name="md-calendar"></ion-icon>วันสิ้นสุด : </b>{{ file.enddate | date:\n\n                  \'dd/MM/yyyy\' }}</h3>\n\n                <!-- <p>อัพเดตล่าสุด : {{ file.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p> -->\n\n                <button padding margin-top ion-button full round color="dark"\n\n                  (click)="menuupload(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-cloud-upload"></ion-icon>อัพโหลดเอกสารเพิ่มเติม</button>\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookpoint(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-document"></ion-icon>ดูคะแนนประเมิน</button>\n\n\n\n                <button padding margin-top ion-button full round color="primary"\n\n                  (click)="lookcard(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-card"></ion-icon>ดูบัตรอนุญาต</button>\n\n\n\n                <hr>\n\n                <button padding margin-top ion-button full round color="danger"\n\n                  (click)="deletework(file,file.work_id)"><ion-icon margin-right\n\n                    name="md-trash"></ion-icon>ลบงาน</button>\n\n\n\n\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!listwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'title\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> ดาวโหลดเอกสารแบบฟอร์มขออนุญาตทำงาน</h3>\n\n          <div *ngIf="filelistwork">\n\n            <ion-card *ngFor="let file of filelistwork">\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ file.filename }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ file.uploaded_at | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark" (click)="lookfile(file.filename)"><ion-icon\n\n                    margin-right name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistwork">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> กรอกข้อมูลงาน</h3>\n\n          <form [formGroup]="FormsWork" (ngSubmit)="AddWork()" margin-top>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="person"></ion-icon> ชื่อ\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="names" placeholder="ชื่อ"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="document"></ion-icon> บริษัท / หน่วยงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="company" placeholder="บริษัท / หน่วยงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="clipboard"></ion-icon> รายละเอียดงาน\n\n              </ion-label>\n\n              <ion-input type="text" formControlName="workDetails" placeholder="รายละเอียดงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> เริ่มงาน\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="startDate" placeholder="เริ่มงาน"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <ion-icon name="calendar"></ion-icon> ถึงวันที่\n\n              </ion-label>\n\n              <ion-input type="date" formControlName="endDate" placeholder="ถึงวันที่"></ion-input>\n\n            </ion-item>\n\n            <div class="error">\n\n              <div class="form-error">{{ formError }}</div>\n\n            </div>\n\n            <div class="submit-container" margin-top>\n\n              <button ion-button full round type="submit" [disabled]="!FormsWork.valid"\n\n                class="submit-button">อัพโหลดข้อมูล</button>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'doc\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> เลือกหัวข้อไฟล์ที่จะอัพโหลด</h3>\n\n          <ion-item>\n\n            <ion-label> เลือกหัวข้อ</ion-label>\n\n            <ion-select multiple="false" cancelText="ปิด" okText="เลือก" [(ngModel)]="selectedFileId">\n\n              <ion-option *ngFor="let item of lables; let i = index;" value="{{item.file_id}}">{{item.label}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <br>\n\n          <div margin-left *ngFor="let file of fileCategories; let i = index">\n\n            <input type="file" accept="application/pdf" (change)="onFileSelected($event, i)" hidden #fileInput>\n\n            <p *ngIf="file.selectedFile; else noFileSelected" class="file-name">{{ file.selectedFile.name }}</p>\n\n            <ng-template #noFileSelected>\n\n              <p text-center class="file-not-selected">ไม่ได้เลือกไฟล์ใด</p>\n\n            </ng-template>\n\n            <button ion-button full round color="dark" (click)="fileInput.click()"><ion-icon margin-right\n\n                name="md-add"></ion-icon> เลือกไฟล์</button>\n\n            <button ion-button full round margin-top (click)="uploadFiles(\'updatefile_work\')"><ion-icon margin-right\n\n                name="md-cloud"></ion-icon> อัปโหลดไฟล์</button>\n\n          </div>\n\n\n\n          <div class="menu">\n\n            <h3 margin-top text-left><ion-icon margin-right name="md-cloud-download"></ion-icon>เอกสารประกอบอื่นๆ</h3>\n\n            <div *ngIf="doclistwork">\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>แผนการทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_1_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_1_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_1_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_1_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>รายชื่อผู้ปฏิบัติงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_2_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_2_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_2_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_2_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ใบ Certificate\n\n                </h3>\n\n                <ion-item *ngIf="doclistwork.file_3_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_3_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_3_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_3_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right name="md-cloud-download"></ion-icon>ผลตรวจสุขภาพ</h3>\n\n                <ion-item *ngIf="doclistwork.file_4_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_4_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_4_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_4_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ใบรับรองเครื่องจักร</h3>\n\n                <ion-item *ngIf="doclistwork.file_5_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_5_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_5_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_5_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n\n\n              <ion-card>\n\n                <h3 margin-top margin-left><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>แบบฟอร์มขออนุญาตทำงาน</h3>\n\n                <ion-item *ngIf="doclistwork.file_6_name">\n\n                  <p>ชื่อไฟล์ : {{ doclistwork.file_6_name }}</p>\n\n                  <button padding ion-button full round color="dark"\n\n                    (click)="lookfile(doclistwork.file_6_name)"><ion-icon margin-right\n\n                      name="md-cloud"></ion-icon>ดูไฟล์</button>\n\n                </ion-item>\n\n                <ion-item *ngIf="!doclistwork.file_6_name">\n\n                  <h6 text-center margin-top><ion-icon name="md-alert"></ion-icon> ไม่พบเอกสาร</h6>\n\n                </ion-item>\n\n              </ion-card>\n\n            </div>\n\n\n\n            <div *ngIf="!doclistwork">\n\n              <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n            </div>\n\n\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'point\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> คะแนนประเมิน</h3>\n\n          <div *ngIf="filelistpoint.file_7_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistpoint.file_7_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistpoint.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistpoint.file_7_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistpoint.file_7_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'card\'">\n\n        <div class="menu">\n\n          <h3 margin-top text-left><ion-icon name="md-checkbox"></ion-icon> บัตรอนุญาตเข้าทำงาน</h3>\n\n          <div *ngIf="filelistcard.file_8_name">\n\n            <ion-card>\n\n              <ion-item>\n\n                <h3>ชื่อไฟล์ : {{ filelistcard.file_8_name }}</h3>\n\n                <p>อัพเดตล่าสุด : {{ filelistcard.datestamp | date: \'dd/MM/yyyy HH:mm:ss\' }}</p>\n\n                <button padding ion-button full round color="dark"\n\n                  (click)="lookfile(filelistcard.file_8_name)"><ion-icon margin-right\n\n                    name="md-cloud-download"></ion-icon>ดาวโหลด</button>\n\n              </ion-item>\n\n            </ion-card>\n\n          </div>\n\n          <div *ngIf="!filelistcard.file_8_name">\n\n            <p text-center><ion-icon name="md-alert"></ion-icon> ยังไม่มีไฟล์ในระบบ</p>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardf.jpg">\n\n              <p text-center>หน้า</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div text-center>\n\n              <img style="border-radius: 16px;" src="../../assets/imgs/permisioncardb.jpg">\n\n              <p text-center>หลัง</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="displayMenu7">\n\n    <ion-card padding *ngFor="let data of contact" class="contacts">\n\n      <ion-item>\n\n        <ion-label stacked>\n\n          <ion-icon name="md-person"></ion-icon> เจ้าหน้าที่ชื่อ\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.name" placeholder="ชื่อ" disabled="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>\n\n          <ion-icon name="md-briefcase"></ion-icon> ตำแหน่ง\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.position" placeholder="ตำแหน่ง" disabled="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>\n\n          <ion-icon name="md-call"></ion-icon> เบอร์โทรศัพท์\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.mobile"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>\n\n          <ion-icon name="md-mail"></ion-icon> อีเมล\n\n        </ion-label>\n\n        <ion-input type="email" [(ngModel)]="data.email"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\docsuser\docsuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], DocsuserPage);
    return DocsuserPage;
}());

//# sourceMappingURL=docsuser.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(15);
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
 * Generated class for the FolderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FolderdetailPage = /** @class */ (function () {
    function FolderdetailPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db, formBuilder) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.files = navParams.get("data");
        // console.log(this.files);
        this.db
            .getServiceJson({
            type: "storagerole",
            diractory_id: this.files.diractory_id,
            role: this.role,
        })
            .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 2];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        // console.log(data.result);
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        // console.log(data.result);
                        _a.folder = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    }
    FolderdetailPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FolderdetailPage");
    };
    FolderdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-folderdetail",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\folderdetail\folderdetail.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let company of folder">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="../../assets/imgs/folder.png">\n\n      </ion-thumbnail>\n\n      <ion-label>\n\n        <div class="company-label">\n\n          <span class="dotted-line" (click)="folders(company)"> {{ company.filename }}</span><br>\n\n          <span class="dotted-line" (click)="folders(company)"> {{ company.filepath }}</span><br>\n\n          <span class="dotted-line" (click)="folders(company)"> {{ company.status_tracking_file }}</span>\n\n        </div>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\folderdetail\folderdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FolderdetailPage);
    return FolderdetailPage;
}());

//# sourceMappingURL=folderdetail.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_status__ = __webpack_require__(349);
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
 * Generated class for the DocslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocslistPage = /** @class */ (function () {
    function DocslistPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.db.getServiceJson({ "type": "doclists", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 2];
                        if (!(data.status == 200)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, data.result];
                    case 1:
                        _a.doclists = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    }
    DocslistPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5:
                                                        this.db.getServiceJson({ "type": "doclists", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                            var _a;
                                                            return __generator(this, function (_b) {
                                                                switch (_b.label) {
                                                                    case 0:
                                                                        if (!(data != null)) return [3 /*break*/, 2];
                                                                        if (!(data.status == 200)) return [3 /*break*/, 2];
                                                                        _a = this;
                                                                        return [4 /*yield*/, data.result];
                                                                    case 1:
                                                                        _a.doclists = _b.sent();
                                                                        _b.label = 2;
                                                                    case 2: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                        return [2 /*return*/];
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
    DocslistPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                // console.log("Refresher complete");
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
    DocslistPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("ionViewWillEnter");
                    return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        // console.log("ionViewWillEnter");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocslistPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DocslistPage.prototype.status_docs = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__status_status__["a" /* StatusPage */], { data: data });
                return [2 /*return*/];
            });
        });
    };
    DocslistPage.prototype.notifications = function (text) {
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
    DocslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-docslist",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\docslist\docslist.html"*/'<ion-header no-shadow no-border>\n\n  <ion-item no-lines margin-top>\n\n    <ion-thumbnail item-start>\n\n      <img style="border-radius: 50%;" src="../../assets/imgs/safety-first.png">\n\n    </ion-thumbnail>\n\n    <h3>{{ name }}</h3>\n\n    <p>MARUYASU INDUSTRIES (THAILAND) CO. LTD</p>\n\n  </ion-item>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-item no-lines no-padding>\n\n    <ion-row>\n\n      <ion-col text-start>\n\n        <h5>ID</h5>\n\n      </ion-col>\n\n      <ion-col text->\n\n        <h5>ประเภทงาน</h5>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <h5>วันที่</h5>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <h5>ดูสถานะ</h5>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines no-padding *ngFor="let data of doclists;let i = index;">\n\n    <ion-row>\n\n      <ion-col text-left col-3>\n\n        <h5 style="color: #f53d3d;">{{ data.codegen }}</h5>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <h5>{{ data.work_name }}</h5>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <h5>{{ data.date }}</h5>\n\n      </ion-col>\n\n      <ion-col text-center col-2 (click)="status_docs(data)">\n\n        <ion-icon  name="md-card" color="danger"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\docslist\docslist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], DocslistPage);
    return DocslistPage;
}());

//# sourceMappingURL=docslist.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(15);
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
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatusPage = /** @class */ (function () {
    function StatusPage(app, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, db) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.uid = localStorage.getItem("uidmitwork");
        this.role = localStorage.getItem("role");
        this.statuslist = navParams.get("data");
        // console.log(this.statuslist);
        this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(data != null)) return [3 /*break*/, 4];
                        if (!(data.status == 200)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, data.result.email];
                    case 1:
                        _a.email = _d.sent();
                        _b = this;
                        return [4 /*yield*/, data.result.password];
                    case 2:
                        _b.password = _d.sent();
                        _c = this;
                        return [4 /*yield*/, data.result.name];
                    case 3:
                        _c.name = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.db.getServiceJson({
            "type": "alldocslistbycodegen",
            "codegen": this.statuslist.codegen
        }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(data);
                if (data != null) {
                    if (data.status == 200) {
                        // console.log(data.result);
                        if (this.statuslist.work_name == 'การอบรม') {
                            this.approved = data.result.status_work4 == 'Approve' ? true : false;
                            this.noapproved = data.result.status_work5 == 'Approve' ? true : false;
                            this.remarks = data.result.remarks;
                        }
                        else {
                            this.reportActivity = data.result.status_work1 == 'Approve' ? true : false;
                            this.waitingForReview = data.result.status_work2 == 'Approve' ? true : false;
                            this.waitingForApproval = data.result.status_work3 == 'Approve' ? true : false;
                            this.approved = data.result.status_work4 == 'Approve' ? true : false;
                            this.noapproved = data.result.status_work5 == 'Approve' ? true : false;
                            this.remarks = data.result.remarks;
                        }
                        // this.notifications("อัพเดทสถานะสำเร็จ");
                    }
                    else {
                        this.notifications("อัพเดทสถานะไม่สำเร็จ");
                    }
                }
                return [2 /*return*/];
            });
        }); });
    }
    StatusPage.prototype.doRefresh = function (refresher) {
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
                                    this.uid = localStorage.getItem("uidmitwork");
                                    return [4 /*yield*/, this.db.getServiceJson({ "type": "account", "user_id": this.uid }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(data != null)) return [3 /*break*/, 5];
                                                        if (!(data.status == 200)) return [3 /*break*/, 5];
                                                        _a = this;
                                                        return [4 /*yield*/, data.result.email];
                                                    case 1:
                                                        _a.email = _d.sent();
                                                        _b = this;
                                                        return [4 /*yield*/, data.result.password];
                                                    case 2:
                                                        _b.password = _d.sent();
                                                        _c = this;
                                                        return [4 /*yield*/, data.result.name];
                                                    case 3:
                                                        _c.name = _d.sent();
                                                        return [4 /*yield*/, this.loading.dismiss()];
                                                    case 4:
                                                        _d.sent();
                                                        _d.label = 5;
                                                    case 5: return [2 /*return*/];
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
    StatusPage.prototype.autoRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refresher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refresher = {
                            complete: function () {
                                // console.log("Refresher complete");
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
    StatusPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("ionViewWillEnter");
                    return [4 /*yield*/, this.autoRefresh()];
                    case 1:
                        // console.log("ionViewWillEnter");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    StatusPage.prototype.notifications = function (text) {
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
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-status",template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\status\status.html"*/'<ion-header o-shadow no-border>\n\n  <ion-navbar no-lines margin-top>\n\n    <ion-title>การติดตามสถานะ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngIf="statuslist.work_name == \'การอบรม\'" padding>\n\n\n\n    <h5 text-left padding>Transaction Tracking ( การติดตามสถานะ )</h5>\n\n    <h5 text-left padding>ID Number: {{ statuslist.codegen }}</h5>\n\n\n\n    \n\n    <ion-item no-lines>\n\n      <ion-label>อนุมัติ</ion-label>\n\n      <ion-checkbox color="danger" [checked]="approved" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>ไม่อนุมัติ</ion-label>\n\n      <ion-checkbox color="danger" [checked]="noapproved" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>หมายเหตุ</ion-label>\n\n      <ion-input type="text" [(ngModel)]="remarks" placeholder="หมายเหตุ" disabled="true"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="statuslist.work_name != \'การอบรม\'" padding>\n\n\n\n    <h5 text-left padding>Transaction Tracking ( การติดตามสถานะ )</h5>\n\n    <h5 text-left padding>ID Number: {{ statuslist.codegen }}</h5>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>รายงานกิจกรรม</ion-label>\n\n      <ion-checkbox color="danger" [checked]="reportActivity" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>รอตรวจสอบเอกสาร</ion-label>\n\n      <ion-checkbox color="danger" [checked]="waitingForReview" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>รออนุมัติ</ion-label>\n\n      <ion-checkbox color="danger" [checked]="waitingForApproval" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>อนุมัติ</ion-label>\n\n      <ion-checkbox color="danger" [checked]="approved" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>ไม่อนุมัติ</ion-label>\n\n      <ion-checkbox color="danger" [checked]="noapproved" disabled="true">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>หมายเหตุ</ion-label>\n\n      <ion-input type="text" [(ngModel)]="remarks" placeholder="หมายเหตุ" disabled="true"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\status\status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_docs_docs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_announce_announce__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_user__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_docsuser_docsuser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_docslist_docslist__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_folderdetail_folderdetail__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_status_status__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_workdetail_workdetail__ = __webpack_require__(205);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_docs_docs__["a" /* DocsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_announce_announce__["a" /* AnnouncePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_docsuser_docsuser__["a" /* DocsuserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_docslist_docslist__["a" /* DocslistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_folderdetail_folderdetail__["a" /* FolderdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workdetail_workdetail__["a" /* WorkdetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { mode: "ios" }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_docs_docs__["a" /* DocsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_announce_announce__["a" /* AnnouncePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_docsuser_docsuser__["a" /* DocsuserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_docslist_docslist__["a" /* DocslistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_folderdetail_folderdetail__["a" /* FolderdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workdetail_workdetail__["a" /* WorkdetailPage */]
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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(104);
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
            if (localStorage.getItem('uidmitwork') != null && localStorage.getItem('role') != null) {
                splashScreen.hide();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                splashScreen.hide();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                localStorage.removeItem('uidmitwork');
                localStorage.removeItem('role');
                localStorage.clear();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\app\app_mitwork\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\app\app_mitwork\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-ps": 216,
	"./ar-ps.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 211,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bm": 222,
	"./bm.js": 222,
	"./bn": 223,
	"./bn-bd": 224,
	"./bn-bd.js": 224,
	"./bn.js": 223,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-in": 243,
	"./en-in.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./en-sg": 245,
	"./en-sg.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-mx": 249,
	"./es-mx.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 247,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fil": 255,
	"./fil.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./ga": 261,
	"./ga.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-deva": 264,
	"./gom-deva.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./gu": 266,
	"./gu.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it-ch": 275,
	"./it-ch.js": 275,
	"./it.js": 274,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ku": 283,
	"./ku-kmr": 284,
	"./ku-kmr.js": 284,
	"./ku.js": 283,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./oc-lnc": 305,
	"./oc-lnc.js": 305,
	"./pa-in": 306,
	"./pa-in.js": 306,
	"./pl": 307,
	"./pl.js": 307,
	"./pt": 308,
	"./pt-br": 309,
	"./pt-br.js": 309,
	"./pt.js": 308,
	"./ro": 310,
	"./ro.js": 310,
	"./ru": 311,
	"./ru.js": 311,
	"./sd": 312,
	"./sd.js": 312,
	"./se": 313,
	"./se.js": 313,
	"./si": 314,
	"./si.js": 314,
	"./sk": 315,
	"./sk.js": 315,
	"./sl": 316,
	"./sl.js": 316,
	"./sq": 317,
	"./sq.js": 317,
	"./sr": 318,
	"./sr-cyrl": 319,
	"./sr-cyrl.js": 319,
	"./sr.js": 318,
	"./ss": 320,
	"./ss.js": 320,
	"./sv": 321,
	"./sv.js": 321,
	"./sw": 322,
	"./sw.js": 322,
	"./ta": 323,
	"./ta.js": 323,
	"./te": 324,
	"./te.js": 324,
	"./tet": 325,
	"./tet.js": 325,
	"./tg": 326,
	"./tg.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tk": 328,
	"./tk.js": 328,
	"./tl-ph": 329,
	"./tl-ph.js": 329,
	"./tlh": 330,
	"./tlh.js": 330,
	"./tr": 331,
	"./tr.js": 331,
	"./tzl": 332,
	"./tzl.js": 332,
	"./tzm": 333,
	"./tzm-latn": 334,
	"./tzm-latn.js": 334,
	"./tzm.js": 333,
	"./ug-cn": 335,
	"./ug-cn.js": 335,
	"./uk": 336,
	"./uk.js": 336,
	"./ur": 337,
	"./ur.js": 337,
	"./uz": 338,
	"./uz-latn": 339,
	"./uz-latn.js": 339,
	"./uz.js": 338,
	"./vi": 340,
	"./vi.js": 340,
	"./x-pseudo": 341,
	"./x-pseudo.js": 341,
	"./yo": 342,
	"./yo.js": 342,
	"./zh-cn": 343,
	"./zh-cn.js": 343,
	"./zh-hk": 344,
	"./zh-hk.js": 344,
	"./zh-mo": 345,
	"./zh-mo.js": 345,
	"./zh-tw": 346,
	"./zh-tw.js": 346
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
webpackContext.id = 427;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(104);
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
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50)
                ]],
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
                        localStorage.setItem('uidmitwork', null);
                        localStorage.setItem('role', null);
                        data = this.loginForm.value;
                        if (!data.email) {
                            return [2 /*return*/];
                        }
                        credentials = {
                            type: "login",
                            email: data.email,
                            password: data.password
                        };
                        return [4 /*yield*/, this.db.getServiceJson(credentials).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, _c, _d, _e, _f;
                                return __generator(this, function (_g) {
                                    switch (_g.label) {
                                        case 0:
                                            if (!(data != null)) return [3 /*break*/, 11];
                                            if (!(data.status === 200)) return [3 /*break*/, 8];
                                            if (!(data.result === 401)) return [3 /*break*/, 1];
                                            this.notifications("อีเมลหรือชื่อผู้ใช้ไม่ถูกต้อง");
                                            return [2 /*return*/];
                                        case 1:
                                            _b = (_a = localStorage).setItem;
                                            _c = ['uidmitwork'];
                                            return [4 /*yield*/, data.result.user_id];
                                        case 2: return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent()]))];
                                        case 3:
                                            _g.sent();
                                            _e = (_d = localStorage).setItem;
                                            _f = ['role'];
                                            return [4 /*yield*/, data.result.role];
                                        case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent()]))];
                                        case 5:
                                            _g.sent();
                                            return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */])];
                                        case 6:
                                            _g.sent();
                                            _g.label = 7;
                                        case 7: return [3 /*break*/, 10];
                                        case 8: return [4 /*yield*/, this.navCtrl.setRoot(LoginPage_1)];
                                        case 9:
                                            _g.sent();
                                            localStorage.removeItem('uidmitwork');
                                            localStorage.removeItem('role');
                                            localStorage.clear();
                                            _g.label = 10;
                                        case 10: return [3 /*break*/, 13];
                                        case 11: return [4 /*yield*/, this.navCtrl.setRoot(LoginPage_1)];
                                        case 12:
                                            _g.sent();
                                            localStorage.removeItem('uidmitwork');
                                            localStorage.removeItem('role');
                                            localStorage.clear();
                                            _g.label = 13;
                                        case 13: return [2 /*return*/];
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
    LoginPage.prototype.btnregister = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\app\app_mitwork\src\pages\login\login.html"*/'<ion-content padding>\n\n    <div class="header" padding margin-top>\n\n        <h1>เข้าสู่ระบบ</h1>\n\n    </div>\n\n    <!-- <div class="header" padding margin-top>\n\n        <img src="../../assets/imgs/logo.png">\n\n    </div> -->\n\n    <div class="btnsign">\n\n        <form [formGroup]="loginForm" (ngSubmit)="login()">\n\n\n\n            <!-- <ion-item no-lines>\n\n                <ion-label>ประเภท</ion-label>\n\n                <ion-select formControlName="role">\n\n                    <ion-option value="USER">ผู้รับเหมา</ion-option>\n\n                    <ion-option value="ADMIN">official</ion-option>\n\n                </ion-select>\n\n            </ion-item> -->\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="text" formControlName="email" placeholder="อีเมล">\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-input type="password" formControlName="password" placeholder="รหัสผ่าน">\n\n                </ion-input>\n\n            </ion-item>\n\n\n\n            <div class="error" color="danger" *ngIf="loginForm.get(\'password\').hasError(\'minlength\') && loginForm.get(\'password\').touched">\n\n                <div class="form-error">Password must be at least 6 characters long</div>\n\n            </div>\n\n\n\n            <div class="error">\n\n                <div class="form-error">{{loginError}}</div>\n\n            </div>\n\n            <button right margin-top ion-button full round type="submit" [disabled]="!loginForm.valid">เข้าสู่ระบบ\n\n            </button>\n\n        </form>\n\n    </div>\n\n\n\n\n\n    <div class="btnform">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col text-center>\n\n                    <p padding margin-left>Don\'t have account <b (click)="btnregister()">Create an account</b></p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\app\app_mitwork\src\pages\login\login.html"*/,
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

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    // URL: "http://localhost/makerz/MITWork/api/api.php",
    // URL_Work_upload: "http://localhost/makerz/MITWork/api/upload_work.php",
    // URL_Work_download: "http://localhost/makerz/MITWork/api/uploads/"
    URL: "https://mitworkpermit.tech/MITWork/api/api.php",
    URL_Work_upload: "https://mitworkpermit.tech/MITWork/api/upload_work.php",
    URL_Work_download: "https://mitworkpermit.tech/MITWork/api/uploads/",
};
//# sourceMappingURL=environment.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map