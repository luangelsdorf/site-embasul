import styles from './DropdownMenu.module.scss';

export default function DropdownMenu({ children, extraLinks }) {
  return (
    <div className={styles.dropDownMenu}>
      <ul data-dd-menu>
        {
          children.map ? (
            children.map((child, i) => <li key={i}>{child}</li>)
          ) : (
            children
          )
        }
      </ul>
      {
        extraLinks && (
          <div className={styles.extraLinks}>
            {
              extraLinks.map((link, i) => (
                <div key={i}>
                  {link}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
