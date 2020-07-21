import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundLinearGradient: {
        primary: string;
        secondary: string;
      };

      navBar: {
        brand: string;
        scrolledBackground: string;
        linkText: string;
      };

      banner: {
        title: string;
        subTitle: string;
      };

      about: {
        title: string;
        icon: string;
      };

      services: {
        sectionBackground: string;
        itemBackground: string;
        title: string;

        onHover: {
          border: string;
          boxShadow: string;
          svg: string;
        };
      };
    };
  }
}
