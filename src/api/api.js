import axios from 'axios';

const API_URL = 'https://segteosv.onrender.com/auth';

export const loginUser = async (correo, contraseña) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { correo, contraseña });
    console.log(" inicio de sesión fue exitoso 🚀")
    return response.data;
  } catch (error) {
    throw new Error('Credenciales incorrectas');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register/cliente`, userData);
    console.log(" Registro exitoso 🚀")
    return response.data;
  } catch (error) {
    console.error('Error en registro:', error.response ? error.response.data : error.message);
    throw new Error('Error al registrar el usuario');
  }
};
