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

      features: {
        text: string;
      };

      technologies: {
        sectionBackground: string;
        text: string;
      };

      testimonials: {
        avatarBorder: string;
        avatarBoxShadow: string;
        avatarName: string;
        avatarOccupation: string;

        commentBackground: string;
        commentBoxShadow: string;
      };

      team: {
        memberName: string;
        memberOccupation: string;
        memberSocialMedia: string;
        memberBackground: string;

        onHover: {
          backgroundLinearGradient: {
            primary: string;
            secondary: string;
            tertiary: string;
          };
        };
      };

      pricing: {
        sectionBackground: string;
        planBorder: string;
        pricingBorderBottom: string;

        footerBorderTop: string;

        buttonBackground: string;
        buttonText: string;

        onHover: {
          planBorder: string;
          boxShadow: string;
        };
      };

      faq: {
        questionBackground: string;
        questionText: string;
      };

      contact: {
        boxShadow: string;
        background: string;
        title: string;

        form: {
          inputText: string;
          background: string;
          border: string;
        };
      };

      footer: {
        text: string;
        linkText: string;

        formBackground: string;
        formButtonBackground: string;
        formButtonText: string;
        formButtonBoxShadow: string;

        onHover: {
          formButtonBackground: string;
        };

        copyRight: {
          borderTop: string;
        };

        credits: {
          text: string;
          linkText: string;
        };

        socialMedia: {
          background: string;
          text: string;
        };
      };
    };
  }
}
