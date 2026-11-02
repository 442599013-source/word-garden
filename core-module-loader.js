// Stable extension points: an optional feature folder replaces its preview automatically.
// Each feature implements export function mount(container, context) and may return cleanup().
// Paths are deliberately fixed: future patches add only their own module folder.
const routes = Object.freeze({
  journey: () => import('./feature-advanced.js'),
  results: () => import('./feature-exams.js'),
  listening: () => import('./feature-listening.js'),
  speaking: () => import('./feature-speaking.js'),
  reading: () => import('./feature-reading.js'),
  writing: () => import('./feature-writing.js'),
  login: () => import('./feature-login.js'),
  register: () => import('./feature-register.js'),
  words: () => import('./feature-words.js'),
  settings: () => import('./feature-settings.js')
});

export async function loadFeature(route, container, context, fallback) {
  const load = routes[route];
  if (!load) { fallback(); return null; }
  try {
    const feature = await load();
    if (typeof feature.mount !== 'function') throw new TypeError('Feature missing mount(container, context)');
    container.replaceChildren();
    const cleanup = await feature.mount(container, context);
    if (cleanup !== undefined && typeof cleanup !== 'function') throw new TypeError('Invalid cleanup');
    return typeof cleanup === 'function' ? cleanup : null;
  } catch (error) {
    console.info(`[Word Match] Optional module ${route} not ready; showing preview.`, error);
    fallback();
    return null;
  }
}

export function supportedRoutes() {return Object.keys(routes)}
