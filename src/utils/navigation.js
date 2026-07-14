/**
 * Clean client-side navigation utility.
 * Dispatches custom events to trigger view updates without page reloads.
 */
export const navigateTo = (viewName) => {
  const event = new CustomEvent('app-navigate', { detail: viewName });
  window.dispatchEvent(event);
};
