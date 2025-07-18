const Usuario = require('../models/usuarioModels');

exports.getUsuarios = (req, res) => {
  Usuario.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getUsuarioById = (req, res) => {
  const { id } = req.params;
  Usuario.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(results[0]);
  });
};

exports.crearUsuario = (req, res) => {
  Usuario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.actualizarUsuario = (req, res) => {
  const { id } = req.params;
  Usuario.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, ...req.body });
  });
};

exports.eliminarUsuario = (req, res) => {
  const { id } = req.params;
  Usuario.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario eliminado' });
  });
};
