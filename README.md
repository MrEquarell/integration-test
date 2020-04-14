# Instructions

## Forker le repo:

  1. Il est necessaire d'avoir un compte github.
  2. Sur la page principale du repo, appuyer sur le bouton `fork`.
  3. Appuyer sur son nom d'utilisateur.

## Cloner le repo:

  1. depuis le terminal dans le fichier de votre choix =>
    `git clone git@github.com:NOM_D_UTILISATEUR_GITHUB/integration-test.git`
    `cd integration-test`

## Lancer yarn
  (Yarn est necessaire https://classic.yarnpkg.com/fr/docs/instal)
  1. yarn install
  2. yarn start
  3. L'aplication devrait etre disponible sur l'adresse localhost:8080

## Test
  Le but de ce test est de designer et integrer un index d'advisors et une vue d'advisor.
  Les informations des advisors se trouvend dans le fichier data/data.js.
  Une composante racine a ete cree et les donnees exportees, un petit echantillon y a ete utilise.

  L'index devrait montrer pour chaque Advisor :
    - Nom
    - Prenom
    - Age
    - Rating
    - Leur derniere ecole

  La vue devrait montrer toutes les informations:
    - Nom
    - Prenom
    - Description
    - Tags
    - Rating
    - Age
    - Ville
    - Questions (les questions qu'il peut repondre)
    - Ecoles

### Format des donnees.
  Les donnees sont formatees comme suit.
  Une collection d'objets avec les arrtibuts suivants:
    - first_name: String,
    - last_name: String,
    - picture_url: String,
    - description: String,
    - tags: Array<String> (Collection de Strings),
    - rating: Number (Float) ,
    - age: Number,
    - city: String,
    - questions: Array<String> (Collection de Strings),
    - schools: Array<String> (Collection de Strings)
