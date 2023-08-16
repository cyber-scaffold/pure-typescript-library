import { EventEmitter } from "events";


/** 基础控制手柄的抽象类 **/
export class FloatController {

  /** 基于发布订阅模式的事件总线 **/
  private event = new EventEmitter();

  /** 注册dialog弹框的打开句柄(一般在组件内部注册) **/
  public registryOpenHandler(callback): void {
    this.event.on("open_dialog", async (params) => {
      try {
        const executeResult = await callback(params);
        this.event.emit("open_success", executeResult);
      } catch (error) {
        this.event.emit("open_error", error);
      };
    });
  };

  /** 注册dialog弹框的确认句柄(一般在组件内部注册) **/
  public registryConfirmHandler(callback): void {
    this.event.on("confirm_dialog", async (params) => {
      try {
        const executeResult = await callback(params);
        this.event.emit("confirm_success", executeResult);
      } catch (error) {
        this.event.emit("confirm_error", error);
      };
    });
  };

  /** 注册dialog弹框的关闭句柄(一般在组件内部注册) **/
  public registryCloseHandler(callback): void {
    this.event.on("close_dialog", async (params) => {
      try {
        const executeResult = await callback(params);
        this.event.emit("close_success", executeResult);
      } catch (error) {
        this.event.emit("close_error", error);
      };
    });
  };

  /** 注册dialog弹框的取消句柄(一般在组件内部注册) **/
  public registryCancelHandler(callback): void {
    this.event.on("cancel_dialog", async (params) => {
      try {
        const executeResult = await callback(params);
        this.event.emit("cancel_success", executeResult);
      } catch (error) {
        this.event.emit("cancel_error", error);
      };
    });
  };

  /** 通过该方法发送打开事件 **/
  public open(params: any): Promise<any> {
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
  };

  /** 通过该方法发送确认事件 **/
  public confirm(params: any): Promise<any> {
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
  };

  /** 通过该方法发送关闭事件 **/
  public close(params: any): Promise<any> {
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
  };

  /** 通过该方法发送取消事件 **/
  public cancel(params: any): Promise<any> {
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
  };

};