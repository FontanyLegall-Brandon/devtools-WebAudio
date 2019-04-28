class Person {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  
  getNom() {
    return this.nom;
  }
}

function toto() {
  console.log("hello")
}

nativeBindApplyMethod_ = Function.prototype.apply.bind(Function.prototype.bind);

/* Tracer le constructeur */
function createPersonUsingConstructor(originalConstructor, argumentsList) {
  var person = (
        new (nativeBindApplyMethod_(originalConstructor, [null].concat(argumentsList)))
   );
  
   console.log("constructeur appelé")
  return person;
}
  
var p = createPersonUsingConstructor(Person, ["Nom", "Prenom"]);

console.log(p.prenom)

/* Tracer un appel de methode spécifique */

function getNomDecorator(nativeBoundGetNom, originalArguments) {
  var result = nativeBoundGetNom(originalArguments);
  console.log("GetNom appelé, résultat : " + result)
}
//console.log(p.getNom);

getNomDecorator(p.getNom.bind(p))