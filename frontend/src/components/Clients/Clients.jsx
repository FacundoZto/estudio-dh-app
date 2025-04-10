import { comments } from './comments';
import './Clients.css';

const Clients = () => {
  return (
    <section className="py-5 border-bottom" id='clientes'>
      <div className="container px-5 mt-5 mb-4">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Testimonios & Partners</h2>
          <p className="lead mb-0">¿Qué dicen nuestros Clientes?</p>
        </div>

        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {comments.map((comment, index) => (
              index === 0 ? (
                <div className="carousel-item active" key={comment.id}>
                  <div className="card comment-card">
                    <div className="card-body">
                      <div className="comentary text-center">
                        <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        <h5 className="card-title">{comment.name}</h5>
                      </div>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <p className="card-text pt-3">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="carousel-item" key={comment.id}>
                  <div className="card comment-card">
                    <div className="card-body">
                      <div className="comentary text-center">
                        <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        <h5 className="card-title">{comment.name}</h5>
                      </div>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <p className="card-text pt-3">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients;