const db = require('../config/db');

const Usuario = {
  getAll: (callback) => {
    db.query('SELECT * FROM usuarios', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query('INSERT INTO usuarios (nombre, email, telefono) VALUES (?, ?, ?)',
      [data.nombre, data.email, data.telefono], callback);
  },

  update: (id, data, callback) => {
    db.query('UPDATE usuarios SET nombre = ?, email = ?, telefono = ? WHERE id = ?',
      [data.nombre, data.email, data.telefono, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  }
};

module.exports = Usuario;
