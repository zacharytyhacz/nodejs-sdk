/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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

export const CastType = {
    Mention: 'cast-mention',
    Reply: 'cast-reply'
} as const;

export type CastType = typeof CastType[keyof typeof CastType];



