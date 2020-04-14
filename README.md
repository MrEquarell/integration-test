# Instructions

## Forker le repo :
 1. Il est nécessaire d’avoir un compte github.
 2. Sur la page principale du repo, appuyer sur le bouton `fork`.
 3. Appuyer sur son nom d’utilisateur.

## Cloner le repo :
 1. depuis le terminal dans le fichier de votre choix =>
 `git clone git@github.com:NOM_D_UTILISATEUR_GITHUB/integration-test.git`
 `cd integration-test`

## Lancer yarn :
 (Yarn est necessaire https://classic.yarnpkg.com/fr/docs/instal)
 1. yarn install
 2. yarn start
 3. L’application devrait être disponible sur l’adresse localhost:8080

## Test :

  Le but de ce test est de faire le design à ta sauce et l’intégration de :
  - un index d’Advisors (ie on propose au user des profils simplifiés d’Advisors pour par exemple la recherche “école de commerce”)
  - une vue d’un profil Advisor (ie le user visite le profil par exemple de Camille, Advisor en école de commerce)

  Les informations des Advisors se trouvent dans le fichier data/data.js.
  Une composante racine a été créée et les données exportées, un petit échantillon y a été utilisé.

  L’index devrait montrer pour chaque Advisor :
  - Nom
  - Prénom
  - Age
  - Rating
  - Leur dernière école

  La vue devrait montrer toutes les informations:
  - Nom
  - Prenom
  - Description
  - Tags
  - Rating
  - Age
  - Ville
  - Questions (les questions auxquelles il peut répondre)
  - Ecoles

## Format des données :

  Les données sont formatées comme suit.

  Une collection d’objets avec les attributs suivants:
  - first_name: String,
  - last_name: String,
  - picture_url: String,
  - description: String,
  - tags: Array<String> (Collection de Strings),
  - rating: Number (Float),
  - age: Number,
  - city: String,
  - questions: Array<String> (Collection de Strings),
  - schools: Array<String> (Collection de Strings)
