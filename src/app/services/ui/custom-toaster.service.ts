import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class CustomToasterService {
  constructor(private toastr: ToastrService) {}
  message(
    message: string,
    title: string,
    ToasterOptions: Partial<ToasterOptions>
  ) {
    this.toastr[ToasterOptions.messageType](message, title, {
      positionClass: ToasterOptions.Position,
    });
  }
}
export enum ToastrmessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
export enum ToasterPosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
export class ToasterOptions {
  messageType: ToastrmessageType;
  Position: ToasterPosition;
}
