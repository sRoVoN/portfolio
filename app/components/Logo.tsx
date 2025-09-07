import Image from "next/image"
type Props = {
    alt: string;
    width?: number;
    height?: number;
    className?: string;
     src?: string
}
export default function Logo({alt, width= 100, height= 100, className= '', src="/logo.png"}:Props) {
  return (
    <Image
    alt={alt}
    width={width}
    height={height}
    className={`object-contain ${className}`}
    src={src}
     />
  )
}
