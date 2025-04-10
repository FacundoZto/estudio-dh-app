const Footer = () => {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#inicio" className="nav-link px-2 text-body-secondary">Inicio</a></li>
      <li className="nav-item"><a href="#nosotros" className="nav-link px-2 text-body-secondary">Nosotros</a></li>
      <li className="nav-item"><a href="#servicios" className="nav-link px-2 text-body-secondary">Servicios</a></li>
      <li className="nav-item"><a href="#clientes" className="nav-link px-2 text-body-secondary">Clientes</a></li>
      <li className="nav-item"><a href="#contacto" className="nav-link px-2 text-body-secondary">Contacto</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; 2025 Estudio Contable D&H</p>
  </footer>
  )
}

export default Footer;