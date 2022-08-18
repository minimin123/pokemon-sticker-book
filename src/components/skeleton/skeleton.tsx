import { Wrapper } from './skeleton.styles';

export default function SkeletonComponent() {
  return (
    <Wrapper>
      <div className="name" />
      <div className="contents" />
    </Wrapper>
  );
}
