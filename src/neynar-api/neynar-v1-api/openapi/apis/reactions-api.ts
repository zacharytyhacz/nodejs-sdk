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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CastLikesResponse } from '../models';
// @ts-ignore
import { CastReactionsResponse } from '../models';
// @ts-ignore
import { CastRecasterResponse } from '../models';
// @ts-ignore
import { ErrorRes } from '../models';
/**
 * ReactionsApi - axios parameter creator
 * @export
 */
export const ReactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all like reactions for a specific cast in reverse chronological order.
         * @summary Get all like reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castLikes: async (apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('castLikes', 'apiKey', apiKey)
            // verify required parameter 'castHash' is not null or undefined
            assertParamExists('castLikes', 'castHash', castHash)
            const localVarPath = `/farcaster/cast-likes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (castHash !== undefined) {
                localVarQueryParameter['castHash'] = castHash;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all reactions (likes and recasts) for a specific cast.
         * @summary Get all reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castReactions: async (apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('castReactions', 'apiKey', apiKey)
            // verify required parameter 'castHash' is not null or undefined
            assertParamExists('castReactions', 'castHash', castHash)
            const localVarPath = `/farcaster/cast-reactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (castHash !== undefined) {
                localVarQueryParameter['castHash'] = castHash;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all recasters for a specific cast.
         * @summary Get all recasters for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castRecasters: async (apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('castRecasters', 'apiKey', apiKey)
            // verify required parameter 'castHash' is not null or undefined
            assertParamExists('castRecasters', 'castHash', castHash)
            const localVarPath = `/farcaster/cast-recasters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (castHash !== undefined) {
                localVarQueryParameter['castHash'] = castHash;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReactionsApi - functional programming interface
 * @export
 */
export const ReactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all like reactions for a specific cast in reverse chronological order.
         * @summary Get all like reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async castLikes(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastLikesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.castLikes(apiKey, castHash, viewerFid, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all reactions (likes and recasts) for a specific cast.
         * @summary Get all reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async castReactions(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastReactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.castReactions(apiKey, castHash, viewerFid, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all recasters for a specific cast.
         * @summary Get all recasters for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async castRecasters(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastRecasterResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.castRecasters(apiKey, castHash, viewerFid, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReactionsApi - factory interface
 * @export
 */
export const ReactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReactionsApiFp(configuration)
    return {
        /**
         * Get all like reactions for a specific cast in reverse chronological order.
         * @summary Get all like reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castLikes(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: any): AxiosPromise<CastLikesResponse> {
            return localVarFp.castLikes(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all reactions (likes and recasts) for a specific cast.
         * @summary Get all reactions for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castReactions(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: any): AxiosPromise<CastReactionsResponse> {
            return localVarFp.castReactions(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all recasters for a specific cast.
         * @summary Get all recasters for a specific cast
         * @param {string} apiKey API key required for authentication.
         * @param {string} castHash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        castRecasters(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: any): AxiosPromise<CastRecasterResponse> {
            return localVarFp.castRecasters(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReactionsApi - object-oriented interface
 * @export
 * @class ReactionsApi
 * @extends {BaseAPI}
 */
export class ReactionsApi extends BaseAPI {
    /**
     * Get all like reactions for a specific cast in reverse chronological order.
     * @summary Get all like reactions for a specific cast
     * @param {string} apiKey API key required for authentication.
     * @param {string} castHash Cast hash
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionsApi
     */
    public castLikes(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig) {
        return ReactionsApiFp(this.configuration).castLikes(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all reactions (likes and recasts) for a specific cast.
     * @summary Get all reactions for a specific cast
     * @param {string} apiKey API key required for authentication.
     * @param {string} castHash Cast hash
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionsApi
     */
    public castReactions(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig) {
        return ReactionsApiFp(this.configuration).castReactions(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all recasters for a specific cast.
     * @summary Get all recasters for a specific cast
     * @param {string} apiKey API key required for authentication.
     * @param {string} castHash Cast hash
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionsApi
     */
    public castRecasters(apiKey: string, castHash: string, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig) {
        return ReactionsApiFp(this.configuration).castRecasters(apiKey, castHash, viewerFid, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }
}

