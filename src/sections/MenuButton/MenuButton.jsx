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
      console.warn(`Element with ID ${sectionId} not found.`);
    }
  };

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
        ]}
        shape="square"
        startPosition="top left"
        width={250}
        onSelect={(item) => {
            console.log(item);
          scrollToSection(item.toLowerCase());
        }}
      >
        <button className={styles.menuButton}>Menu</button>
      </Menu>
    </div>
  );
};

export default MenuButton;
