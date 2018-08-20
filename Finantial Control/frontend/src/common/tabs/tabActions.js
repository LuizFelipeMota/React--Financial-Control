export function selectTab(tabId){
    console.log(tabId)
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabVisible = {}
    tabIds.forEach(e => tabVisible[e] = true)
    return{
        type: 'VISIBLE',
        payload: tabVisible
    }
}