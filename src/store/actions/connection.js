import {ADD_CONNECTION} from "./types";

export const addConnection = (connection) => {
    return {
        type: ADD_CONNECTION,
        payload: connection
    }
}
