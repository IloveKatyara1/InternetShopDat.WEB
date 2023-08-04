import { useState } from 'react';

import phone from '../../assets/icons/phone.svg';

type SupportProps = {
    classes?: string | string[];
};

const Support = ({ classes, classCircle }: { classes?: string | string[]; classCircle?: string }) => {
    const [phoneDropdown, setPhoneDropdown] = useState<boolean>(false);

    let clazz: string = '';

    if (classes) {
        clazz = Array.isArray(classes) ? classes.join(' ') : classes;
    }

    return (
        <div className={`support ${clazz} ${phoneDropdown ? 'support_active' : ''}`}>
            <div className="support_wrapper_main">
                <div className="support_wrapper">
                    <button className={`button_circle ${classCircle}`}>
                        <img src={phone} alt="phone" />
                    </button>
                    <div className="support_wrapper_right">
                        <button
                            onClick={() => setPhoneDropdown((phoneDropdown) => !phoneDropdown)}
                            className={`support__phone arrow_dropdown ${
                                phoneDropdown ? 'arrow_dropdown_reverse' : ''
                            }`}>
                            +38 (067) 115 00 58
                        </button>
                        <a href="#" className="support__descr">
                            Замовити зворотній зв’язок
                        </a>
                    </div>
                </div>
                <div className={`support_active_wrapper ${phoneDropdown ? 'active' : ''}`}>
                    <a className="support__phone_active" href="tel:+380671150058">
                        +38 (067) 115 00 58
                    </a>
                    <a className="support__phone_active" href="tel:+380671150058">
                        +38 (067) 115 00 58
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Support;
