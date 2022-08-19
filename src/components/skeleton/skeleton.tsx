import { Wrap } from './skeleton.styles';

export default function SkeletonComponent() {
  return (
    <Wrap>
      <div className="name" />
      <div className="contents" />
    </Wrap>
  );
}
