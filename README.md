# Todo List

## Objectif : 

- Marta et Joyce on besoin d'un front pour gerer leurs taches du quotidien. Votre mission est donc  
de creer une application qui permettra de gerer une liste de taches. Ils utilisent deja une application  
mais celle ci ne leur convient pas. Ils ont donc fait appel à vous pour creer une application qui  
leur conviendra. Et par chance l'application qu'ils utilisent offre un accès API que vous allez consommer  
pour creer leur application de rêve.  

- Ils ont des exigeances differentes, Marta veut une application qui lui permettra de gerer ses taches directement  
et Joyce veut une application qui lui permettra de gerer ses taches classées par projets.  
Comme je suis votre lead dev, j'ai donc divisé notre équipe en deux.  
1 equipe pour le projet de Marta et 1 equipe pour le projet de Joyce.  

- Liste des developpeurs pour le projet de Marta :  
  - [Lutfu]  
  - [Yannis]  
  - [Louison]  
  - [Jordan]  

> Si vous finissez avant 12h vous pouvez continuer le projet pour arrivé au résultat du projet de Joyce.

- Liste des developpeurs pour le projet de Joyce :  
  - [Aurelien]  
  - [Alex]  
  - [Mathis]  
  - [Xavier]  
  - [Lucas]  
  - [Zohra]  

## Petit mot du chef :

Avant de visiter les liens ci dessous, parlons de la super api que nous avons developper John et moi  
pour vous faciliter la tache (jeu de mot hahahaha). Tout d'abord la documentation est en anglais forcément on est des pros  
ensuite on a été obigé de pensez à toutes possibilité d'utilisation alors ciblé bien celle dont vous avez besoin (vous êtes developpeur et votre travail est de chercher avant de coder.  
On a simplifier les authorisations, il n'y aura pas de connexion user, le token vous sera fourni, vous n'aurez qu'a l'ajouter
au header de vos requetes. Nous avons deja creer un front pour suveillez votre avancement nous pouvons voir les todos et les projets que vous créez.  
Notre front à nous nous a pris 1h à faire, mais je vous cache pas que le code n'est pas du tout propre n'y optimisé et pas trop conventionnel.
Donc en vous donnant 1 jours vous devriez nous fournir un code dans les règles de l'ART ! BON COURAGE !

## Outils :

- [Maquette du projet](https://www.figma.com/design/lSAAKKLlhVdsgo6Co98k1P/TODO-EVAL?node-id=0-1&t=1cbRkpdhJ35ovOcz-0)  
- [Documentation de l'api todo](https://developer.todoist.com/rest/v2/?javascript#overview)  
- [Documentation react](https://fr.react.dev/)  
- [Documentation tailwindcss](https://tailwindcss.com/docs/installation)  
- [Documentation vitejs](https://vitejs.dev/guide/)  
- [Documentation rxjs](https://rxjs.dev/guide/overview)  
- Pour utiliser l'api vous aurez besoin du token, qu'il faudra ajouter au header de vos requetes.  
le voici => `1c080533020e3beafa4e792ba42d3c2788393741` (n'oublié pas le mot Bearer devant ;-))

## Aide :  

- Utiliser bien le SDK javascript de l'api (voir documentation de l'api)
- Liste des packages que vous pouvez utiliser :  
  - axios (si vous utilisez le sdk de l'api, vous n'en aurez pas besoin)  
  - react-router-dom (gerer les pages et les routes)   
  - react-icons (petit besoin d'icon, sinon telecharger les icons via figma)  
  - mantine (si vous avez la flemme)  
  - rxjs (les observables sont vos meilleurs amis)
  - TOUT AUTRE PACKAGE QUI VOUS SERA UTILE A VOUS DE VOIR ;-)
- Utiliser internet (bon c'est peut lui votre meileur ami hihi ^^)

## Fonctionnement des branches : 

- Chaque dev à sa branche, donc avant de commencer à coder, placer vous sur votre branche (le nom de la branch est votre prénom en minuscule).
- Commiter et pusher régulierement !
- Sur chaque branch un projet react à l'état initial vous attend.
  - donc n'oubliez pas de bien configurer votre environtment de travail  
  (installation de package, creation router, structure de dossier, toutes les bonnes pratique etc ..) .
- Sinon rien a dire de plus, vous êtes sur votre branche vous faite ce que vous voulez.

## Bonus : 

- Si vous avez encore le temps alors faite de votre projet un projet dockerizer  
attention je dois pouvoir utiliser le projet avec la commande `docker compose up`
les node modules n'étant pas installer vous devez prendre en compte cela et tester sur votre machine 
que l'utilisation de docker pour le projet à la premiere installation fonctionne bien.

## Notation pour le feedback :

- respect des consignes (respecter les objectif demandé)
- qualité du code (class, observable, reutilisation du code, etc ..)
- qualité du code react (useState, useEffect, hook Custom, etc ..)
- respect des bonnes pratiques (nommage des variables, des class, des fonctions, pas trop de commentaire, indentation, etc ..)
- respect des deadlines (1 jour)
- respect des consignes de git (savoir ce servir de git)
- respect des consignes de l'api (savoir lire, comprendre et utiliser une documentation)
- respect de la maquette (couleur, forme, positionnement, etc ..)
- le projet fonctionne sur le poste du chef
- critères caché (tout bon dev dois avoir cette compétence, 
je vous en ai deja parlé donc utiliser là, cela vous rapportera des points)
ps : se critère de mon point de vu pour un dev junior est essentiel pour réussir !

GOOD LUCK !