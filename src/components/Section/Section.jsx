import { MainSection, Header } from './styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Header>{title}</Header>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
