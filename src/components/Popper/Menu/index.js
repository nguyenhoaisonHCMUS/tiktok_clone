import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const handleHide = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('more-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('items-wrapper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={handleHide}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
