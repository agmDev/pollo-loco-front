/*
 * action types
 */

export const ADD_ROOM = 'ADD_ROOM';

/*
 * action creators
 */

export function addRoom(text) {
  return { type: ADD_ROOM, text };
}
