import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Inbox Opener
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { InboxOpener } from '@ionic-native/inbox-opener';
 *
 *
 * constructor(private inboxOpener: InboxOpener) { }
 *
 * ...
 *
 *
 * this.inboxOpener.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class InboxOpenerOriginal extends IonicNativePlugin {
    /**
     * Open inbox
     */
    openInbox(): void;
}

export declare const InboxOpener: InboxOpenerOriginal;