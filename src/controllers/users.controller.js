import { getAllUsersService, getUserByIdService } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try{
      const user = await getUserByIdService(id)
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
  }
  else {
    res.status(400).json({ message: 'ID del usuario no proporcionado' });
  }
};