const Services = () => {
  return (
    <section className="bg-light py-5 border-bottom" id="servicios">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder"> Servicios</h2>
          <p className="lead mb-0">Servicios contables para que sigas enfocado en hacer crecer tu negocio</p>
        </div>

        <div className="row gx-5 justify-content-center row-gap-4">

          <div className="col-lg-6 col-xl-4">
            <div className="card h-100 mb-5 mb-xl-0">
              <div className="card-body p-5">
                <h3 className='display-8 fs-5 fw-semibold text-gray mb-2 text-center text-uppercase'>Contables</h3>

                <ul className="list-unstyled text-center">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Registraciones contables y confección de balances
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Certificaciones de ingresos y egresos
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Informes contables mensuales para la toma de decisiones
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Proyecciones constantes sobre la marcha de la empresa
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Elaboración de estados contables
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4">
            <div className="card h-100 mb-5 mb-xl-0">
              <div className="card-body p-5">
                <h3 className='display-8 fs-5 fw-semibold text-gray mb-2 text-center text-uppercase'>Impositivos</h3>
                <ul className="list-unstyled text-center">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Liquidación de impuestos: IVA, Ingresos Brutos, Ganancias Sociedades
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Impuesto a las Ganancias Personas Físicas
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Impuesto sobre los Bienes Personales
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Régimen Simplificado para Pequeños Contribuyentes (Monotributo)
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Asesoramiento y asistencia en inspecciones
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4">
            <div className="card h-100 mb-5 mb-xl-0">
              <div className="card-body p-5">
                <h3 className='display-8 fs-5 fw-semibold text-gray mb-2 text-center text-uppercase'>Laborales</h3>
                <ul className="list-unstyled text-center">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Impresión y rúbrica de libro sueldos
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Liquidación de sueldos y cargas sociales
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Liquidaciones finales y emisión de recibos
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary"></i>
                    Altas y bajas de empleados en Afip y sindicatos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;