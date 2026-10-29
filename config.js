// Your app's settings. Edit this file, commit, and GitHub Pages republishes in about a minute.
window.SMART_CONFIG = {
  // From Jim, after you send him your launch and redirect URI (both: this site's URL, with the trailing /)
  clientId: '353dc7b6-37d0-46f9-8073-978f1e2ba4df',
  // Must be a subset of the scopes registered for your client ID. SMART v1 scopes only on Meld.
  scope: 'launch openid fhirUser patient/*.read',
  // Population app (population/): its own client ID, registered with launch URI .../population/launch.html
  populationClientId: '353dc7b6-37d0-46f9-8073-978f1e2ba4df'
};
