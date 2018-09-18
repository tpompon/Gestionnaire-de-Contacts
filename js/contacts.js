/* - - - - - - - - - - - - - My work - Activity 2 - - - - - - - - - - - - - */
/* - - - - - - OpenClassroom - Apprenez à coder avec JavaScript - - - - - - */


// Objet contact
var Contact = {
  // Méthode qui initialise les données du contact
  init: function(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  // Méthode qui permet de donner la description du contact
  decrire: function() {
    var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
    return description;
  }
};

var choix; // Variable qui stocke le choix du menu entré par l'utilisateur
var contacts = []; // Tableau qui stocke le contenu des variables contact

// Contacts initiaux
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

// Ajout des contacts initiaux au tableau
contacts.push(contact1);
contacts.push(contact2);

// Message d'accueil dans le gestionnaire de contacts
console.log("Bienvenue dans le gestionnaire de contacts !\n");

// Boucle tant que l'utilisateur n'a pas choisi de quitter le menu (0)
while (choix !== 0) {
  // Affichage du menu dans la console
  console.log("========================");
  console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
  console.log("========================");
  // Boîte de dialogue qui stocke le choix de l'utilisateur dans la variable
  choix = Number(prompt("Choisissez une option :"));
  // 1 : Lister les contacts
  if (choix === 1) {
    console.log("Voici la liste de tous vos contacts :\n\n");
    contacts.forEach(function(contact) {
      console.log(contact.decrire());
    });
    console.log("\n");
  }
  // 2 : Ajouter un contact
  else if (choix === 2) {
    // Boîtes de dialogue qui stockent dans une variable le nom et le prénom
    var nouveauContactNom = prompt("Entrez le nom du nouveau contact :");
    var nouveauContactPrenom = prompt("Entrez le prénom du nouveau contact :");
    // Variable nouveauContact prototypée avec l'objet Contact
    var nouveauContact = Object.create(Contact);
    // Initialisation du nouveau contact avec les valeurs saisies
    nouveauContact.init(nouveauContactNom, nouveauContactPrenom);
    // Ajout du nouveau contact dans le tableau
    contacts.push(nouveauContact);
    // Message console qui indique que le contact a bien été ajouté à la liste
    console.log("Le nouveau contact a été ajouté\n\n");
  }
  // Choix non reconnu (différent de 1/2/0)
  else if (choix !== 0) {
    console.log("Je n'ai pas compris veuillez réessayer\n\n");
  }
}

// Affiche le message de sortie du programme
console.log("\nAu revoir !");
