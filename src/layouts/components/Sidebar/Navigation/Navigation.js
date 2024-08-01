import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';
import SvgIcon from '~/components/Svgicon/SvgIcon';
import {
    iconHouseRegular,
    iconHouse,
    inconFriendRegular,
    iconFriend,
    iconLive,
    iconLiveRegular,
} from '~/components/Svgicon/iconsRepo';
import config from '~/config';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <nav className={cx('wrapper')}>
            <NavigationItem
                title="Dành cho bạn"
                icon={<SvgIcon icon={iconHouseRegular} />}
                iconActive={<SvgIcon icon={iconHouse} />}
                to={config.routes.home}
            />
            <NavigationItem
                title="Đang Follow"
                icon={<SvgIcon icon={inconFriendRegular} />}
                iconActive={<SvgIcon icon={iconFriend} />}
                to={config.routes.following}
            />
            <NavigationItem
                title="LIVE"
                icon={<SvgIcon icon={iconLiveRegular} />}
                iconActive={<SvgIcon icon={iconLive} />}
                to={config.routes.live}
            />
        </nav>
    );
}

export default memo(Navigation);
