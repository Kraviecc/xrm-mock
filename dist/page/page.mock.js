"use strict";
/// <reference path="../../node_modules/@types/xrm/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var PageMock = (function () {
    function PageMock(components) {
        this.context = components.context;
        this.data = components.data;
        this.ui = components.ui;
    }
    PageMock.prototype.getAttribute = function (param) {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        }
        else if (param && typeof param === 'string') {
            return this.data.entity.attributes.get(param);
        }
        else if (typeof param === 'number') {
            return this.data.entity.attributes.get()[param];
        }
        else if (param !== undefined) {
            throw ('Xrm.Page.getAttribute(delegate) not implemented');
        }
    };
    PageMock.prototype.getControl = function (param) {
        if (!arguments.length) {
            return this.ui.controls.get();
        }
        else if (typeof param === 'string') {
            return this.ui.controls.get(param);
        }
        else if (typeof param === "number") {
            return this.ui.controls.get()[param];
        }
        else if (param !== undefined) {
            throw ('getControl as delegate not implemented');
        }
    };
    return PageMock;
}());
exports.PageMock = PageMock;
