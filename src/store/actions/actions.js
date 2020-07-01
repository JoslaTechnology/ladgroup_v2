//  pass payload to schema data
import * as actionTypes from './actionTypes';
export const updateSchemaData = (data) => {
    return { type: actionTypes.FORM_SCHEMA_DATA, payload: data }
}