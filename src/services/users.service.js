const users = [
            { id: 1, nombre: 'Ana', apellido: 'Gomez', edad: 25 },
            { id: 2, nombre: 'Luis', apellido: 'Martinez', edad: 30 }
        ]
        
export const getAllUsersService = async () => {
  return users;
};

export const getUserByIdService = async (id) => {
  return users.find(user => user.id == id);
};