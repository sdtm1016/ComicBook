

import { 
    STATR_FETCH_BEUAUTIFUL_PAGE_DATA, 
    FETCH_BEUAUTIFUL_PAGE_DATA
}  from '../constants/type';

import HttpUtil from '../utils/HttpUtil';


export let fetchBeautifulPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_BEUAUTIFUL_PAGE_DATA
        });
        return HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch({
                    type: FETCH_BEUAUTIFUL_PAGE_DATA,
                    data: jsonData.result.bookList,
                    isSuccess: true
                });
            },
            (err) => {
                dispatch({
                    type: FETCH_BEUAUTIFUL_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

