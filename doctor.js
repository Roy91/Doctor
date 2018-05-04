
var texte = document.querySelector(".texte");
var epaule = document.querySelector("#epaule");
var bras = document.querySelector("#bras");
var hanche = document.querySelector("#hanche");
var pied = document.querySelector("#pied");
var jambe = document.querySelector("#jambe");
var main = document.querySelector("#main");


epaule.addEventListener("mouseover", function(){ texte.innerHTML = "L'épaule désigne la région du corps qui permet d'articuler le tronc avec le membre supérieur. Elle est constituée de trois os (clavicule, omoplate et humérus), de tendons, de muscles et de ligaments. L'épaule comprend plusieurs articulations (acromio-claviculaire, scapulo-humérale...) qui la rendent extrêmement mobile. Elle est par ailleurs sujette à plusieurs traumatismes ou douleurs chroniques : fractures, luxations, lésions de la coiffe des rotateurs, tendinites, arthrose...";});
bras.addEventListener("mouseover", function(){ texte.innerHTML = "Segment du membre supérieur compris entre l'épaule et le coude.";});
hanche.addEventListener("mouseover", function(){ texte.innerHTML = "Chacune des deux régions symétriques du corps formant saillie au-dessous de la taille (os iliaque).";});
pied.addEventListener("mouseover", function(){ texte.innerHTML = "Extrémité inférieure du corps humain articulée à la jambe, permettant la station verticale et la marche.";});
jambe.addEventListener("mouseover", function(){ texte.innerHTML = "Partie de chacun des membres inférieurs de l'homme, qui s'étend du genou au pied.";});
main.addEventListener("mouseover", function(){ texte.innerHTML = "Partie du corps humain, servant à toucher et à prendre, située à l'extrémité du bras et munie de cinq doigts.";});
