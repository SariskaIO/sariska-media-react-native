import SariskaNativeConnect from "../../utils/SariskaNativeConnect";
import {store} from "../store";
import {addRemoteTrack, removeRemoteTrack} from "./track";
import {extractTrackInfo} from "../../utils";
import {removeConference} from "./conference";

export const ADD_LOCAL_TRACK = 'ADD_LOCAL_TRACK';
export const UPDATE_LOCAL_TRACK = 'UPDATE_LOCAL_TRACK';
export const REMOVE_LOCAL_TRACK = 'REMOVE_LOCAL_TRACK';
export const LOCAL_TRACK_ACTION = 'LOCAL_TRACK_ACTION';

export const ADD_REMOTE_TRACK  = 'ADD_REMOTE_TRACK';
export const UPDATE_REMOTE_TRACK  = 'UPDATE_REMOTE_TRACK';
export const REMOVE_REMOTE_TRACK  = 'REMOVE_REMOTE_TRACK';
export const REMOTE_TRACK_ACTION = 'REMOTE_TRACK_ACTION';

export const ADD_CONFERENCE = 'ADD_CONFERENCE';
export const ADD_CONNECTION = 'ADD_CONNECTION'
export const CONNECTION_ACTION = 'CONNECTION_ACTION';
export const CONFERENCE_ACTION = 'CONFERENCE_ACTION';
export const REMOVE_CONFERENCE = 'REMOVE_CONFERENCE';

export const ADD_TRACK = "addTrack";
export const REMOVE_TRACK = "removeTrack";
export const REPLACE_TRACK  = "replaceTrack";

export const CREATE_LOCAL_TRACKS = "CREATE_LOCAL_TRACKS";
export const INIT_SDK = "INIT_SDK";

export const CREATE_CONNECTION = "CREATE_CONNECTION";
export const CREATE_CONFERENCE = "CREATE_CONFERENCE";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";

export const SARISKA_MEDIA_TRANSPORT_ACTION = "SARISKA_MEDIA_TRANSPORT_ACTION";




//connection
export const CONNECTION_ESTABLISHED = "CONNECTION_ESTABLISHED";
export const CONNECTION_DISCONNECTED =  "CONNECTION_DISCONNECTED";
export const CONNECTION_FAILED =  "CONNECTION_FAILED";

// confernece
export const CONFERENCE_JOINED = "CONFERENCE_JOINED";
export const CONFERENCE_LEFT = "CONFERENCE_LEFT";

// track
export const TRACK_ADDED = "TRACK_ADDED";
export const TRACK_REMOVED = "TRACK_REMOVED";
export const TRACK_MUTE_CHANGED = "TRACK_MUTE_CHANGED";
