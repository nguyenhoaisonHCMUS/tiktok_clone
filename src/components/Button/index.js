import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    className,
    to,
    href,
    primary,
    follow,
    load,
    small,
    large,
    underline,
    lefticon,
    righticon,
    disabled,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        follow,
        load,
        small,
        large,
        underline,
        disabled,
        lefticon,
        righticon,
    });

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}
// Button.propTypes = {
//     to: PropTypes.string,
//     href: PropTypes.string,
//     primary: PropTypes.bool,
//     outline: PropTypes.bool,
//     text: PropTypes.bool,
//     rounded: PropTypes.bool,
//     disabled: PropTypes.bool,
//     small: PropTypes.bool,
//     large: PropTypes.bool,
//     children: PropTypes.node.isRequired,
//     className: PropTypes.string,
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     onClick: PropTypes.func,
// };
export default Button;
