import { Wrap } from './error.styles';

export default function ErrorComponent() {
  return (
    <Wrap>
      <div className="title">ERROR</div>
      <div className="message">
        Please check Pokemon ID <br />
        or name again
      </div>
      <img src="/pokeball-icon.png" alt="error" />
    </Wrap>
  );
}
