/// <reference types="xrm" />
export declare class ContextMock implements Xrm.Context {
    client: Xrm.ClientContext;
    clientUrl: string;
    currentTheme: Xrm.Theme;
    isAutoSaveEnabled: boolean;
    orgLcid: number;
    orgUniqueName: string;
    timeZoneOffset: number;
    userId: string;
    userLcid: number;
    userName: string;
    userRoles: string[];
    version: string;
    constructor(components: ContextComponents);
    getClientUrl(): string;
    getCurrentTheme(): Xrm.Theme;
    getIsAutoSaveEnabled(): boolean;
    getOrgLcid(): number;
    getOrgUniqueName(): string;
    getQueryStringParameters(): {
        [index: string]: any;
    };
    getTimeZoneOffsetMinutes(): number;
    getUserId(): string;
    getUserLcid(): number;
    getUserName(): string;
    getUserRoles(): string[];
    getVersion(): string;
    prependOrgName(sPath: string): string;
}
export interface ContextComponents {
    clientContext: Xrm.ClientContext;
    clientUrl?: string;
    currentTheme?: Xrm.Theme;
    isAutoSaveEnabled?: boolean;
    orgLcid?: number;
    orgUniqueName?: string;
    timeZoneOffset?: number;
    userId?: string;
    userLcid?: number;
    userName?: string;
    userRoles?: string[];
    version?: string;
}
