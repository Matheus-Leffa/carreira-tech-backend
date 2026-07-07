import express = require("express");

function index(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    res.render("index");
}

export = {index};