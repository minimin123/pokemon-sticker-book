import { Wrapper } from './error.styles';
import Pokeball from '../../assets/pokeball-icon.png';

export default function ErrorComponent() {
  return (
    <Wrapper>
      <div className="title">ERROR</div>
      <div className="message">
        Please check Pokemon ID <br />
        or name again
      </div>
      <img src={Pokeball.src} alt="error" />
    </Wrapper>
  );
}
