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
import { AddVerificationReqBody } from "../models";
// @ts-ignore
import { BulkFollowResponse } from "../models";
// @ts-ignore
import { ErrorRes } from "../models";
// @ts-ignore
import { FollowReqBody } from "../models";
// @ts-ignore
import { OperationResponse } from "../models";
// @ts-ignore
import { RemoveVerificationReqBody } from "../models";
// @ts-ignore
import { UpdateUserReqBody } from "../models";
// @ts-ignore
import { UserBulk200Response } from "../models";
// @ts-ignore
import { UserSearchResponse } from "../models";
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Removes verification for an eth address for the user
     * (In order to add verification `signer_uuid` must be approved)
     * 
     * @summary Removes verification for an eth address for the user
     * @param {RemoveVerificationReqBody} removeVerificationReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    farcasterUserVerificationDelete: async (
      removeVerificationReqBody: RemoveVerificationReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'removeVerificationReqBody' is not null or undefined
      assertParamExists(
        "farcasterUserVerificationDelete",
        "removeVerificationReqBody",
        removeVerificationReqBody
      );
      const localVarPath = `/farcaster/user/verification`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        removeVerificationReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Adds verification for an eth address for the user
     * (In order to add verification `signer_uuid` must be approved)
     * 
     * @summary Adds verification for an eth address for the user
     * @param {AddVerificationReqBody} addVerificationReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    farcasterUserVerificationPost: async (
      addVerificationReqBody: AddVerificationReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'addVerificationReqBody' is not null or undefined
      assertParamExists(
        "farcasterUserVerificationPost",
        "addVerificationReqBody",
        addVerificationReqBody
      );
      const localVarPath = `/farcaster/user/verification`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        addVerificationReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Follow a user
     * (In order to follow a user `signer_uuid` must be approved)
     * 
     * @summary Follow a user
     * @param {FollowReqBody} followReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    followUser: async (
      followReqBody: FollowReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'followReqBody' is not null or undefined
      assertParamExists("followUser", "followReqBody", followReqBody);
      const localVarPath = `/farcaster/user/follow`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        followReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Unfollow a user
   * (In order to unfollow a user `signer_uuid` must be approved)
     * @summary Unfollow a user
     * @param {FollowReqBody} followReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unfollowUser: async (
      followReqBody: FollowReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'followReqBody' is not null or undefined
      assertParamExists("unfollowUser", "followReqBody", followReqBody);
      const localVarPath = `/farcaster/user/follow`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        followReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update user profile
   * (In order to update user\'s profile `signer_uuid` must be approved)
     * @summary Update user profile
     * @param {UpdateUserReqBody} updateUserReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser: async (
      updateUserReqBody: UpdateUserReqBody,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'updateUserReqBody' is not null or undefined
      assertParamExists("updateUser", "updateUserReqBody", updateUserReqBody);
      const localVarPath = `/farcaster/user`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PATCH",
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

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        updateUserReqBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Fetches information about multiple users based on FIDs
     * @summary Fetches information about multiple users based on FIDs
     * @param {string} fids
     * @param {number} [viewerFid]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userBulk: async (
      fids: string,
      viewerFid?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fids' is not null or undefined
      assertParamExists("userBulk", "fids", fids);
      const localVarPath = `/farcaster/user/bulk`;
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

      if (fids !== undefined) {
        localVarQueryParameter["fids"] = fids;
      }

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewer_fid"] = viewerFid;
      }

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

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
     * Search for Usernames
     * @summary Search for Usernames
     * @param {number} viewerFid
     * @param {string} q
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userSearch: async (
      viewerFid: number,
      q: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'viewerFid' is not null or undefined
      assertParamExists("userSearch", "viewerFid", viewerFid);
      // verify required parameter 'q' is not null or undefined
      assertParamExists("userSearch", "q", q);
      const localVarPath = `/farcaster/user/search`;
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

      if (viewerFid !== undefined) {
        localVarQueryParameter["viewer_fid"] = viewerFid;
      }

      if (q !== undefined) {
        localVarQueryParameter["q"] = q;
      }

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

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
     * Removes verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
     * @summary Removes verification for an eth address for the user
     * @param {RemoveVerificationReqBody} removeVerificationReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async farcasterUserVerificationDelete(
      removeVerificationReqBody: RemoveVerificationReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OperationResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.farcasterUserVerificationDelete(
          removeVerificationReqBody,
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
     * Adds verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
     * @summary Adds verification for an eth address for the user
     * @param {AddVerificationReqBody} addVerificationReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async farcasterUserVerificationPost(
      addVerificationReqBody: AddVerificationReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OperationResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.farcasterUserVerificationPost(
          addVerificationReqBody,
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
     * Follow a user
   * (In order to follow a user `signer_uuid` must be approved)
     * @summary Follow a user
     * @param {FollowReqBody} followReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async followUser(
      followReqBody: FollowReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<BulkFollowResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.followUser(
        followReqBody,
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
     * Unfollow a user
   * (In order to unfollow a user `signer_uuid` must be approved)
     * @summary Unfollow a user
     * @param {FollowReqBody} followReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async unfollowUser(
      followReqBody: FollowReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<BulkFollowResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.unfollowUser(
        followReqBody,
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
     * Update user profile
   * (In order to update user\'s profile `signer_uuid` must be approved)
     * @summary Update user profile
     * @param {UpdateUserReqBody} updateUserReqBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUser(
      updateUserReqBody: UpdateUserReqBody,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<OperationResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(
        updateUserReqBody,
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
     * Fetches information about multiple users based on FIDs
     * @summary Fetches information about multiple users based on FIDs
     * @param {string} fids
     * @param {number} [viewerFid]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userBulk(
      fids: string,
      viewerFid?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserBulk200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userBulk(
        fids,
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
     * Search for Usernames
     * @summary Search for Usernames
     * @param {number} viewerFid
     * @param {string} q
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userSearch(
      viewerFid: number,
      q: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserSearchResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userSearch(
        viewerFid,
        q,
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
     * Removes verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
     * @summary Removes verification for an eth address for the user
     * @param {UserApiRemoveVerificationRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    farcasterUserVerificationDelete(
      requestParameters: UserApiRemoveVerificationRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<OperationResponse> {
      return localVarFp
        .farcasterUserVerificationDelete(
          requestParameters.removeVerificationReqBody,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Adds verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
     * @summary Adds verification for an eth address for the user
     * @param {UserApiAddVerificationRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    farcasterUserVerificationPost(
      requestParameters: UserApiAddVerificationRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<OperationResponse> {
      return localVarFp
        .farcasterUserVerificationPost(
          requestParameters.addVerificationReqBody,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Follow a user
     *(In order to follow a user `signer_uuid` must be approved)
     * @summary Follow a user
     * @param {UserApiFollowRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    followUser(
      requestParameters: UserApiFollowRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<BulkFollowResponse> {
      return localVarFp
        .followUser(requestParameters.followReqBody, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Unfollow a user
     * (In order to unfollow a user `signer_uuid` must be approved)
     * @summary Unfollow a user
     * @param {UserApiFollowRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unfollowUser(
      requestParameters: UserApiFollowRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<BulkFollowResponse> {
      return localVarFp
        .unfollowUser(requestParameters.followReqBody, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update user profile 
     * (In order to update user\'s profile `signer_uuid` must be approved)
     * @summary Update user profile
     * @param {UserApiUpdateUserRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(
      requestParameters: UserApiUpdateUserRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<OperationResponse> {
      return localVarFp
        .updateUser(requestParameters.updateUserReqBody, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Fetches information about multiple users based on FIDs
     * @summary Fetches information about multiple users based on FIDs
     * @param {UserApiBulkUserRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userBulk(
      requestParameters: UserApiBulkUserRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<UserBulk200Response> {
      return localVarFp
        .userBulk(requestParameters.fids, requestParameters.viewerFid, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Search for Usernames
     * @summary Search for Usernames
     * @param {UserApiUserSearchRequest} requestParameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userSearch(
      requestParameters: UserApiUserSearchRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<UserSearchResponse> {
      return localVarFp
        .userSearch(requestParameters.viewerFid, requestParameters.q, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters to remove verification for an eth address operation in UserApi.
 * @export
 * @interface UserApiRemoveVerificationRequest
 */
export interface UserApiRemoveVerificationRequest {
  /**
   *
   * @type {RemoveVerificationReqBody}
   * @memberof UserApiRemoveVerification
   */
  readonly removeVerificationReqBody: RemoveVerificationReqBody;
}

/**
 * Request parameters add verification for an eth address operation in UserApi.
 * @export
 * @interface UserApiAddVerificationRequest
 */
export interface UserApiAddVerificationRequest {
  /**
   *
   * @type {AddVerificationReqBody}
   * @memberof UserApiAddVerification
   */
  readonly addVerificationReqBody: AddVerificationReqBody;
}

/**
 * Request parameters to follow user operation in UserApi.
 * @export
 * @interface UserApiFollowRequest
 */
export interface UserApiFollowRequest {
  /**
   *
   * @type {FollowReqBody}
   * @memberof UserApiFollow
   */
  readonly followReqBody: FollowReqBody;
}

/**
 * Request parameters to update user operation in UserApi.
 * @export
 * @interface UserApiUpdateUserRequest
 */
export interface UserApiUpdateUserRequest {
  /**
   *
   * @type {UpdateUserReqBody}
   * @memberof UserApiUpdateUser
   */
  readonly updateUserReqBody: UpdateUserReqBody;
}

/**
 * Request parameters for fetch users in bulk operation in UserApi.
 * @export
 * @interface UserApiBulkUserRequest
 */
export interface UserApiBulkUserRequest {
  /**
   * @type {string}
   * @memberof UserApiBulkUser
   */
  readonly fids: string;

  /**
   * @type {number}
   * @memberof UserApiBulkUser
   */
  readonly viewerFid?: number;
}

/**
 * Request parameters for search user in operation in UserApi.
 * @export
 * @interface UserApiUserSearchRequest
 */
export interface UserApiUserSearchRequest {
  /**
   * @type {string}
   * @memberof UserApiUserSearch
   */
  readonly q: string;

  /**
   * @type {number}
   * @memberof UserApiUserSearch
   */
  readonly viewerFid: number;
}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   * Removes verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
   * @summary Removes verification for an eth address for the user
   * @param {UserApiRemoveVerificationRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public farcasterUserVerificationDelete(
    requestParameters: UserApiRemoveVerificationRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .farcasterUserVerificationDelete(
        requestParameters.removeVerificationReqBody,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Adds verification for an eth address for the user
   * (In order to add verification `signer_uuid` must be approved)
   * @summary Adds verification for an eth address for the user
   * @param {UserApiAddVerificationRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public farcasterUserVerificationPost(
    requestParameters: UserApiAddVerificationRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .farcasterUserVerificationPost(
        requestParameters.addVerificationReqBody,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Follow a user
   * (In order to follow a user `signer_uuid` must be approved)
   * @summary Follow a user
   * @param {UserApiFollowRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public followUser(
    requestParameters: UserApiFollowRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .followUser(requestParameters.followReqBody, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Unfollow a user
   * (In order to unfollow a user `signer_uuid` must be approved)
   * @summary Unfollow a user
   * @param {UserApiFollowRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public unfollowUser(
    requestParameters: UserApiFollowRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .unfollowUser(requestParameters.followReqBody, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update user profile
   * (In order to update user\'s profile `signer_uuid` must be approved)
   * @summary Update user profile
   * @param {UserApiUpdateUserRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public updateUser(
    requestParameters: UserApiUpdateUserRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .updateUser(requestParameters.updateUserReqBody, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Fetches information about multiple users based on FIDs
   * @summary Fetches information about multiple users based on FIDs
   * @param {UserApiBulkUserRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userBulk(
    requestParameters: UserApiBulkUserRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .userBulk(requestParameters.fids, requestParameters.viewerFid, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Search for Usernames
   * @summary Search for Usernames
   * @param {UserApiUserSearchRequest} requestParameters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userSearch(
    requestParameters: UserApiUserSearchRequest,
    options?: AxiosRequestConfig
  ) {
    return UserApiFp(this.configuration)
      .userSearch(requestParameters.viewerFid, requestParameters.q, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
