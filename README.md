# Micro Frontend avec Module Federation

Ce projet contient deux applications distinctes utilisant Module Federation :

- **shell/** : L'application hôte ("container"), qui intègre les micro frontends.
- **header-mfe/** : Un micro frontend qui affiche un header et est consommé par l'application hôte.

## Installation et Exécution

Chaque application doit être démarrée indépendamment.

1. **Installation des dépendances**
   
   Exécutez la commande suivante dans chaque dossier (`shell` et `header-mfe`) :
   ```sh
   npm install
   ```

2. **Démarrer les applications**
   
   Dans chaque dossier (`shell` et `header-mfe`), lancez :
   ```sh
   npm run dev
   ```

3. **Accéder à l'application**
   
   Une fois les deux applications démarrées :
   - Le `shell` sera accessible sur **http://localhost:3000/**
   - Le `header-mfe` sera accessible sur **http://localhost:2000/**

## Fonctionnement

- L'application `shell` charge dynamiquement le `header-mfe` via Module Federation.
- Chaque application fonctionne indépendamment et peut être développée séparément.

