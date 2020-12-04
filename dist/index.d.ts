import * as React from "react";
import "./style/fontawesome-all.min.css";
import "./style/main.css";
declare class Gallery extends React.Component<IGalleryProp, IGalleryState> {
    constructor(props: any);
    imagesToImages: (images: IImage[]) => IImage[];
    componentDidUpdate(prevProps: Readonly<IGalleryProp>, prevState: Readonly<IGalleryState>, snapshot?: any): void;
    setCurrent: (index: number) => void;
    gotoNext: () => void;
    gotoPrevious: () => void;
    render(): JSX.Element;
}
interface IGalleryProp {
    galleryName: String;
    owner: String;
    slogan: String;
    images: Array<IImage>;
    licenseTitle?: String;
    licenseLink?: String;
    socials?: Array<ISocialDetails>;
    animationDelay?: number;
}
interface IGalleryState {
    currentIndex: number;
    currentImage: IImage;
    images: Array<IImage>;
    slideActive: boolean;
}
interface ISocialDetails {
    socialNetwork: String;
    socialHandle: String;
}
interface IImage {
    url: String;
    title: String;
    details: String;
    selected?: Boolean;
}
export default Gallery;
