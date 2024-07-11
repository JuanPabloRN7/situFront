export const Session = (token) => {
    localStorage.setItem('token',token);
};

export const ObtenerSession = () => {
    return localStorage.getItem('token');
};


export const getSession = () => {
    return localStorage.getItem('token');
  }
  

export const EstaSession = () => {
    const token = localStorage.getItem('token');
    if (token) return true;
    else return false;
};

export const CerrarSession = () => {
    localStorage.clear();
    localStorage.removeItem('token');
    //llamado al Servicios Web para borrar token
    
}