import styled from 'styled-components';

export const ContentInfo = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const ContentForm = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 1.5em !important;

  form {
    box-shadow: 0 0 30px ${props => props.theme.colors.contact.boxShadow};
    padding: 30px;
    background: ${props => props.theme.colors.contact.background};
  }

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 0 !important;
  }
`;

export const BoxInfo = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const BoxInfoContent = styled.div`
  text-align: center;
  box-shadow: 0 0 30px ${props => props.theme.colors.contact.boxShadow};
  padding: 20px 0 30px 0;
  background: ${props => props.theme.colors.contact.background};
  margin-top: 1.5em !important;

  h3 {
    font-size: 20px;
    color: ${props => props.theme.colors.contact.title};
    font-weight: 700;
    margin: 10px 0;
    line-height: 1.2;
  }

  p {
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-top: 0 !important;
  }
`;

export const BoxIcon = styled.div`
  padding: 8px;
`;

export const BoxInfoSocialMedia = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const BoxInfoSocialMediaContent = styled.div`
  text-align: center;
  box-shadow: 0 0 30px ${props => props.theme.colors.contact.boxShadow};
  padding: 20px 0 10px 0;
  background: ${props => props.theme.colors.contact.background};
  margin-top: 1.5em !important;

  h3 {
    font-size: 20px;
    color: ${props => props.theme.colors.contact.title};
    font-weight: 700;
    margin: 10px 0;
    line-height: 1.2;
  }
`;

export const BoxInfoSocialMediaIconsContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxIconSocialMedia = styled.a`
  margin: 20px 30px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
`;

export const FormRowItem = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  input {
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: none;
    font-size: 14px;
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.contact.form.inputText};
    background-color: ${props => props.theme.colors.contact.form.background};
    background-clip: padding-box;
    border: 1px solid ${props => props.theme.colors.contact.form.border} !important;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const FormItem = styled.div`
  margin-bottom: 1rem;

  & > * {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.contact.form.inputText};
    background-color: ${props => props.theme.colors.contact.form.background};
    background-clip: padding-box;
    border: 1px solid ${props => props.theme.colors.contact.form.border};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
  }

  input {
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: none;
    font-size: 14px;
  }

  textarea {
    padding: 12px 15px;
    border-radius: 5px;
    box-shadow: none;
    font-size: 14px;
    height: 135px;
    resize: none;
  }
`;

export const FormFooter = styled.div`
  text-align: center !important;
  margin-top: 1rem !important;
`;
