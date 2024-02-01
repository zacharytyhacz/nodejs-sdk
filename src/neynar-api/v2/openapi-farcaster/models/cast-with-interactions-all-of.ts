/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CastWithInteractionsReactions } from './cast-with-interactions-reactions';
// May contain unused imports in some cases
// @ts-ignore
import { CastWithInteractionsReplies } from './cast-with-interactions-replies';
// May contain unused imports in some cases
// @ts-ignore
import { FrameAction } from './frame-action';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface CastWithInteractionsAllOf
 */
export interface CastWithInteractionsAllOf {
    /**
     * 
     * @type {Array<FrameAction>}
     * @memberof CastWithInteractionsAllOf
     */
    'frames'?: Array<FrameAction>;
    /**
     * 
     * @type {CastWithInteractionsReactions}
     * @memberof CastWithInteractionsAllOf
     */
    'reactions': CastWithInteractionsReactions;
    /**
     * 
     * @type {CastWithInteractionsReplies}
     * @memberof CastWithInteractionsAllOf
     */
    'replies': CastWithInteractionsReplies;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAllOf
     */
    'thread_hash': string | null;
    /**
     * 
     * @type {Array<User>}
     * @memberof CastWithInteractionsAllOf
     */
    'mentioned_profiles': Array<User>;
}

