import React from 'react';
import { Menu } from 'react-float-menu';
import 'react-float-menu/dist/react-float-menu.css';
import styles from './MenuButton.module.css';

const MenuButton = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID ${sectionId} not found.`);
      
    }
  };

  const handleItemClick = (item) => {
    switch (item) {
      case 'whatsappme':
        window.open('https://api.whatsapp.com/send?phone=%2B919593119009','_blank');
        break;
      case 'links':
        window.open('https://5v1.pw', '_blank');
        break;
      default:
        scrollToSection(item);
    }
}
  

  return (
    <div className={styles.menuContainer}>
      <Menu
        dimension={40}
        pin
        items={[
          { name: 'Hero', id: 'hero' },
          { name: 'Projects', id: 'projects' },
          { name: 'Skills', id: 'skills' },
          { name: 'Contact', id: 'contact' },
          { name: 'WhatsApp Me', id: null },
          { name: 'Links', id: null },
        ]}
        shape="square"
        startPosition="top left"
        width={100}
        onSelect={(item) => {
          // console.log(item.replace(" ","").toLowerCase());
          handleItemClick(item.toLowerCase().replace(" ","").trim());
        }}
      >
        <button className={styles.menuButton}>Menu</button>
      </Menu>
    </div>
  );
};

export default MenuButton;
