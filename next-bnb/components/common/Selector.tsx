import { FC } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Container = styled.div`
  width: 100%;
  height: 46px;
  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
  }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}

const Selector: FC<IProps> = ({ disabledOptions = [], options = [], ...props }) => {
  return (
    <Container>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;
