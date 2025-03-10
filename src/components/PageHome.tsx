import React from 'react';

const PageHome: React.FC = () => {
    return (
        <>

            <section className="bg-white vh-100">
                <div className="container">
                    <div className="text-center d-flex justify-content-center">
                        <div className="col-12 col-md-8">
                            <h3 className="mb-2">Desbloquea Recompensas Exclusivas</h3>
                            <h6 className="fw-normal text-gray-500">Descubre los beneficios exclusivos de nuestra tarjeta de crédito, diseñada para mejorar tus compras diarias y brindarte tranquilidad durante tus viajes.</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row pt-4">
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Tarjeta de Crédito Premium</h6>
                                <p className="card-text small">Disfruta de beneficios exclusivos y recompensas en cada compra que realices con nuestra tarjeta de crédito premium.</p>
                            </div>
                        </div>
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Protección de Compras</h6>
                                <p className="card-text small">Obtén protección adicional para tus compras y tranquilidad en cada transacción con nuestra cobertura de protección de compras.</p>
                            </div>
                        </div>
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Asistencia en Viajes</h6>
                                <p className="card-text small">Viaja con confianza y seguridad con nuestros servicios de asistencia en viajes, disponibles las 24 horas del día.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PageHome;