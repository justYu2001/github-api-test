import type { DetailedHTMLProps } from "react";
import { ImgHTMLAttributes } from "react";

type ImageProps = {
    src: string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const Image = ({ src, ...props }: ImageProps) => {
    return (
       <img src={chrome.runtime.getURL(src)} {...props}  /> 
    );
};

export default Image;