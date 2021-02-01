import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.items;
export const getFilter = state => state.phoneBook.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(item => item.name.includes(normalizedFilter));
  },
);
