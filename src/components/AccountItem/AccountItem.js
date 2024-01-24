import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt=""></img>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.full_name}</p>
                <p className={cx('account')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
