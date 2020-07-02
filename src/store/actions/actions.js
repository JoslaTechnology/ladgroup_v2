//  pass payload to schema data
import * as actionTypes from './actionTypes';
export const updateSchemaData = (data) => {
    return { type: actionTypes.FORM_SCHEMA_DATA, payload: data }
}

export const updateAttachmentsData = (data) => {
    return { type: actionTypes.ATTACHMENTS_DATA, payload: data }
}