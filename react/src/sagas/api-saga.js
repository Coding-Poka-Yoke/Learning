import {takeEvery,takeLatest,call,put} from 'redux-saga/effects'


export default function* watcherSaga(){

    console.log("saga FETCH_REQUESTED watcherSaga");
    
    yield takeLatest("FETCH_REQUESTED",fetchData)
}

export function* fetchData(action){
    console.log("saga FETCH_REQUESTED fetchData");
    try {
        const payload = yield call(getData,action.payload.url);
        yield put({type: "FETCH_EMPLOYEES", payload})
     } catch (error) {
        yield put({type: "FETCH_EMPLOYEES_FAILURE", error})
     }
}

function getData(url) {
    //fetch(new Configuration().EMPLOYEE_ROOT_URL + '/_search')
    return fetch(url).then(response =>
      response.json()
    ).then(result => {
        const retVal=[]
        result.hits.hits.map(h => retVal.push(h._source)) 
        return retVal
    })
}