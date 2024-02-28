const { Router } = require('express');

const { crearHeroe, obtenerHeroes, actualizarHeroe, eliminarHeroe } = require('../controllers/heroe');

const router = Router();

router.post('/', crearHeroe);
router.get('/', obtenerHeroes);
router.put('/:id', actualizarHeroe);
router.delete('/:id', eliminarHeroe);

module.exports = router;