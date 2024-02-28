const { Usuario, 
        Heroe, 
        Role, 

        /*        
        Categoria, 
        Producto, 
        Referencia, 
        GrupoMultimedia, 
        Multimedia, 
        Marca, 
        Proveedor, 
        ProveedorMarca, 
        Option, 
        Optionrole, 
        */
      } = require("../models");

const { UsuarioPamii } = require("../models/MySqlUsuario");

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findById( rol );
  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe en la Base de Datos...`);
  }
};



//Mongo
const existeEmail = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El email ${correo} ya existe en la Base de Datos...`);
  }
};

//MySQL
const emailExiste = async( correo = '' ) => {

  // Verificar si el correo existe
  const existeEmail = await UsuarioPamii.findOne({ correo });
  if ( existeEmail ) {
      throw new Error(`El correo: ${ correo }, ya está registrado`);
  }
}


//Mongo
const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id no existe ${id}`);
  }
};

//MySQL
const existeUsuarioPorIdMySQL = async( id ) => {

  // Verificar si el correo existe
  const existeUsuario = await UsuarioPamii.findById(id);
  if ( !existeUsuario ) {
      throw new Error(`El id no existe ${ id }`);
  }
}




/**
 * Categorias
 */
/*
const existeCategoriaPorId = async (id) => {
  // Verificar si el correo existe
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Productos
 */
/*
const existeProductoPorId = async (id) => {
  // Verificar si el correo existe
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Referencias
 */
/*
const existeReferenciaPorId = async (id) => {
  // Verificar si el correo existe
  const existeReferencia = await Referencia.findById(id);
  if (!existeReferencia) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * GrupoMultimedia
 */
/*
const existeGrupoMultimediaPorId = async (id) => {
  // Verificar si el correo existe
  const existeGrupoMultimedia = await GrupoMultimedia.findById(id);
  if (!existeGrupoMultimedia) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Multimedia
 */
/*
const existeMultimediaPorId = async (id) => {
  // Verificar si el correo existe
  const existeMultimedia = await Multimedia.findById(id);
  if (!existeMultimedia) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Proveedor
 */
/*
const existeProveedorPorId = async (id) => {
  // Verificar si el correo existe
  const existeProveedor = await Proveedor.findById(id);
  if (!existeProveedor) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Marca
 */
/*
const existeMarcaPorId = async (id) => {
  // Verificar si el correo existe
  const existeMarca = await Marca.findById(id);
  if (!existeMarca) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Role
 */
const existeRolePorId = async (id) => {
  // Verificar si el correo existe
  const existeRole = await Role.findById(id);
  if (!existeRole) {
    throw new Error(`El id no existe ${id}`);
  }
};

/**
 * Opcion
 */
/*
const existeOpcionPorId = async (id) => {
  // Verificar si el correo existe
  const existeOpcion = await Option.findById(id);
  if (!existeOpcion) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Opcionrole
 */
/*
const existeOpcionrolePorId = async (id) => {
  // Verificar si el correo existe
  const existeOpcionrole = await Optionrole.findById(id);
  if (!existeOpcionrole) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/


/**
 * ProveedorMarca
*/
/*
const existeProveedorMarcaPorId = async (id) => {
  // Verificar si el correo existe
  const existeProveedorMarca = await ProveedorMarca.findById(id);
  if (!existeProveedorMarca) {
    throw new Error(`El id no existe ${id}`);
  }
};
*/

/**
 * Heroe
 */
const existeHeroePorId = async (id) => {
  // Verificar si el correo existe
  const existeHeroe = await Heroe.findById(id);
  if (!existeHeroe) {
    throw new Error(`El id no existe ${id}`);
  }
};



/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = ( coleccion = '', colecciones = []) => {

  const incluida = colecciones.includes( coleccion );
  if ( !incluida ) {
      throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
  }
  return true;
}


module.exports = {
  esRoleValido,

  existeEmail,
  emailExiste,

  existeUsuarioPorId,
  existeUsuarioPorIdMySQL,


  //existeCategoriaPorId,
  //existeProductoPorId,
  //existeReferenciaPorId,
  //existeGrupoMultimediaPorId,
  //existeMultimediaPorId,
  //existeProveedorPorId,
  //existeMarcaPorId,
  existeRolePorId,
  
  //existeOpcionPorId,
  //existeProveedorMarcaPorId,
  //existeOpcionrolePorId,
  
  coleccionesPermitidas,
  existeHeroePorId
};
