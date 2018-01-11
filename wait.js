var AssistantWait = function() {
  this.timeout=-1;
}
AssistantWait.prototype.init = function(plugins) {
  this.plugins = plugins;
  return Promise.resolve(this);
};

/**
 * Fonction appelée par le système central
 *
 * @param {String} commande un nombre puis un identifiant de temps
 * @example
 * "30 secondes"
 * "5 minutes"
 * "1 heure"
 */
AssistantWait.prototype.action = function(commande) {
  var _this=this;
  if (commande === "annuler" || commande === "cancel") {
    if (_this.timeout>-1) clearTimeout(_this.timeout);
    _this.timeout=-1;
    console.log("[assistant-wait] Timer annulé.");
    if (_this.plugins.notifier) _this.plugins.notifier.action("Timer annulé.");
    return Promise.resolve();
  }
  commande = commande.split(" ");
  var delay = commande[0];
  switch (commande[1].slice(0,5)) {
    case "secon": { delay *= 1000; break; }
    case "minut": { delay *= 1000 * 60; break; }
    case "heure": { delay *= 1000 * 60 * 60; break; }
  }
  return new Promise(function(prom_res) {
    _this.timeout=setTimeout(function() {
      prom_res();
    }, delay)
  })
};

/**
 * Initialisation du plugin
 *
 * @param  {Object} configuration La configuration
 * @param  {Object} plugins Un objet qui contient tous les plugins chargés
 * @return {Promise} resolve(this)
 */
exports.init=function(configuration, plugins) {
  return new AssistantWait().init(plugins)
  .then(function(resource) {
    console.log("[assistant-wait] Plugin chargé et prêt.");
    return resource;
  })
}

