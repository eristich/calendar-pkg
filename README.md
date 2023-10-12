# Calendar Package

## Installation

```sh
npm i calendar-pkg 
# ou alors
yarn add calendar-pkg 
```

## Utilisation

```js
import { calendar } from 'calendar-pkg'

console.log(calendar(2023, 2))
```

Avec comme premier argument l'annee et en second le mois. L'api retourne une matrice de 2 dimension
contenant pour chaque jour la structure suivante:

```json
{
    id: 3284732801,
    dayNum: 24,
    target: true
    date: "Fri Feb 24 2023 00:00:00 GMT+0100 (heure normale d’Europe centrale)"
}
```