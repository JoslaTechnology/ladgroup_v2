import * as actionTypes from '../actions/index';
const initialState = {
    schemaDetail: {}, selectedFiles: {}

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORM_SCHEMA_DATA:
            const schemaData = Object.assign({}, state);
            schemaData.schemaDetail = action.payload
            return schemaData;

        case actionTypes.ATTACHMENTS_DATA:
            const attachmentData = Object.assign({}, state);
            attachmentData.selectedFiles = action.payload;
            console.log("attachmentData.selectedFiles", attachmentData.selectedFiles);

            return attachmentData;
        default:
            return state;
    }
}
export default reducer;