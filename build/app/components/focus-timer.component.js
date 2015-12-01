var __decorate=this&&this.__decorate||function(t,e,n,i){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(t,e,n,i);switch(arguments.length){case 2:return t.reduceRight(function(t,e){return e&&e(t)||t},e);case 3:return t.reduceRight(function(t,i){return void(i&&i(e,n))},void 0);case 4:return t.reduceRight(function(t,i){return i&&i(e,n,t)||t},i)}},__metadata=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},angular2_1=require("angular2/angular2"),timer_service_1=require("../services/timer.service"),FocusTimerCmp=function(){function t(t){var e=this;this._timerService=t,this.timeCompleted=new angular2_1.EventEmitter,this.runningTime=new Date,this.runningTime.setMinutes(0),this.runningTime.setSeconds(0),this.clockRunning=!1,this._timerService.runningTime$.subscribe(function(t){return e._calcTime(t)}),this._enableButtons()}return t.prototype.startFocus=function(){this.clockRunning?(this._timerService.stopTimer(),this._enableButtons()):(this._timerService.startTimer(1),this._disableButtons(),this.focusRunning=!0)},t.prototype.startShortBreak=function(){this.clockRunning?(this._timerService.stopTimer(),this._enableButtons()):(this._timerService.startTimer(5),this._disableButtons(),this.shortRunning=!0)},t.prototype.startLongBreak=function(){this.clockRunning?(this._timerService.stopTimer(),this._enableButtons()):(this._timerService.startTimer(15),this._disableButtons(),this.longRunning=!0)},t.prototype._disableButtons=function(){this.focusRunning=!1,this.shortRunning=!1,this.longRunning=!1},t.prototype._enableButtons=function(){this.focusRunning=!0,this.shortRunning=!0,this.longRunning=!0},t.prototype._calcTime=function(t){this.runningTime=t,this.clockRunning=!0,document.title=this.runningTime.getMinutes()+":"+this.runningTime.getSeconds(),0===this.runningTime.getSeconds()&&0===this.runningTime.getMinutes()&&(this.timeCompleted.next(!0),this._enableButtons(),this.clockRunning=!1,document.title="Focus Time Management")},t=__decorate([angular2_1.Component({selector:"focus-timer",templateUrl:"app/components/focus-timer.component.html?v=1448937524709",events:["timeCompleted"]}),__metadata("design:paramtypes",[timer_service_1.TimerService])],t)}();exports.FocusTimerCmp=FocusTimerCmp;