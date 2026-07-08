import { Request, Response } from "express";
import { IClients } from "../model/clients.js";
import clientsModel from "../model/clientsModel.js";

async function index (req: Request, res: Response, next: any){
    const clients = await clientsModel.findAll();
    res.json(clients);
}

async function show (req: Request, res: Response, next: any){
    const id = Number(req.params.id);

    const client = await clientsModel.findByPk(id);
    res.json(client);
}

function create (req: Request, res: Response, next: any){
    res.render("created")
}

async function store (req: Request, res: Response, next: any){
    let client = req.body as IClients;
    
    await clientsModel.create({...client});
    res.redirect('/');
}

async function edit (req: Request, res: Response, next: any){
    const id = Number(req.params.id);

    const client = await clientsModel.findByPk(id);
    
    res.render("edit", {Client: client});
}

async function update (req: Request, res: Response, next: any){
    await clientsModel.update(
        req.body as IClients, {
            where:{
                id: req.params.id
            }
        }
    );

    res.redirect('/');
}

async function del (req: Request, res: Response, next: any){
    
    await clientsModel.destroy(
        {
          where:{
                id: req.params.id
            }   
        }    
    );

    res.redirect('/');
}

export default {index, create, store, show, edit, update, del};