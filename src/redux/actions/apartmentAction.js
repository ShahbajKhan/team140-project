export const addToWishList = (payload) => {
    return {
        type:'ADD_TO_WISH_LIST',
        payload
    }
}
export const removeFromWishList = (payload) => {
    return {
        type:'REMOVE_FROM_WISH_LIST',
        payload
    }
}