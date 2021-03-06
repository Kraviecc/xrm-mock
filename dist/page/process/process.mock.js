"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessMock = (function () {
    function ProcessMock(components) {
        this.id = components.id;
        this.name = components.name;
        this.stages = components.stages;
        this.rendered = components.rendered;
    }
    ProcessMock.prototype.getId = function () {
        return this.id;
    };
    ProcessMock.prototype.getName = function () {
        return this.name;
    };
    ProcessMock.prototype.getStages = function () {
        return this.stages;
    };
    ProcessMock.prototype.isRendered = function () {
        return this.rendered;
    };
    return ProcessMock;
}());
exports.ProcessMock = ProcessMock;
