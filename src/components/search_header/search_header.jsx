import React, { memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
    const inputRef = React.useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const onClick = () => {
        handleSearch();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src='/images/logo.png' alt='logo' />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress} ref={inputRef} />
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src='/images/search.png' alt='search' />
            </button>
        </header>
    )
})

export default SearchHeader;