import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        // dynamic class {}
        // isActive (cảu NavLink) -> khi NavLink đc active > isActive = true 
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired, //thành phần có thể render đc
    activeIcon: PropTypes.node.isRequired, //thành phần có thể render đc
};

export default MenuItem;
