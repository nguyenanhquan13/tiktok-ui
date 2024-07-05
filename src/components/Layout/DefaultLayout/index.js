import styles from './DeFaultLayout.module.scss'
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles)

function DeFaultLayout( {children} ) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DeFaultLayout;
