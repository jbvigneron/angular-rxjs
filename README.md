# TP Angular - RxJS
## Ex 1 : Récupération des valeurs
*	Créer un nouveau composant appelé ***SubscribeComponent***. Ce composant devra être accessible par la route suivante : */subscribe*
*	Dans le constructeur, créer un Observable appelé **onNext$** qui se chargera de retourner le texte "Hello World !".
Pour cela, aidez-vous de l'opérateur [of](https://www.learnrxjs.io/learn-rxjs/operators/creation/of).
*	Abonnez-vous à **onNext$** à l'aide de la méthode ***subscribe()***, et affichez le résultat dans la console avec ***console.log()***.

### Ex 1.1 : Pipe Async
*	Retirez l'appel précédent à la méthode *subscribe()*.
*	Dans le template HTML du ***SubscribeComponent***, affichez la propriété **onNext$** à l'aide du pipe [async](https://angular.io/api/common/AsyncPipe).

### Ex 1.2 : Réception de l'erreur
* Dans le constructeur du composant ***SubscribeComponent***, créer un autre Observable appelé **onError$** qui se chargera de renvoyer l'erreur : "Accès interdit".
Pour cela, aidez-vous de l'opérateur [throwError](https://www.learnrxjs.io/learn-rxjs/operators/creation/throw).
*	Abonnez-vous à **onError$** à l'aide de la méthode ***subscribe()***, et affichez le résultat dans la console avec ***console.error()***.

## Ex 2 : from vs of
*	Avec RxJS, il existe 2 opérateurs simples pour créer un Observable à partir d’une donnée : [of](https://www.learnrxjs.io/learn-rxjs/operators/creation/of) et [from](https://www.learnrxjs.io/learn-rxjs/operators/creation/from).
*	Créer un nouveau composant appelé ***FromOfComponent***
Ce composant devra être accessible par la route suivante : */fromof*
*	Dans le constructeur, créer un Observable **of$** qui se chargera de retourner le tableau : [1, 2, 3].
Abonnez-vous à **of$** et affichez le résultat dans la console.
*	Dans le constructeur, créer un Observable **from$** qui se chargera de retourner le tableau : [1, 2, 3].
Abonnez-vous à **from$** et affichez le résultat dans la console.
*	Quelle différence percevez-vous entre les 2 opérateurs ?

## Ex 3 : Séquences et filtre
*	Créer un nouveau composant appelé ***RangeComponent***
* Ce composant devra être accessible par la route suivante : */range*


*	Dans le constructeur, créer un Observable chargé d’émettre les nombres de 0 à 10 (opérateur [range](https://www.learnrxjs.io/learn-rxjs/operators/creation/range)).
*	Filtrer les valeurs de sorte que seuls les nombres pairs soient retournés (opérateur [filter](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter)).
*	Afficher le résultat dans la console.

Voici ce qui doit apparaître dans la console :
```
0
2
4
6
8
```

## Ex 4 : Transformation
*	Créer un nouveau composant appelé ***MapComponent***
*	Ce composant devra être accessible par la route suivante : */map*


*	Dans le constructeur, créer un Observable chargé d’émettre les nombres de 0 à 10. 
*	Pour chaque valeur émise, calculez et renvoyez le carré de cette valeur à l’aide de l’opérateur [map](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map). 
*	Afficher le résultat dans la console.

Voici ce qui doit apparaître dans la console :
```
0
1
4
9
16
25
36
49
64
81
```

## Ex 5 : Filtre et transformation
* Créer un nouveau composant appelé ***MapFilterComponent***
* Ce composant devra être accessible par la route suivante : */mapFilter*


* Dans le constructeur, créer un Observable chargé d’émettre les nombres de 0 à 10. 
* Pour chaque valeur émise, calculez et renvoyez le carré de cette valeur.  
* Filtrer les valeurs de sorte que seuls les nombres pairs soient retournés.
*	Afficher le résultat dans la console.

Voici ce qui doit apparaître dans la console :
```
0
4
16
36
64
```

## Ex 6 : Transformation
*	Créer un nouveau composant appelé ***StarWarsComponent***
*	Ce composant devra être accessible par la route suivante : */starWars*


*	Créez une fichier Typescript *movie.ts* comprenant le modèle suivant Movie :
    * title
    * episodeNumber
    * director
    * releaseDate


*	Dans le constructeur, lancez une requête HTTP vers la ressource : https://swapi.dev/api/films
*	Parcourez l’objet retourné de sorte à récupérer les films
*	Créez un objet Movie pour chaque film retourné par l’API

*	Dans le template HTML, affichez les propriétés de chaque film

## Ex 7 : Combinaison
*	Créer un nouveau composant appelé ***DurationComponent***
*	Ce composant devra être accessible par la route suivante : */duration*


*	Ecrire un code qui s’abonne au clic sur la page par l’utilisateur.
*	Ecrire une méthode qui calcule le nombre de clics que l’utilisateur fait sur la page.
*	Ecrire une méthode qui calcule le temps écoulé entre 2 clics et qui se met à jour en function du dernier clic.


*	Ecrire cet algorithme de façon "classique".
*	Ecrire cet algorithme à l’aide des opérateurs RxJS. (aide : map, [pairwise](https://www.learnrxjs.io/learn-rxjs/operators/combination/pairwise)).
