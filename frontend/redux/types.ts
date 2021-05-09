const types = {
    /**
     * DOCS
     * 1_GENERAL
     * 2_AUTH
     * 3_CATEGORIES
     * 4_OFFERS
     * 5_OFFERS_STATUS
     * 6_COMMENTS
     * 7_PUBLIC_PROFILE
     * 8_LOCATIONS
     * */

    // ========================
    // 1_GENERAL
    // ========================
    // TOGGLE_DRAWER
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
    // OFFERS_SEARCH_LOCAL_PARAMS
    OFFERS_SEARCH_LOCAL_PARAMS: 'OFFERS_SEARCH_LOCAL_PARAMS',

    // ========================
    // 2_AUTH
    // ========================
    // SIGNUP
    SIGNUP_START: 'SIGNUP_START',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    // LOGIN
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    // LOGOUT
    LOGOUT_INIT: 'LOGOUT_INIT',
    LOGOUT_END: 'LOGOUT_END',
    // USER
    GET_USER_START: 'GET_USER_START',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR',

    // ========================
    // 3_CATEGORIES
    // ========================
    // GET_CATEGORIES
    GET_CATEGORIES_START: 'GET_CATEGORIES_START',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',

    // ========================
    // 4_OFFERS
    // ========================
    // GET_POPULAR_OFFERS
    GET_POPULAR_OFFERS_START: 'GET_POPULAR_OFFERS_START',
    GET_POPULAR_OFFERS_SUCCESS: 'GET_POPULAR_OFFERS_SUCCESS',
    GET_POPULAR_OFFERS_ERROR: 'GET_POPULAR_OFFERS_ERROR',
    // SEARCH_OFFERS
    SEARCH_OFFERS_START: 'SEARCH_OFFERS_START',
    SEARCH_OFFERS_SUCCESS: 'SEARCH_OFFERS_SUCCESS',
    SEARCH_OFFERS_ERROR: 'SEARCH_OFFERS_ERROR',
    // SEARCH_OFFERS_PAGINATION
    SEARCH_OFFERS_PAGINATION_START: 'SEARCH_OFFERS_PAGINATION_START',
    SEARCH_OFFERS_PAGINATION_SUCCESS: 'SEARCH_OFFERS_PAGINATION_SUCCESS',
    SEARCH_OFFERS_PAGINATION_ERROR: 'SEARCH_OFFERS_PAGINATION_ERROR',
    // NEW_OFFER_SAVE
    NEW_OFFER_FORM: 'NEW_OFFER_FORM',
    // EDIT_OFFER_FORM
    EDIT_OFFER_FORM: 'EDIT_OFFER_FORM',
    // POST_OFFER
    POST_OFFER_START: 'POST_OFFER_START',
    POST_OFFER_SUCCESS: 'POST_OFFER_SUCCESS',
    POST_OFFER_ERROR: 'POST_OFFER_ERROR',
    // PATCH_OFFER
    PATCH_OFFER_START: 'PATCH_OFFER_START',
    PATCH_OFFER_SUCCESS: 'PATCH_OFFER_SUCCESS',
    PATCH_OFFER_ERROR: 'PATCH_OFFER_ERROR',
    // PATCH_EDIT_OFFER_STATUS
    PATCH_EDIT_OFFER_STATUS_START: 'PATCH_EDIT_OFFER_STATUS_START',
    PATCH_EDIT_OFFER_STATUS_SUCCESS: 'PATCH_EDIT_OFFER_STATUS_SUCCESS',
    PATCH_EDIT_OFFER_STATUS_ERROR: 'PATCH_EDIT_OFFER_STATUS_ERROR',
    // GET_SINGLE_OFFER
    GET_SINGLE_OFFER_START: 'GET_SINGLE_OFFER_START',
    GET_SINGLE_OFFER_SUCCESS: 'GET_SINGLE_OFFER_SUCCESS',
    GET_SINGLE_OFFER_ERROR: 'GET_SINGLE_OFFER_ERROR',
    // DELETE_SINGLE_OFFER_IMG
    DELETE_SINGLE_OFFER_IMG: 'DELETE_SINGLE_OFFER_IMG',
    // ADD_SINGLE_OFFER_IMG
    ADD_SINGLE_OFFER_IMG: 'ADD_SINGLE_OFFER_IMG',
    // GET_FAVORITE_OFFERS
    GET_FAVORITE_OFFERS_START: 'GET_FAVORITE_OFFERS_START',
    GET_FAVORITE_OFFERS_SUCCESS: 'GET_FAVORITE_OFFERS_SUCCESS',
    GET_FAVORITE_OFFERS_ERROR: 'GET_FAVORITE_OFFERS_ERROR',
    // PATCH_FAVORITE_OFFERS
    PATCH_FAVORITE_OFFERS_START: 'PATCH_FAVORITE_OFFERS_START',
    PATCH_FAVORITE_OFFERS_SUCCESS: 'PATCH_FAVORITE_OFFERS_SUCCESS',
    PATCH_FAVORITE_OFFERS_ERROR: 'PATCH_FAVORITE_OFFERS_ERROR',
    // MY_OFFERS
    MY_OFFERS_START: 'MY_OFFERS_START',
    MY_OFFERS_SUCCESS: 'MY_OFFERS_SUCCESS',
    MY_OFFERS_ERROR: 'MY_OFFERS_ERROR',
    // MY_OFFERS_PAGINATION
    MY_OFFERS_PAGINATION_START: 'MY_OFFERS_PAGINATION_START',
    MY_OFFERS_PAGINATION_SUCCESS: 'MY_OFFERS_PAGINATION_SUCCESS',
    MY_OFFERS_PAGINATION_ERROR: 'MY_OFFERS_PAGINATION_ERROR',

    // ========================
    // 5_OFFERS_STATUS
    // ========================
    // OFFER_DO_REVIEW
    OFFER_DO_REVIEW_START: 'OFFER_DO_REVIEW_START',
    OFFER_DO_REVIEW_SUCCESS: 'OFFER_DO_REVIEW_SUCCESS',
    OFFER_DO_REVIEW_ERROR: 'OFFER_DO_REVIEW_ERROR',

    // ========================
    // 6_COMMENTS
    // ========================
    // GET_COMMENTS
    GET_COMMENTS_START: 'GET_COMMENTS_START',
    GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
    GET_COMMENTS_ERROR: 'GET_COMMENTS_ERROR',
    // CREATE_COMMENT
    CREATE_COMMENT_START: 'CREATE_COMMENT_START',
    CREATE_COMMENT_SUCCESS: 'CREATE_COMMENT_SUCCESS',
    CREATE_COMMENT_ERROR: 'CREATE_COMMENT_ERROR',
    // DELETE_COMMENT
    DELETE_COMMENT_START: 'DELETE_COMMENT_START',
    DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_ERROR: 'DELETE_COMMENT_ERROR',
    // REPLY_COMMENT
    REPLY_COMMENT_START: 'REPLY_COMMENT_START',
    REPLY_COMMENT_SUCCESS: 'REPLY_COMMENT_SUCCESS',
    REPLY_COMMENT_ERROR: 'REPLY_COMMENT_ERROR',
    // LIKE_COMMENT
    LIKE_COMMENT_START: 'LIKE_COMMENT_START',
    LIKE_COMMENT_SUCCESS: 'LIKE_COMMENT_SUCCESS',
    LIKE_COMMENT_ERROR: 'LIKE_COMMENT_ERROR',
    // DISLIKE_COMMENT
    DISLIKE_COMMENT_START: 'DISLIKE_COMMENT_START',
    DISLIKE_COMMENT_SUCCESS: 'DISLIKE_COMMENT_SUCCESS',
    DISLIKE_COMMENT_ERROR: 'DISLIKE_COMMENT_ERROR',

    // ========================
    // 7_PUBLIC_PROFILE
    // ========================
    // GET_PUBLIC_PROFILE
    GET_PUBLIC_PROFILE_START: 'GET_PUBLIC_PROFILE_START',
    GET_PUBLIC_PROFILE_SUCCESS: 'GET_PUBLIC_PROFILE_SUCCESS',
    GET_PUBLIC_PROFILE_ERROR: 'GET_PUBLIC_PROFILE_ERROR',

    // ========================
    // 8_LOCATIONS
    // ========================
    // GET_COUNTRIES
    GET_COUNTRIES_START: 'GET_COUNTRIES_START',
    GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
    GET_COUNTRIES_ERROR: 'GET_COUNTRIES_ERROR',
    // GET_CITIES
    GET_CITIES_START: 'GET_CITIES_START',
    GET_CITIES_SUCCESS: 'GET_CITIES_SUCCESS',
    GET_CITIES_ERROR: 'GET_CITIES_ERROR',
};

export default types;
