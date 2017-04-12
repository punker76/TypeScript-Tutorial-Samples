"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Friend));
exports.Developer = Developer;
var Skateboarder = (function (_super) {
    __extends(Skateboarder, _super);
    function Skateboarder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skateboarder.prototype.makeKickflip = function () {
        console.log(this.firstName + " made a kickflip");
    };
    return Skateboarder;
}(Friend));
exports.Skateboarder = Skateboarder;
