import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item');
    return (
        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default MenuItem;
