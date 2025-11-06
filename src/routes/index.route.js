import express, { Router } from 'express'

const router = express.Router()

class IndexRouter {
    constructor(){
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/:usuario', (req, res)=> {
            const { usuario } = req.params;
            const respuesta = this.obtenerAmigoSecreto(usuario)
            res.render('index.html', { nombre: respuesta.nombre, amigosecreto: respuesta.amigosecreto })
        })
    }

    obtenerAmigoSecreto(usuario){
        let valores = {
            nombre: 'nadota',
            amigosecreto: 'nadota'
        }

        if(usuario === null || usuario === undefined){
            return valores
        }
        const lista_amigos_secretos = [
            { usuario: 'cmazariegos',                       nombre: 'Cesar Mazariegos', amigosecreto: 'Barbara Maria' },
            { usuario: 'dnavas',                            nombre: 'Daniela Navas', amigosecreto: 'Mama Fivia' },
            { usuario: 'mama_fivia',                        nombre: 'Mama Fivia', amigosecreto: 'Duglas' },
            { usuario: 'papa_fito',                         nombre: 'Papa Fito', amigosecreto: 'Daniela Navas' },
            { usuario: 'LaSeca',                            nombre: 'Tía Zully', amigosecreto: 'Mariana Renne' },
            { usuario: 'LaNegra',                           nombre: 'Silvia Barraza Monroy', amigosecreto: 'Hugo Andre' },
            { usuario: 'TioWaldemarMonroy',                 nombre: 'Baldemar Monroy', amigosecreto: 'Julio Cesar' },
            { usuario: 'LaMiniNegra',                       nombre: 'Barbara Maria Osorio', amigosecreto: 'Tia O' },
            { usuario: 'jcmazariegos2000',                  nombre: 'Julio Cesar Mazariegos', amigosecreto: 'Tia Zully' },
            { usuario: 'ElAndreOsorio',                     nombre: 'Hugo Andre Osorio', amigosecreto: 'Papa Fito' },
            { usuario: 'ElSebastianMonroy',                 nombre: 'Sebastian Monroy', amigosecreto: 'Tia Negra' },
            { usuario: 'MynorLopez_pepei',                  nombre: 'Mynor Lopez', amigosecreto: 'Marion Lopez' },
            { usuario: 'LaMarionLopez',                     nombre: 'Marion Lopez', amigosecreto: 'Wendy Bethancourt' },
            { usuario: 'LaMariana_Barraza_Lopez_Monroy',    nombre: 'Mariana Barraza', amigosecreto: 'Katherine Berrios' },
            { usuario: 'KatheryneMonroy1998',               nombre: 'Katherine Monroy', amigosecreto: 'Sebastian' },
            { usuario: 'Tia_Ethel',                         nombre: 'Tia Etel', amigosecreto: 'Tio Bal' },
            { usuario: 'TiaO',                              nombre: 'Tia O', amigosecreto: 'Mynor lopez' },
            { usuario: 'dgu_camaradaur',                    nombre: 'Duglas', amigosecreto: 'Tia Ethel' },
            { usuario: 'wendyBethancourt',                  nombre: 'Wendy Bethancourt', amigosecreto: 'César Mazariegos' }
        ]
        const resultado = lista_amigos_secretos.find(p => p.usuario === usuario)
        if(!resultado){
            return valores
        }
        valores.nombre = resultado.nombre
        valores.amigosecreto = resultado.amigosecreto
        return valores;
    }
}

export default new IndexRouter().router;
