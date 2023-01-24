import cn from 'classnames';
import styles from './index.module.scss';

import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
  className?: string | undefined;
  quality?: number | undefined;
  priority?: boolean | undefined;
  unoptimized?: boolean | undefined;
}

const LImage = ({
  src,
  alt,
  width,
  height,
  quality,
  priority,
  unoptimized,
  className
}: IProps) => {
  return (
    <picture className={cn(styles.container, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized={unoptimized}
        quality={quality}
      />
    </picture>
  );
};

export default LImage;
