export const GET_PAGES = 'GET_PAGES'
export const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS'

export function getPages() {
    return {
        type: GET_PAGES
    }
}

export function getPagesSuccess(pages) {
    return {
        type: GET_PAGES_SUCCESS,
        payload: pages
    }
}