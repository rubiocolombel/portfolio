# Portfolio — Rudy Colombel

Site statique (HTML/CSS/JS), sans PHP ni base de données, servi par un hébergement web OVHcloud.

## Déploiement

- La branche `main` est déployée automatiquement sur l'hébergement OVH (intégration Git OVH + webhook GitHub, clé de déploiement en lecture seule).
- Aucune modification directe sur `main` : tout passe par une pull request.

## Structure

- `index.html` — la page
- `assets/` — styles, scripts, polices (hébergées localement), photo
- `.htaccess` — HTTPS forcé, en-têtes de sécurité, blocage des fichiers cachés et de toute exécution PHP

## Sécurité

Aucun secret ne doit jamais être commité dans ce dépôt (clé, mot de passe, jeton).
