/* Waits for the compiled design-system bundle and for any Babel-transpiled screen files
   to register themselves on window, then renders. Babel processes <script type="text/babel"
   src="..."> asynchronously, so an inline script cannot assume they have run. */
window.SCBoot = function (need, render) {
  var tries = 0;
  var NSKEY = 'SpareCareDesignSystem_556483';
  var t = setInterval(function () {
    var NS = window[NSKEY] || {};
    var missing = need.filter(function (n) { return !(NS[n] || window[n]); });
    if (!missing.length) { clearInterval(t); render(NS); return; }
    if (++tries > 240) {
      clearInterval(t);
      var el = document.getElementById('root');
      if (el) el.innerHTML = '<div style="font-family:system-ui;padding:40px;color:#C1503F">'
        + '<b>Could not load:</b> ' + missing.join(', ')
        + '<br><span style="color:#6B7378">Check that _ds_bundle.js is compiled and reachable from this page.</span></div>';
    }
  }, 50);
};
