import React from 'react'

const Menu = ({ open, ...props }) => {

  const styles = {
    menu:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#EFFFFA',
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      height: '100vh',
      textAlign: 'left',
      padding: '2rem',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'transform 0.3s ease-in-out',
    },
    link: {
      fontSize: '2rem',
      textTransform: 'uppercase',
      padding: '2rem 0',
      fontWeight: 'bold',
      letterSpacing: '0.5rem',
      color: '#0D0C1D',
      textDecoration: 'none',
      transition: 'color 0.3s linear'
    }
  }

  const Link = ({text, icon}) => (
    <a style={styles.link} href="/" tabIndex={open ? 0 : -1}>
      <span aria-hidden="true">{icon}</span>
      {text}
    </a>
  )

  return (
    <nav style={styles.menu} aria-hidden={!open} {...props}>
      <Link icon='💁🏻‍♂️' text='About us' />
      <Link icon='💸' text='Pricing' />
      <Link icon='📩' text='Contact' />  
    </nav>
  )
}

export default Menu;
