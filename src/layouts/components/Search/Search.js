/* eslint-disable array-callback-return */
import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import SvgIcon from '~/components/Svgicon';
import { iconClose, iconLoading, iconSearch } from '~/components/Svgicon/iconsRepo';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 800); //value(state) đc delay
    //khi nguoi dung ngừng gõ 500ms => khi đó giá trị debouncedValue mới đc update = giá trị mới nhất của searchValue

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        //?q=${encodeURIComponent(debouncedValue)}&type=less
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue} //two way binding:khi gõ vào input->hiển thị thay đổi
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={
                            //two way binding
                            handleChange
                        }
                        onFocus={() => setShowResult(true)}
                    />
                    <div className={cx('search-icon-wrapper')}>
                        {loading && (
                            <span className={cx('loading', 'lh0')}>
                                <SvgIcon icon={iconLoading} />
                            </span>
                        )}
                        {loading || (
                            <span className={cx('clear-btn', 'lh0')} onClick={handleClear}>
                                <SvgIcon icon={iconClose} />
                            </span>
                        )}
                    </div>

                    {/* Search btn */}
                    <button
                        type="submit"
                        className={cx('search-btn', 'lh0')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SvgIcon icon={iconSearch} size={24} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
