import phone from '../../assets/icons/phone.svg';

type SupportProps = {
    classes?: string | string[];
};

const Support = ({ classes, classCircle }: { classes?: string | string[]; classCircle?: string }) => {
    let clazz: string = '';

    if (classes) {
        clazz = Array.isArray(classes) ? classes.join(' ') : classes;
    }

    return (
        <div className={`support ${clazz}`}>
            <button className={`button_circle ${classCircle}`}>
                <img src={phone} alt="phone" />
            </button>
            <div className="support_wrapper">
                <a href="tel:+380671150058" className="support__phone arrow_dropdown">
                    +38 (067) 115 00 58
                </a>
                <a href="#" className="support__descr">
                    Замовити зворотній зв’язок
                </a>
            </div>
        </div>
    );
};

export default Support;
