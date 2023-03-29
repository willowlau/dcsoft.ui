//============== 用户会话 ========================
//Copyright 2023 何镇汐
//Licensed under the MIT license
//================================================
import { Injectable } from '@angular/core';

/**
 * 用户会话
 */
@Injectable({ providedIn: "root" })
export class Session {
    /**
     * 是否认证
     */
    isAuthenticated;
    /**
     * 用户标识
     */
    userId;
}