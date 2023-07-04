import agrarianMan from '../../../assets/img/agrarian_man.png';

const Agrarian = () => {
    return (
        <section className="agrarian">
            <div className="container">
                <h1 className="title left-leaf">Аграрний</h1>
                <h3 className="agrarian__subtitle">інтернет-магазин</h3>
                <p className="agrarian__descr">
                    Основна сфера діяльності – дистрибуція насіння, засобів <br /> захисту рослин, мінеральних макро -
                    та мікродобрив
                </p>
                <img src={agrarianMan} alt="agrarianMan" className="agrarian__man" />
                <button className="button button_agrarian">Про компанію</button>
            </div>
        </section>
    );
};

export default Agrarian;
