const { response } = require('express');
const CastingPelicula = require('../models/castingPelicula');

const crearCastingPelicula = async (req, res = response) => {
    try {
        const { personaje, peliculas_id, heroes_id } = req.body;
        const nuevoCasting = await CastingPelicula.create({
            personaje,
            peliculas_id,
            heroes_id
        });
        res.status(201).json({
            ok: true,
            casting: nuevoCasting
        });
    } catch (error) {
        console.error('Error al crear el casting:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el casting'
        });
    }
}

const obtenerCastingPelicula = async (req, res) => {
    try {
        const casting = await CastingPelicula.findAll();
        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.error('Error al obtener el casting:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el casting'
        });
    }
}

const eliminarCastingPelicula = async (req, res) => {
    const { id } = req.params;
    try {
        const casting = await CastingPelicula.findByPk(id);
        if (!casting) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el casting'
            });
        }
        await casting.destroy();
        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.error('Error al eliminar el casting:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el casting'
        });
    }
}

const actualizarCastingPelicula = async (req, res) => {
    const { id } = req.params;
    try {
        const casting = await CastingPelicula.findByPk(id);
        if (!casting) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el casting'
            });
        }
        const { personaje, peliculas_id, heroes_id } = req.body;
        await casting.update({
            personaje,
            peliculas_id,
            heroes_id
        });
        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.error('Error al actualizar el casting:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el casting'
        });
    }
}

module.exports = {
    crearCastingPelicula,
    obtenerCastingPelicula,
    eliminarCastingPelicula,
    actualizarCastingPelicula
}