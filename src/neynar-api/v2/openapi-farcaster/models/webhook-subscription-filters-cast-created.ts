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
 * 
 * @export
 * @interface WebhookSubscriptionFiltersCastCreated
 */
export interface WebhookSubscriptionFiltersCastCreated {
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'author_fids'?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'mentioned_fids'?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'parent_urls'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'root_parent_urls'?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'parent_author_fids'?: Array<number>;
    /**
     * Regex pattern to match the text key of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: (?i)\\\\$degen should be written as (?i)\\\\\\\\$degen 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'text'?: string;
    /**
     * Exclude casts that matches the text regex from these authors. ** Use case: **   If you want to reply \"$degen\" from a bot, and the text you are looking for is also \"$degen\" (i.e. text regex is set to (?i)\\\\$degen).   You need to add the bot\'s fid to this list to avoid replying to the bot\'s cast. This will prevent infinite loops of replying to each other. 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'exclude_text_fids'?: Array<number>;
    /**
     * Regex pattern to match the embeded_url (key embeds) of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: \\\\b(farcaster|neynar)\\\\b should be written as \\\\\\\\b(farcaster|neynar)\\\\\\\\b 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'embeds'?: string;
}

