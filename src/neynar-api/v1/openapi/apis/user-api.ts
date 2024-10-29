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
import { CustodyAddressResponse } from '../models';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { RecentUsersResponse } from '../models';
// @ts-ignore
import { UserCastLikeResponse } from '../models';
// @ts-ignore
import { UserResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk), find custody address in user obj. Returns the custody address for a given FID
         * @summary DEPRECATED - Fetch the custody address for a given FID
         * @param {number} fid FID of a user
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        custodyAddress: async (fid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('custodyAddress', 'fid', fid)
            const localVarPath = `/farcaster/custody-address`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
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
         * Fetch a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Fetch Recent Users
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 100, max 1000)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recentUsers: async (viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/farcaster/recent-users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk). Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by FID
         * @param {number} fid FID of a user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        user: async (fid: number, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('user', 'fid', fid)
            const localVarPath = `/farcaster/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
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
         * Now deprecated, use [v2/user/by_username](https://docs.neynar.com/reference/user-by-username-v2) instead. Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by username
         * @param {string} username Username of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        userByUsernameV1: async (username: string, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('userByUsernameV1', 'username', username)
            const localVarPath = `/farcaster/user-by-username`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (username !== undefined) {
                localVarQueryParameter['username'] = username;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
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
         * Now deprecated. use [/v2/reactions/user](https://docs.neynar.com/reference/reactions-user). Fetch all the liked cast of a User
         * @summary DEPRECATED -- Fetch User Cast Likes
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 25, max 150)
         * @param {string} [cursor] Pagination cursor
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        userCastLikes: async (fid: number, viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('userCastLikes', 'fid', fid)
            const localVarPath = `/farcaster/user-cast-likes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk), find custody address in user obj. Returns the custody address for a given FID
         * @summary DEPRECATED - Fetch the custody address for a given FID
         * @param {number} fid FID of a user
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async custodyAddress(fid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustodyAddressResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.custodyAddress(fid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Fetch Recent Users
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 100, max 1000)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recentUsers(viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecentUsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recentUsers(viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk). Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by FID
         * @param {number} fid FID of a user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async user(fid: number, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.user(fid, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Now deprecated, use [v2/user/by_username](https://docs.neynar.com/reference/user-by-username-v2) instead. Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by username
         * @param {string} username Username of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async userByUsernameV1(username: string, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userByUsernameV1(username, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Now deprecated. use [/v2/reactions/user](https://docs.neynar.com/reference/reactions-user). Fetch all the liked cast of a User
         * @summary DEPRECATED -- Fetch User Cast Likes
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 25, max 150)
         * @param {string} [cursor] Pagination cursor
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async userCastLikes(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserCastLikeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userCastLikes(fid, viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk), find custody address in user obj. Returns the custody address for a given FID
         * @summary DEPRECATED - Fetch the custody address for a given FID
         * @param {number} fid FID of a user
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        custodyAddress(fid: number, options?: any): AxiosPromise<CustodyAddressResponse> {
            return localVarFp.custodyAddress(fid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Fetch Recent Users
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 100, max 1000)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recentUsers(viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<RecentUsersResponse> {
            return localVarFp.recentUsers(viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk). Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by FID
         * @param {number} fid FID of a user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        user(fid: number, viewerFid?: number, options?: any): AxiosPromise<UserResponse> {
            return localVarFp.user(fid, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Now deprecated, use [v2/user/by_username](https://docs.neynar.com/reference/user-by-username-v2) instead. Returns metadata about a specific user
         * @summary DEPRECATED - Fetch User Information by username
         * @param {string} username Username of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        userByUsernameV1(username: string, viewerFid?: number, options?: any): AxiosPromise<UserResponse> {
            return localVarFp.userByUsernameV1(username, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Now deprecated. use [/v2/reactions/user](https://docs.neynar.com/reference/reactions-user). Fetch all the liked cast of a User
         * @summary DEPRECATED -- Fetch User Cast Likes
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to fetch (default 25, max 150)
         * @param {string} [cursor] Pagination cursor
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        userCastLikes(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<UserCastLikeResponse> {
            return localVarFp.userCastLikes(fid, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk), find custody address in user obj. Returns the custody address for a given FID
     * @summary DEPRECATED - Fetch the custody address for a given FID
     * @param {number} fid FID of a user
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public custodyAddress(fid: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).custodyAddress(fid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of casts from the protocol in reverse chronological order based on timestamp
     * @summary Fetch Recent Users
     * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to fetch (default 100, max 1000)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public recentUsers(viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).recentUsers(viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Now deprecated, use [v2/user/bulk](https://docs.neynar.com/reference/user-bulk). Returns metadata about a specific user
     * @summary DEPRECATED - Fetch User Information by FID
     * @param {number} fid FID of a user
     * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public user(fid: number, viewerFid?: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).user(fid, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Now deprecated, use [v2/user/by_username](https://docs.neynar.com/reference/user-by-username-v2) instead. Returns metadata about a specific user
     * @summary DEPRECATED - Fetch User Information by username
     * @param {string} username Username of the user
     * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userByUsernameV1(username: string, viewerFid?: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userByUsernameV1(username, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Now deprecated. use [/v2/reactions/user](https://docs.neynar.com/reference/reactions-user). Fetch all the liked cast of a User
     * @summary DEPRECATED -- Fetch User Cast Likes
     * @param {number} fid FID of the user
     * @param {number} [viewerFid] FID of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to fetch (default 25, max 150)
     * @param {string} [cursor] Pagination cursor
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userCastLikes(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userCastLikes(fid, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}
