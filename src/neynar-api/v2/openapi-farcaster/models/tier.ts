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
import { TierPrice } from './tier-price';

/**
 * 
 * @export
 * @interface Tier
 */
export interface Tier {
    /**
     * 
     * @type {number}
     * @memberof Tier
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Tier
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof Tier
     */
    'art_url'?: string;
    /**
     * 
     * @type {TierPrice}
     * @memberof Tier
     */
    'price'?: TierPrice;
    /**
     * 
     * @type {number}
     * @memberof Tier
     */
    'max_commitment_seconds'?: number;
    /**
     * 
     * @type {string}
     * @memberof Tier
     */
    'start_timestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tier
     */
    'end_timestamp'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Tier
     */
    'reward_basis_points'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Tier
     */
    'paused'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Tier
     */
    'transferrable'?: boolean;
}

