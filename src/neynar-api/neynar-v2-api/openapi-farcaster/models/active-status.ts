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



/**
 * The status of a user.   - active: The user is currently active.   - inactive: The user is not currently active. 
 * @export
 * @enum {string}
 */

export const ActiveStatus = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type ActiveStatus = typeof ActiveStatus[keyof typeof ActiveStatus];



