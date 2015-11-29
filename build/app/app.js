var __decorate=this&&this.__decorate||function(e,t,r,a){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,r,a);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,a){return void(a&&a(t,r))},void 0);case 4:return e.reduceRight(function(e,a){return a&&a(t,r,e)||e},a)}},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},angular2_1=require("angular2/angular2"),router_1=require("angular2/router"),http_1=require("angular2/http"),data_service_1=require("./services/data.service"),auth_service_1=require("./services/auth.service"),timer_service_1=require("./services/timer.service"),notification_service_1=require("./services/notification.service"),about_1=require("./about"),home_1=require("./home"),stats_1=require("./stats"),focus_user_image_component_1=require("./components/focus-user-image.component"),App=function(){function e(e){var t=this;this._authService=e,this._authService.authUser$.subscribe(function(e){return t.authUser=e}),this._authService.loadAuthUser(),this.navOpen=!1}return e.prototype.logout=function(){this._authService.logout()},e=__decorate([angular2_1.Component({selector:"focus-app",templateUrl:"app/app.html?v=1448836783862",directives:[router_1.RouterOutlet,router_1.RouterLink,focus_user_image_component_1.FocusUserImageCmp]}),router_1.RouteConfig([{path:"/",component:home_1.Home,as:"Home"},{path:"/about",component:about_1.About,as:"About"},{path:"/stats",component:stats_1.Stats,as:"Stats"}]),__metadata("design:paramtypes",[auth_service_1.AuthService])],e)}();angular2_1.bootstrap(App,[router_1.ROUTER_BINDINGS,angular2_1.FORM_BINDINGS,http_1.HTTP_BINDINGS,angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App),angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),[data_service_1.DataService,auth_service_1.AuthService,timer_service_1.TimerService,notification_service_1.NotificationService]]);