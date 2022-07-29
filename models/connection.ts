class Connection {
    game = {
        "name" : "Tutorial",
        "chronoStart": false,
        "chrono" : 600,
        "clues" : [
            {
                "id": 0,
                "name": "Bureau",
                "description": "Voici la pièce où vous êtes enfermés. Plusieurs éléments sont visibles. Vous pouvez maintenant révéler les cinq indices dont vous voyer le numéro. Pour cela entrez chaque numéro que vous voyez dans le champ \"Recherche d'indice\".",
                "img": "bureau.png",
                "numsClues": [11, 42, 35, 69, 21],
                "defausse": [],
                "type": "lieu"
            }
        ],
        "deck": [
            {
                "id": 11,
                "name": "Une Clé",
                "description": "Vous pouvez combiner cet objet avec un objet rouge. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "cle.png",
                "numsClues": [],
                "defausse": [],
                "type": "combinable",
                "combinable": {
                    "numClue": 11,
                    "numCombine": 46,
                    "couleur": "blue"
                }
            },
            {
                "id": 16,
                "name": "Un fil",
                "description": "Un fil éléctrique de 10 cm avec des embouts en forme d'anneaux. Vous pouvez combiner cet objet avec un objet rouge. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "fil.png",
                "numsClues": [],
                "defausse": [],
                "type": "combinable",
                "combinable": {
                    "numClue": 16,
                    "numCombine": 25,
                    "couleur": "blue"
                }
            },
            {
                "id": 21,
                "name": "La Porte de sortie",
                "description": "Elle est commandée par un digicode. Pour sortir et terminer le tutoriel, vous devez entrer un code à 4 chiffres à l'aide du digicode ci-dessous. Cherchez dans la pièce.",
                "img": "porte.png",
                "defausse": [],
                "numsClues": [],
                "type": "code"
            },
            {
                "id": 25,
                "name": "Courant éléctrique",
                "description": "Bravo. Vous avez rétabli le courant en plaçant le fil sur la machine. Vous pouvez combiner cet objet avec un objet rouge. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "courant.png",
                "numsClues": [],
                "defausse": [16, 46, 85],
                "type": "combinable",
                "combinable": {
                "numClue": 25,
                "numCombine": 67,
                "couleur": "blue"
                }
            },
            {
                "id": 35,
                "name": "Un coffre",
                "description": "Il est fermé à clé. Vous pouvez combiner cet objet avec un objet bleu. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "coffre.png",
                "numsClues": [],
                "defausse": [],
                "type": "combinable",
                "combinable": {
                    "numClue": 35,
                    "numCombine": 46,
                    "couleur": "red"
                }
            },
            {
                "id": 42,
                "name": "Un écran",
                "description": "Il n'y a pas de courant. Vous pouvez combiner cet objet avec un objet bleu. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "ecran.png",
                "defausse": [],
                "numsClues": [],
                "type": "combinable",
                "combinable": {
                    "numClue": 42,
                    "numCombine": 67,
                    "couleur": "red"
                }
            },
            {
                "id": 46,
                "name": "Un coffre",
                "description": "Trés bien. Le coffre est ouvert. Regardez bien l'image. Il y a DEUX éléments intéréssants. Si vous voyez un numéro, utilisez le champ \"Recherche d'indice\" pour révéler l'indice.",
                "img": "coffre2.png",
                "numsClues": [16],
                "defausse": [11, 35],
                "type": "simple"
            },
            {
                "id": 67,
                "name": "Un écran",
                "description": "Bien joué. L'écran est allumé. Cela doit servir pour sortir. Vous pouvez entrer un code dans le champ \"Code\" grâce à ces 4 chiffres.",
                "img": "ecran2.png",
                "numsClues": [],
                "defausse": [25, 42],
                "type": "simple"
            },
            {
                "id": 69,
                "name": "Une grille",
                "description": "Une grille avec des picos séparés de 5 cm. Vous pouvez combiner cet objet avec un objet bleu. Pour cela entrez dans le champ \"Combiner\" de la carte le numéro de l'objet avec lequel vous souhaitez le combiner. Mais attention, si ce n'est pas le bon objet vous aurez une pénalité!",
                "img": "grille.png",
                "defausse": [],
                "numsClues": [],
                "type": "combinable",
                "combinable": {
                "numClue": 69,
                "numCombine": 85,
                "couleur": "red"
                },
            },
            {
                "id": 85,
                "name": "Une Machine",
                "description": "Il s'agissait d'une Machine. En cliquant sur le bouton \"Utiliser\" vous pourrez choisir comment placer le fil sur les picots. Regardez bien dans toute la pièce il doit y avoir des indices sur son fonctionnement.",
                "img": "grille.png",
                "defausse": [69],
                "numsClues": [],
                "type": "machine",
                "machine": {
                    "reponse": "choix3.png",
                    "replaceClue": 25,
                    "choix": ["choix1.png", "choix2.png", "choix3.png"],
                    "active": true
                }
            }
        ],
        "code": 9372,
        "ended": false
    };
    chronoRoom = 20;
    socket;
    constructor(socket) {
        this.socket = socket;
    }
}