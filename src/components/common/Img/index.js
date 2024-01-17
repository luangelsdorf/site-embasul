import Image from 'next/image';
import { apiURL } from 'src/utils/env';

export default function Img({ data: { attributes: props }, fill, sizes, ...rest }) {
  return (
    <Image
      src={apiURL + props.url}
      width={fill ? undefined : props.width}
      height={fill ? undefined : props.height}
      alt={props.alernativetext ?? ''}
      fill={fill}
      sizes={sizes}
      {...rest}
    />
  )
}