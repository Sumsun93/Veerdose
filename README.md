# Modèle React

## Étapes

Dès le clone du projet

1. `yarn` ou `npm install` pour installer les modules

2. `yarn start` pour lancer le watcher de brunch ainsi que le server (http://localhost:3333/), `yarn start` lance pour vous la commande `brunch watch --server`

## Atom

Coloration syntaxique pour ES2015 et babel

`apm install language-babel`

Prise en charge de Stylus

`apm install stylus`

## Versions

Ce n'est pas une bonne pratique d'avoir `*` ou `latest` dans son `package.json`.  

Pour installer en remplaçant `*` par les numéros de version :

```
# On supprime les modules actuellement installés
rm -rf node_modules

# On sauvegarde les dépendences
npm update --save

# On sauvegarde les dépendences de dev
npm update --save-dev
```

Pour aller plus vite, un npm script permet de faire ça en une ligne : `yarn save-deps`.
