import Image from "next/image";


const getDimension = (variant: "small" | "regular"): number => variant == "small" ? 16 : 40;

export function Avatar({name, image, variant}: {name: string, image: string, variant:  "small" | "regular";}) {
    return <Image src={image} alt={name} width={getDimension(variant)} height={getDimension(variant)} className="rounded-full" />
}