const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { ent, username } = req.body;

    console.log("Connexion à :", ent);
    console.log("Utilisateur :", username);

    let emploi = [];

    if (ent === "pronote") {
        emploi = [
            { matiere: "Maths", jour: "Lundi", debut: "08:00", fin: "09:00" },
            { matiere: "Français", jour: "Mardi", debut: "10:00", fin: "11:00" },
            { matiere: "Sport", jour: "Jeudi", debut: "14:00", fin: "15:00" }
        ];
    }
    
    if (ent === "ecoledirecte") {
        emploi = [
            { matiere: "Histoire", jour: "Lundi", debut: "09:00", fin: "10:00" },
            { matiere: "Anglais", jour: "Mercredi", debut: "11:00", fin: "12:00" },
            { matiere: "SVT", jour: "Vendredi", debut: "13:00", fin: "14:00" }
        ];
    }

    res.json(emploi);
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});