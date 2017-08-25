/* ------------------------------- Primitives ------------------------------- */

export const TILE_FETCH_DEBOUNCE = 100;

// Number of milliseconds zoom-related actions (e.g., tile loading) are debounced
export const ZOOM_DEBOUNCE = 100;

// the length of time to keep refreshing the view after a drag event
export const SHORT_DRAG_TIMEOUT = 110;

export const LONG_DRAG_TIMEOUT = 3000;

export const LOCATION_LISTENER_PREFIX = 'locationListenerPrefix';

export const ZOOM_TRANSITION_DURATION = 1000;

export const DEFAULT_SERVER = 'http://higlass.io/api/v1'


/* --------------------------------- Complex -------------------------------- */

export { default as HEATED_OBJECT_MAP } from './colormaps';
export { default as IS_TRACK_RANGE_SELECTABLE } from './is-track-range-selectable';
export { default as AVAILABLE_TRACK_TYPES } from './available-track-types';
export { default as DATATYPE_TO_TRACK_TYPE } from './datatype-to-track-type';
export { default as USED_SERVER } from './used-server';
export { default as TRACKS_INFO } from './tracks-info';
export { default as TRACKS_INFO_BY_TYPE } from './tracks-info-by-type';