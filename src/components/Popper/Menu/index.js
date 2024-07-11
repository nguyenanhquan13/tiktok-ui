import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);


function Menu({Children}) {
    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        
                    </PopperWrapper>
                </div>
            )}
        >
            {Children}
        </Tippy>
    );
}

export default Menu;
