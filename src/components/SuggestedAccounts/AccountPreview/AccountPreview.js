import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <diV className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/91e62587ba4aa4eee72819befed53bf1.jpeg?lk3s=a5d48078&nonce=88837&refresh_token=a09b790c886cd3bf047e4a5a9718ac77&x-expires=1722128400&x-signature=wIEd%2Bg2Q2gNOdTv1rxVdbhupVBM%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary> Follow </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vanana_moazmoaz</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>📻 Vẫn Vẫn Radio</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>21 </strong>
                    <span className={cx('label')}>Likes</span>
                </p>    
            </div>
        </diV>
    );
}

export default AccountPreview;
