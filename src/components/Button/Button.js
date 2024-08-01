import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    primary = false,
    color = false,
    outline = false,
    rounded = false,
    xsmall = false,
    xs = false,
    small = false,
    xmedium = false,
    medium = false,
    large = false,
    href,
    to,
    leftIcon,
    rightIcon,
    disable = false,
    loading = false,
    className,
    iconClassName,
    textClassName,
    ...props
}) {
    let Component = 'button';

    if (href) {
        Component = 'a';
    } else if (to) {
        Component = Link;
    }

    disable &&
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });

    const btnProps = {
        href,
        to,
        ...props,
    };

    const classNames = cx('btn', {
        // btn type
        primary,
        color,
        outline,
        rounded,

        // btn size
        xsmall,
        xs,
        small,
        xmedium,
        medium,
        large,

        // disable style
        disable,

        // Custom via external class
        [className]: className,
    });

    const iconClassNames = cx('icon', {
        [iconClassName]: iconClassName,
    });

    const textClassNames = cx('text', {
        [textClassName]: textClassName,
    });

    return (
        <Component className={classNames} {...btnProps}>
            {loading ? (
                <span className={textClassNames}>
                    <FontAwesomeIcon className={cx('loading-icon')} icon={faCircleNotch} />
                </span>
            ) : (
                <>
                    {leftIcon && <span className={iconClassNames}>{leftIcon}</span>}
                    <span className={textClassNames}>{children}</span>
                    {rightIcon && <span className={iconClassNames}>{rightIcon}</span>}
                </>
            )}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    color: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    xsmall: PropTypes.bool,
    xs: PropTypes.bool,
    small: PropTypes.bool,
    xmedium: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disable: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    textClassName: PropTypes.string,
};

export default Button;
