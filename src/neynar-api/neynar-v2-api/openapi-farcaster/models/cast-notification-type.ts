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
 * The notification type of a cast. 
 * @export
 * @enum {string}
 */

export const CastNotificationType = {
    Mention: 'cast-mention',
    Reply: 'cast-reply'
} as const;

export type CastNotificationType = typeof CastNotificationType[keyof typeof CastNotificationType];



