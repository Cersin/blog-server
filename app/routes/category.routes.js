module.exports = app => {
    const category = require("../controllers/category.controller");

    var router = require("express").Router();

    // Tworzy nową kategorię
    router.post("/", category.create);

    // Pobiera wszystkie kategorie
    router.get("/", category.findAll);

    //Modyfikuje kategorie
    router.put("/:id", category.update);

    // Usuwa kategorie
    router.delete("/:id", category.delete);

    // Usuwa wszystkie kategorie
    router.delete("/", category.deleteAll);

    app.use('/api/category', router);
}
