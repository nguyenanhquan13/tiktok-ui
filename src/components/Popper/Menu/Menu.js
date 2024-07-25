import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1]; // lấy phần tử cuối

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //!! convert boolean có thì trả về true

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            //nếu MenuItem nào là cha thì click ra cấp con
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); // cắt từ ptu 0 -> gần cuối
        // xóa bỏ phần tử cuối => trừ 1 cấp
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {/* khi mà nó có từ 2 cái item trong [{ data: items }] => ko ở trang nhất hiện title */}
                {history.length > 1 && (
                    <Header
                        title={'Language'}
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    //Reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            offset={[16, 8]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu} //di chuyển về trag đầu tiên
        >
            {children}
        </Tippy>
    );
}

export default Menu;
