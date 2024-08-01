import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import SvgIcon from '~/components/Svgicon';
import { iconLogo, iconMessage, iconPlane, iconPlus, iconSeeMore } from '~/components/Svgicon/iconsRepo';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //Hangle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Hangle change language
                break;

            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                {/* Action Container */}
                <div className={cx('action-container')}>
                    <Button
                        // to={isAuth ? configs.routes.upload : null}
                        primary
                        leftIcon={<SvgIcon icon={iconPlus} size={20} />}
                        //onClick={!isAuth ? loginModalShow : null}
                    >
                        Tải lên
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" zIndex={99999}>
                                <button className={cx('user-action-icon', 'plane-icon')}>
                                    <SvgIcon icon={iconPlane} size={26} />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" zIndex={99999}>
                                <button className={cx('user-action-icon')}>
                                    <SvgIcon icon={iconMessage} size={32} />
                                    {/* <span className={cx('notify')}>10</span> */}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button color >
                                {/* onClick={loginModalShow} */}
                                Đăng nhập
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?lk3s=a5d48078&nonce=12648&refresh_token=e7af068ccd75b485a1f8fab2b2a9c594&x-expires=1721185200&x-signature=c5Kcy15tM3ts6ytlZJwPy95RmqY%3D&shp=a5d48078&shcp=81f88b70"
                                alt="nguyen van a"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
