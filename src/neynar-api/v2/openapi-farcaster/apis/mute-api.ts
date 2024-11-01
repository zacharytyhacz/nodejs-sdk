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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { MuteListResponse } from '../models';
// @ts-ignore
import { MuteReqBody } from '../models';
// @ts-ignore
import { MuteResponse } from '../models';
/**
 * MuteApi - axios parameter creator
 * @export
 */
export const MuteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMute: async (apiKey: string, muteReqBody: MuteReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('addMute', 'apiKey', apiKey)
            // verify required parameter 'muteReqBody' is not null or undefined
            assertParamExists('addMute', 'muteReqBody', muteReqBody)
            const localVarPath = `/farcaster/mute`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(muteReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMute: async (apiKey: string, muteReqBody: MuteReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('deleteMute', 'apiKey', apiKey)
            // verify required parameter 'muteReqBody' is not null or undefined
            assertParamExists('deleteMute', 'muteReqBody', muteReqBody)
            const localVarPath = `/farcaster/mute`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(muteReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s FID (identifier)
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        muteList: async (apiKey: string, fid: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('muteList', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('muteList', 'fid', fid)
            const localVarPath = `/farcaster/mute/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
 * MuteApi - functional programming interface
 * @export
 */
export const MuteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MuteApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addMute(apiKey: string, muteReqBody: MuteReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addMute(apiKey, muteReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMute(apiKey: string, muteReqBody: MuteReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMute(apiKey, muteReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s FID (identifier)
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async muteList(apiKey: string, fid: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.muteList(apiKey, fid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MuteApi - factory interface
 * @export
 */
export const MuteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MuteApiFp(configuration)
    return {
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMute(apiKey: string, muteReqBody: MuteReqBody, options?: any): AxiosPromise<MuteResponse> {
            return localVarFp.addMute(apiKey, muteReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {string} apiKey API key required for authentication.
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMute(apiKey: string, muteReqBody: MuteReqBody, options?: any): AxiosPromise<MuteResponse> {
            return localVarFp.deleteMute(apiKey, muteReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s FID (identifier)
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        muteList(apiKey: string, fid: number, limit?: number, cursor?: string, options?: any): AxiosPromise<MuteListResponse> {
            return localVarFp.muteList(apiKey, fid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MuteApi - object-oriented interface
 * @export
 * @class MuteApi
 * @extends {BaseAPI}
 */
export class MuteApi extends BaseAPI {
    /**
     * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Mute FID
     * @param {string} apiKey API key required for authentication.
     * @param {MuteReqBody} muteReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public addMute(apiKey: string, muteReqBody: MuteReqBody, options?: AxiosRequestConfig) {
        return MuteApiFp(this.configuration).addMute(apiKey, muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Unmute FID
     * @param {string} apiKey API key required for authentication.
     * @param {MuteReqBody} muteReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public deleteMute(apiKey: string, muteReqBody: MuteReqBody, options?: AxiosRequestConfig) {
        return MuteApiFp(this.configuration).deleteMute(apiKey, muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches all FIDs that a user has muted.
     * @summary Muted FIDs of user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid The user\&#39;s FID (identifier)
     * @param {number} [limit] Number of results to fetch (default 20, max 100).
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public muteList(apiKey: string, fid: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return MuteApiFp(this.configuration).muteList(apiKey, fid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}
