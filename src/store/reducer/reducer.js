import * as actionTypes from '../actions/index';
const initialState = {
    schemaDetail: {},

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORM_SCHEMA_DATA:
            const schemaData = Object.assign({}, state);
            schemaData.schemaDetail = action.payload
            return schemaData;
        default:
            return state;
    }
}
export default reducer;