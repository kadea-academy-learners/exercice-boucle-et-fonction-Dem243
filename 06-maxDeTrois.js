/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  // Placeholder neutre : retourne null pour indiquer non-implémentation

   // Vérifie que le nombre d'arguments est exactement 3
  if (arguments.length !== 3) {
    return null;
  }

  // Vérifie que les deux arguments sont des entiers
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" ) {
    return null;
  }
   if (a === b && b === c) {
    return "Les trois nombres sont égaux";
  }

  // Compare les trois nombres
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }

}

console.log(maxDeTrois(15,20,15));
// Ne pas modifier la ligne ci-dessous
module.exports = {
  maxDeTrois
};