/* tslint:disable */
/* eslint-disable */
/**
 * v1 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { CustodyAddressResponse } from "../models";
// @ts-ignore
import { ErrorRes } from "../models";
// @ts-ignore
import { RecentUsersResponse } from "../models";
// @ts-ignore
import { User200Response } from "../models";
// @ts-ignore
import { UserCastLikeResponse } from "../models";
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Returns the custody address for a given FID
     * @summary Get the custody address for a given FID
     * @param {number} fid fid of a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    custodyAddress: async (
      fid: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("custodyAddress", "fid", fid);
      const localVarPath = `/farcaster/custody-address`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get a list of casts from the protocol in reverse chronological order based on timestamp
     * @summary Get Recent Users
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 100, max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recentUsers: async (
      viewerFid?: number,
      cursor?: string,
      limit?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/farcaster/recent-users`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewerFid"] = viewerFid;
      }

      if (cursor !== undefined) {
        localVarQueryParameter["cursor"] = cursor;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by FID
     * @param {number} fid fid of a user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    user: async (
      fid: number,
      viewerFid?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("user", "fid", fid);
      const localVarPath = `/farcaster/user`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewerFid"] = viewerFid;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by username
     * @param {string} username Username of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userByUsername: async (
      username: string,
      viewerFid?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'username' is not null or undefined
      assertParamExists("userByUsername", "username", username);
      const localVarPath = `/farcaster/user-by-username`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (username !== undefined) {
        localVarQueryParameter["username"] = username;
      }

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewerFid"] = viewerFid;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Fetch all the liked cast of a User
     * @summary Get User Cast Likes
     * @param {number} fid FID of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {string} [cursor] Pagination cursor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCastLikes: async (
      fid: number,
      viewerFid?: number,
      limit?: number,
      cursor?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("userCastLikes", "fid", fid);
      const localVarPath = `/farcaster/user-cast-likes`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewerFid"] = viewerFid;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (cursor !== undefined) {
        localVarQueryParameter["cursor"] = cursor;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration);
  return {
    /**
     * Returns the custody address for a given FID
     * @summary Get the custody address for a given FID
     * @param {number} fid fid of a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async custodyAddress(
      fid: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CustodyAddressResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.custodyAddress(
        fid,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get a list of casts from the protocol in reverse chronological order based on timestamp
     * @summary Get Recent Users
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 100, max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async recentUsers(
      viewerFid?: number,
      cursor?: string,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RecentUsersResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.recentUsers(
        viewerFid,
        cursor,
        limit,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by FID
     * @param {number} fid fid of a user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async user(
      fid: number,
      viewerFid?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<User200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.user(
        fid,
        viewerFid,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by username
     * @param {string} username Username of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userByUsername(
      username: string,
      viewerFid?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<User200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userByUsername(
        username,
        viewerFid,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Fetch all the liked cast of a User
     * @summary Get User Cast Likes
     * @param {number} fid FID of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {string} [cursor] Pagination cursor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userCastLikes(
      fid: number,
      viewerFid?: number,
      limit?: number,
      cursor?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserCastLikeResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userCastLikes(
        fid,
        viewerFid,
        limit,
        cursor,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserApiFp(configuration);
  return {
    /**
     * Returns the custody address for a given FID
     * @summary Get the custody address for a given FID
     * @param {UserApiCustodyAddressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    custodyAddress(
      requestParameters: UserApiCustodyAddressRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<CustodyAddressResponse> {
      return localVarFp
        .custodyAddress(requestParameters.fid, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get a list of casts from the protocol in reverse chronological order based on timestamp
     * @summary Get Recent Users
     * @param {UserApiRecentUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recentUsers(
      requestParameters: UserApiRecentUsersRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<RecentUsersResponse> {
      return localVarFp
        .recentUsers(
          requestParameters.viewerFid,
          requestParameters.cursor,
          requestParameters.limit,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by FID
     * @param {UserApiUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    user(
      requestParameters: UserApiUserRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<User200Response> {
      return localVarFp
        .user(requestParameters.fid, requestParameters.viewerFid, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns metadata about a specific user
     * @summary Get User Information by username
     * @param {UserApiUserByUsernameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userByUsername(
      requestParameters: UserApiUserByUsernameRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<User200Response> {
      return localVarFp
        .userByUsername(
          requestParameters.username,
          requestParameters.viewerFid,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Fetch all the liked cast of a User
     * @summary Get User Cast Likes
     * @param {UserApiUserCastLikesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCastLikes(
      requestParameters: UserApiUserCastLikesRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<UserCastLikeResponse> {
      return localVarFp
        .userCastLikes(
          requestParameters.fid,
          requestParameters.viewerFid,
          requestParameters.limit,
          requestParameters.cursor,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for custodyAddress operation in UserApi.
 * @export
 * @interface UserApiCustodyAddressRequest
 */
export interface UserApiCustodyAddressRequest {
  /**
   * fid of a user
   * @type {number}
   * @memberof UserApiCustodyAddress
   */
  readonly fid: number;
}

/**
 * Request parameters for recentUsers operation in UserApi.
 * @export
 * @interface UserApiRecentUsersRequest
 */
export interface UserApiRecentUsersRequest {
  /**
   * fid of the user viewing this information, needed for contextual information.
   * @type {number}
   * @memberof UserApiRecentUsers
   */
  readonly viewerFid?: number;

  /**
   * Pagination cursor.
   * @type {string}
   * @memberof UserApiRecentUsers
   */
  readonly cursor?: string;

  /**
   * Number of results to retrieve (default 100, max 1000)
   * @type {number}
   * @memberof UserApiRecentUsers
   */
  readonly limit?: number;
}

/**
 * Request parameters for user operation in UserApi.
 * @export
 * @interface UserApiUserRequest
 */
export interface UserApiUserRequest {
  /**
   * fid of a user
   * @type {number}
   * @memberof UserApiUser
   */
  readonly fid: number;

  /**
   * fid of the user viewing this information, needed for contextual information.
   * @type {number}
   * @memberof UserApiUser
   */
  readonly viewerFid?: number;
}

/**
 * Request parameters for userByUsername operation in UserApi.
 * @export
 * @interface UserApiUserByUsernameRequest
 */
export interface UserApiUserByUsernameRequest {
  /**
   * Username of the user
   * @type {string}
   * @memberof UserApiUserByUsername
   */
  readonly username: string;

  /**
   * fid of the user viewing this information, needed for contextual information.
   * @type {number}
   * @memberof UserApiUserByUsername
   */
  readonly viewerFid?: number;
}

/**
 * Request parameters for userCastLikes operation in UserApi.
 * @export
 * @interface UserApiUserCastLikesRequest
 */
export interface UserApiUserCastLikesRequest {
  /**
   * FID of the user
   * @type {number}
   * @memberof UserApiUserCastLikes
   */
  readonly fid: number;

  /**
   * fid of the user viewing this information, needed for contextual information.
   * @type {number}
   * @memberof UserApiUserCastLikes
   */
  readonly viewerFid?: number;

  /**
   * Number of results to retrieve (default 25, max 150)
   * @type {number}
   * @memberof UserApiUserCastLikes
   */
  readonly limit?: number;

  /**
   * Pagination cursor
   * @type {string}
   * @memberof UserApiUserCastLikes
   */
  readonly cursor?: string;
}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   * Returns the custody address for a given FID
   * @summary Get the custody address for a given FID
   * @param {UserApiCustodyAddressRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public custodyAddress(
    requestParameters: UserApiCustodyAddressRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .custodyAddress(requestParameters.fid, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get a list of casts from the protocol in reverse chronological order based on timestamp
   * @summary Get Recent Users
   * @param {UserApiRecentUsersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public recentUsers(
    requestParameters: UserApiRecentUsersRequest = {},
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .recentUsers(
        requestParameters.viewerFid,
        requestParameters.cursor,
        requestParameters.limit,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns metadata about a specific user
   * @summary Get User Information by FID
   * @param {UserApiUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public user(
    requestParameters: UserApiUserRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .user(requestParameters.fid, requestParameters.viewerFid, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns metadata about a specific user
   * @summary Get User Information by username
   * @param {UserApiUserByUsernameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userByUsername(
    requestParameters: UserApiUserByUsernameRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .userByUsername(
        requestParameters.username,
        requestParameters.viewerFid,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Fetch all the liked cast of a User
   * @summary Get User Cast Likes
   * @param {UserApiUserCastLikesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userCastLikes(
    requestParameters: UserApiUserCastLikesRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .userCastLikes(
        requestParameters.fid,
        requestParameters.viewerFid,
        requestParameters.limit,
        requestParameters.cursor,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}