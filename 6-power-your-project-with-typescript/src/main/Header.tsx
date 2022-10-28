import styles from './Header.module.css'

type PropTypes = {title: string}

function Header({title}: PropTypes) {
    return (
      <header className={'p-5 mb-2 ' + styles.Header}>
        <h1>{title}</h1>
      </header>
    )
}

export default Header;
