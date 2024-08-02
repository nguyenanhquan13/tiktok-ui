/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import HashtagFilter from '~/components/Filter/HashtagFilter';
import dataTemp from '~/temp/data';
import SharePopper from '~/components/Shares/SharePopper';
import SvgIcon from '~/components/Svgicon';
import {
    iconMusic,
    iconFlag,
    iconVolume,
    iconMute,
    iconHeart,
    iconComment,
    iconShare,
} from '~/components/Svgicon/iconsRepo';

const cx = classNames.bind(styles);

function Home() {
    // get data from temp data
    const { videoShares } = dataTemp.shares;

    const handleSetVolume = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('videoItem-wrapper')}>
                {/* avatar */}
                <a className={cx('videoItem-avatar')} href="#">
                    <span>
                        <Image
                            className={cx('img')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/414eb071c0f2506147f230baafdf719a.jpeg?lk3s=a5d48078&nonce=89897&refresh_token=7b90a46d1fe0afc0aa850046312ecdb6&x-expires=1722700800&x-signature=L%2BHbIvnvrn5HzQJbgiaFQtPaX5Y%3D&shp=a5d48078&shcp=81f88b70"
                            alt="anh"
                            fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        />
                    </span>
                </a>

                {/* videoItem info, player */}
                <div className={cx('videoItem-body')}>
                    {/* videoItem info */}
                    <div className={cx('videoItem-video-info')}>
                        <a className={cx('user-info')} src="#">
                            {/* <Image className={cx('avatar', 'small-avatar')} /> */}
                            <p className={cx('name')}>
                                <span className={cx('user-name')}> phamquanglinh.official </span>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                <span className={cx('full-name')}> Phạm Quang Linh</span>
                            </p>
                        </a>

                        {/* Follow btn */}
                        {/* <HandleFollow /> */}

                        <Button outline medium className={cx('follow-btn')}>
                            Follow
                        </Button>

                        {/* // followedElement={
                            //     <Button primary xs className={cx('follow-btn')}>
                            //         Đang Follow
                            //     </Button>
                            // } */}

                        {/* Description  */}
                        <p className={cx('description')}>
                            {/* {description} */}
                            <HashtagFilter>Phạm Quang Linh</HashtagFilter>
                        </p>

                        {/* Music info */}
                        <Link to={'/music'} className={cx('music-info')} target="_blank">
                            <SvgIcon className={cx('icon-music')} icon={iconMusic} />
                            <span>{`Original sound`}</span>
                        </Link>
                    </div>

                    {/* videoItem player */}
                    <div className={cx('videoItem-video-player')}>
                        {/* Video container */}
                        <div className={cx('player-space')}>
                            <div className={cx('default-space')}></div>

                            {/* Video Control */}
                            <button className={cx('control', 'report-btn')}>
                                <SvgIcon icon={iconFlag} />
                                <span>Báo cáo</span>
                            </button>

                            <div className={cx('volume-container')}>
                                <div className={cx('volume-control')}>
                                    <div className={cx('volume-background')}>
                                        <div className={cx('volume-bar')}>
                                            <div className={cx('volume-dot')}></div>
                                        </div>
                                    </div>

                                    <input
                                        className={cx('volume-range')}
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        // onChange={handleVolumeChange}
                                        //onMouseUp={handleSetVolume}
                                    />
                                </div>

                                <button className={cx('control', 'volume-btn')}>
                                    {/* {muted ? (
                                        <SvgIcon icon={iconMute} size={24} />
                                    ) : (
                                        <SvgIcon icon={iconVolume} size={24} />
                                    )} */}
                                    <SvgIcon icon={iconVolume} size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Interactive container */}
                        <div className={cx('interactive-space')}>
                            {/* Like video */}
                            <label className={cx('interactive-item')}>
                                <div className={cx('item-icon')}>
                                    
                                        <SvgIcon icon={iconHeart} />
                                    
                                </div>
                                <strong className={cx('item-count')}>24</strong>
                            </label>

                            {/* Comment video */}
                            <label className={cx('interactive-item')}>
                                <div className={cx('item-icon')}>
                                    <SvgIcon icon={iconComment} />
                                </div>
                                <strong className={cx('item-count')}>10</strong>
                            </label>

                            {/* Share video */}
                            <SharePopper data={videoShares}>
                                <label className={cx('interactive-item')}>
                                    <div className={cx('item-icon')}>
                                        <SvgIcon icon={iconShare} />
                                    </div>
                                    <strong className={cx('item-count')}>{'Chia sẻ'}</strong>
                                </label>
                            </SharePopper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
