/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import imgs from '~/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faLocationArrow,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
// eslint-disable-next-line no-unused-vars
import headlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            tilte: 'Language',
            data: [
                {
                    code: 'eng',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'indi',
                    title: 'Indian',
                },
                {
                    code: 'us',
                    title: 'English(US)',
                },
                {
                    code: 'japan',
                    title: 'Japan',
                },
                {
                    code: 'korean',
                    title: 'Korean',
                },
                {
                    code: 'china',
                    title: 'China',
                },
                {
                    code: 'thailand',
                    title: 'Thailand',
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

const USER_MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/userinfo',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/userinfo',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get Coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEM,
];

function Header() {
    const currentUser = true;

    console.log();
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={imgs.logo} alt="tiktok"></img>
                        TikTok
                    </div>
                </Link>

                <Search />
                <div className={cx('action')}>
                    <Button to={config.routes.upload} lefticon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy content={<span>Messages</span>} placement="bottom">
                                <button className={cx('logined-icon-1')}>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                </button>
                            </Tippy>
                            <Tippy content={<span>Inbox</span>} placement="bottom">
                                <button className={cx('logined-icon-2')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>

                            <Menu items={USER_MENU_ITEM}>
                                <div className={cx('userlogin-image')}>
                                    <img
                                        src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                                        alt="image"
                                    />
                                </div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <Menu items={MENU_ITEM}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon className={cx('addcontent-icon')} icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
