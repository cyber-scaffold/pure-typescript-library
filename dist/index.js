"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatController = void 0;
const events_1 = require("events");
/** 基础控制手柄的抽象类 **/
class FloatController {
    constructor() {
        /** 基于发布订阅模式的事件总线 **/
        this.event = new events_1.EventEmitter();
    }
    /** 注册dialog弹框的打开句柄(一般在组件内部注册) **/
    registryOpenHandler(callback) {
        this.event.on("open_dialog", (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const executeResult = yield callback(params);
                this.event.emit("open_success", executeResult);
            }
            catch (error) {
                this.event.emit("open_error", error);
            }
            ;
        }));
    }
    ;
    /** 注册dialog弹框的确认句柄(一般在组件内部注册) **/
    registryConfirmHandler(callback) {
        this.event.on("confirm_dialog", (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const executeResult = yield callback(params);
                this.event.emit("confirm_success", executeResult);
            }
            catch (error) {
                this.event.emit("confirm_error", error);
            }
            ;
        }));
    }
    ;
    /** 注册dialog弹框的关闭句柄(一般在组件内部注册) **/
    registryCloseHandler(callback) {
        this.event.on("close_dialog", (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const executeResult = yield callback(params);
                this.event.emit("close_success", executeResult);
            }
            catch (error) {
                this.event.emit("close_error", error);
            }
            ;
        }));
    }
    ;
    /** 注册dialog弹框的取消句柄(一般在组件内部注册) **/
    registryCancelHandler(callback) {
        this.event.on("cancel_dialog", (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const executeResult = yield callback(params);
                this.event.emit("cancel_success", executeResult);
            }
            catch (error) {
                this.event.emit("cancel_error", error);
            }
            ;
        }));
    }
    ;
    /** 通过该方法发送打开事件 **/
    open(params) {
        return new Promise((resolve, reject) => {
            this.event.on("open_success", (executeResult) => {
                resolve(executeResult);
                this.event.removeAllListeners("open_success");
                this.event.removeAllListeners("open_error");
            });
            this.event.on("open_error", (error) => {
                reject(error);
                this.event.removeAllListeners("open_success");
                this.event.removeAllListeners("open_error");
            });
            this.event.emit("open_dialog", params);
        });
    }
    ;
    /** 通过该方法发送确认事件 **/
    confirm(params) {
        return new Promise((resolve, reject) => {
            this.event.on("confirm_success", (executeResult) => {
                resolve(executeResult);
                this.event.removeAllListeners("confirm_success");
                this.event.removeAllListeners("confirm_error");
            });
            this.event.on("confirm_error", (error) => {
                reject(error);
                this.event.removeAllListeners("confirm_success");
                this.event.removeAllListeners("confirm_error");
            });
            this.event.emit("confirm_dialog", params);
        });
    }
    ;
    /** 通过该方法发送关闭事件 **/
    close(params) {
        return new Promise((resolve, reject) => {
            this.event.on("close_success", (executeResult) => {
                resolve(executeResult);
                this.event.removeAllListeners("close_success");
                this.event.removeAllListeners("close_error");
            });
            this.event.on("close_error", (error) => {
                reject(error);
                this.event.removeAllListeners("close_success");
                this.event.removeAllListeners("close_error");
            });
            this.event.emit("close_dialog", params);
        });
    }
    ;
    /** 通过该方法发送取消事件 **/
    cancel(params) {
        return new Promise((resolve, reject) => {
            this.event.on("cancel_success", (executeResult) => {
                resolve(executeResult);
                this.event.removeAllListeners("cancel_success");
                this.event.removeAllListeners("cancel_error");
            });
            this.event.on("cancel_error", (error) => {
                console.log("cancel_error");
                this.event.removeAllListeners("cancel_success");
                this.event.removeAllListeners("cancel_error");
            });
            this.event.emit("cancel_dialog", params);
        });
    }
    ;
}
exports.FloatController = FloatController;
;
//# sourceMappingURL=index.js.map