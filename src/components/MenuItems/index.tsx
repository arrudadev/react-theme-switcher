import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { MenuList, MenuListItem } from './styles';

import ToggleThemeButton from '../ToggleThemeButton';

interface ActiveItems {
  home: {
    isActive: boolean;
  };
  about: {
    isActive: boolean;
  };
  services: {
    isActive: boolean;
  };
  features: {
    isActive: boolean;
  };
  technologies: {
    isActive: boolean;
  };
  team: {
    isActive: boolean;
  };
  pricing: {
    isActive: boolean;
  };
  contact: {
    isActive: boolean;
  };
  [key: string]: {
    isActive: boolean;
  };
}

interface MenuItemsProps {
  isSideNavOpen: boolean;
  onClose?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isSideNavOpen, onClose }) => {
  const [activeItems, setActiveItems] = useState<ActiveItems>({
    home: {
      isActive: true,
    },
    about: {
      isActive: false,
    },
    services: {
      isActive: false,
    },
    features: {
      isActive: false,
    },
    technologies: {
      isActive: false,
    },
    team: {
      isActive: false,
    },
    pricing: {
      isActive: false,
    },
    contact: {
      isActive: false,
    },
  });

  function handleSetActive(item: string) {
    for (const prop in activeItems) {
      if (prop === item) {
        activeItems[prop].isActive = true;
      } else {
        activeItems[prop].isActive = false;
      }
    }
    setActiveItems({ ...activeItems });

    if (isSideNavOpen && onClose) {
      onClose();
    }
  }

  return (
    <MenuList>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.home.isActive}
      >
        <Link
          to="banner"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('home')}
        >
          Home
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.about.isActive}
      >
        <Link
          to="about"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('about')}
        >
          About
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.services.isActive}
      >
        <Link
          to="services"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('services')}
        >
          Services
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.features.isActive}
      >
        <Link
          to="features"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('features')}
        >
          Features
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.technologies.isActive}
      >
        <Link
          to="technologies"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('technologies')}
        >
          Technologies
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.team.isActive}
      >
        <Link
          to="team"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('team')}
        >
          Team
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.pricing.isActive}
      >
        <Link
          to="pricing"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('pricing')}
        >
          Pricing
        </Link>
      </MenuListItem>
      <MenuListItem
        isSideNavOpen={isSideNavOpen}
        isActive={activeItems.contact.isActive}
      >
        <Link
          to="contact"
          spy
          smooth
          duration={500}
          onSetActive={() => handleSetActive('contact')}
        >
          Contact
        </Link>
      </MenuListItem>
      <MenuListItem isSideNavOpen={isSideNavOpen} isActive={false}>
        <ToggleThemeButton />
      </MenuListItem>
    </MenuList>
  );
};

export default MenuItems;
