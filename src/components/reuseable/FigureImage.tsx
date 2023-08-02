import Image from 'next/image';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

// ====================================================
interface FigureImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string;
  width: number;
  height: number;
  className?: string;
}
// ====================================================

const FigureImage: FC<FigureImageProps> = (props) => {
  const { className, src, width, height, ...others } = props;

  return (
    <figure className={className} {...others}>
      <Image width={width} height={height} src={src} alt="demo" style={{ width: '100%', height: 'auto' }} />
    </figure>
  );
};

export default FigureImage;
