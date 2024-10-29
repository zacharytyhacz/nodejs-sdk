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
import { EmbedUrlMetadataHtml } from './embed-url-metadata-html';
// May contain unused imports in some cases
// @ts-ignore
import { EmbedUrlMetadataImage } from './embed-url-metadata-image';
// May contain unused imports in some cases
// @ts-ignore
import { EmbedUrlMetadataVideo } from './embed-url-metadata-video';

/**
 * 
 * @export
 * @interface EmbedUrlMetadata
 */
export interface EmbedUrlMetadata {
    /**
     * 
     * @type {string}
     * @memberof EmbedUrlMetadata
     */
    '_status': string;
    /**
     * 
     * @type {string}
     * @memberof EmbedUrlMetadata
     */
    'content_type'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EmbedUrlMetadata
     */
    'content_length'?: number | null;
    /**
     * 
     * @type {EmbedUrlMetadataImage}
     * @memberof EmbedUrlMetadata
     */
    'image'?: EmbedUrlMetadataImage;
    /**
     * 
     * @type {EmbedUrlMetadataVideo}
     * @memberof EmbedUrlMetadata
     */
    'video'?: EmbedUrlMetadataVideo;
    /**
     * 
     * @type {EmbedUrlMetadataHtml}
     * @memberof EmbedUrlMetadata
     */
    'html'?: EmbedUrlMetadataHtml;
}

