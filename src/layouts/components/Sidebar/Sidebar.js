
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import BorderTopContainer from '~/components/BorderTopContainer';
import Navigation from './Navigation';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <div className={cx('content')}>
                    <Navigation />
                    {/* thêm component */}
                    <SuggestedAccounts label="Suggested Accounts" />
                    <SuggestedAccounts label="Following Accounts" />
                    

                    {/*  */}
                    <BorderTopContainer className={cx('footer-container')}>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                Giới thiệu
                            </a>
                            <a className={cx('link-item')} href="#">
                                TikTok Browse
                            </a>
                            <a className={cx('link-item')} href="#">
                                Bảng tin
                            </a>
                            <a className={cx('link-item')} href="#">
                                Liên Hệ
                            </a>
                            <a className={cx('link-item')} href="#">
                                Sự nghiệp
                            </a>
                            <a className={cx('link-item')} href="#">
                                ByteDance
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                TikTok for Good
                            </a>
                            <a className={cx('link-item')} href="#">
                                Quảng cáo
                            </a>
                            <a className={cx('link-item')} href="#">
                                Developers
                            </a>
                            <a className={cx('link-item')} href="#">
                                Transparency
                            </a>
                            <a className={cx('link-item')} href="#">
                                TikTok Rewards
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                Trợ giúp
                            </a>
                            <a className={cx('link-item')} href="#">
                                An toàn
                            </a>
                            <a className={cx('link-item')} href="#">
                                Điều khoản
                            </a>
                            <a className={cx('link-item')} href="#">
                                Quyền riêng tư
                            </a>
                            <a className={cx('link-item')} href="#">
                                Creator Portal
                            </a>
                            <a className={cx('link-item')} href="#">
                                Hướng dẫn cộng đồng
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <span className={cx('more')}>Thêm</span>
                        </p>
                        <span className={cx('more')}>© 2023 TikTok - Clone by Quan</span>
                    </BorderTopContainer>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
