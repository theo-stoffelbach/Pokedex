# Pokemon Project

![Banner](https://github.com/Snakeshader-pro/Pokedex/blob/main/image/pokemon%20Banner.png?raw=true)

# Somaire

1. Projet Initial
2. Démarage
  1. Pré-requis


# Projet Initial

Le projet initiale était de faire un site qui contenait un Pokedex qui pouvait cherché des pokemon et aussi des dresseurs pour les mettres en amis mais aussi un système de compte , une collection de pokemon avec ses pokemon .Mais aussi d'échange ses pokémons avec des amis. Tous ca en utilisant uniquement Javascript

# Démarage 

  Dans cet section nous allons voir comment installer notre projet Pokdex 

## Pré-requis

  Pour installer notre site web il vous faudras :
  
* 2 port de libre : port {PORT FRONT-END} ainsi que le port {PORT BACK-END}
* Node js
* Un navigateur Web
* installer le code que l'on vous propose ici (si vous ne savez pas comment faire [cliquer ici](https://www.google.com))

## Démarage 

Pour démaré le code il suffit de :

1. Ouvrir le fichier avec une CMD puis de rentré dans le dossier lancer l'installation des dépendences avec la commande `npm i firebase -g@vue/cli vue-router@next`.Et de lancer les serveur avec : ` npm run serve `
2. Réouvrir une autre CMD à travers le dossier Front-end puis de lancer le serveur avec la commande ` npm run serve`.

Puis voila les 2 serveur sont lancé plus qu'a écrire sur la barre de recherche : `http://localhost:8080` ou de cliquer sur ce lien : [cliquer ici](https://localhost:8080) .

## Api

dans cet partie nous allons aborder toutes les APIs utilisés durant le projet

### PokeAPIv2

Je pourrais aborder tous les aspects de l'api et comment l'utiliser mais a quoi ca servirais car je ne ferais que dévalorisé leurs travaille car ils ont déjà réalisé une documentation trés riche de leur api : [juste ici ](https://pokeapi.co/about) .

### l'API du Back-End

  Elle permet d'ecrire et de lire des données concernent tous les utilisateur , Team de pokémon , Ou bien même l'économie entiere du jeux Pokemon city qui est encore en vase d'**Alpha** .
  
### l'API du Front-End 

  Elle permet juste d'afficher le site web en lui même et donc de pourvoir utilise toutes les fonctionnalités du site web .
  
## Fonctionnalités 

  L'api possède beaucoup de routes comme : 
  
  `Pokemon/{id}` est une route qui utilise la méthode **GET** et qui permet de récuperer tous les pokemons dans le format json et comme ceci :
  
  ```json
{
  " pokemons ": [
      {
      " id ": "Number" ,
      " name ": "String" ,
      " types ": [
        " type1 ": "String" ,
        " type2 ": "String" ,
        ] ,
      " image ": "String" ,
      } ,
    ]
  } 
```
  
