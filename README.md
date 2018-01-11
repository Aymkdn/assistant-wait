# Wait

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet d'attendre un délai. Il s'utilisera avec d'autres plugins.

## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire, et sélectionner **wait** comme plugin.

Si vous avez déjà installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), et que vous souhaitez ajouter ce plugin, alors :
  - Pour Windows, télécharger [`install_wait.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/Aymkdn/assistant-wait/master/install_wait.bat&download=install_wait.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-wait@latest --save --loglevel error && npm run-script postinstall`
  
## Configuration

Pas de configuration requise.

## Utilisation

On appelera la commande `wait_` suivi par un nombre et le texte-temps.

### Exemples

  - `wait_5 minutes` : attendre 5 minutes
  - `wait_30 secondes` : attendre 30 secondes
  - `wait_2 heures` : attendre 2 heures
  - `wait_annuler` : va annuler le dernier timer appelé
