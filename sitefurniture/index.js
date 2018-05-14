import Header from './Header';
import { createComponent } from 'react-fela'

const HeadWrapper = createComponent("HeadWrapper", () => ({
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  }))
export default ({ children }) => 
    <HeadWrapper>
        <Header />
        { children }
    </HeadWrapper>

    