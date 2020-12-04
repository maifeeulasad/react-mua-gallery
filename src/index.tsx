import * as React from "react";
import "./style/fontawesome-all.min.css"
import "./style/main.css"

class Gallery extends React.Component<IGalleryProp, IGalleryState>{

    constructor(props: any) {
        super(props);
        this.state = {
            slideActive: true,
            currentIndex: 0,
            currentImage: this.props.images[0],
            images: this.imagesToImages(this.props.images),
        }
    }

    imagesToImages = (images: Array<IImage>) => {
        for(let index in images){
            let image = images[index]
            image.selected = false;
        }
        return images
    }

    // @ts-ignore
    componentDidUpdate(prevProps: Readonly<IGalleryProp>, prevState: Readonly<IGalleryState>, snapshot?: any) {
        if(this.props.images!==prevProps.images){
            this.setState({
                slideActive: true,
                currentIndex: 0,
                currentImage: this.props.images[0],
                images: this.imagesToImages(this.props.images),
            })
        }
    }

    setCurrent = (index: number) => {
        this.setState({
            slideActive: false
        })
        let images = this.state.images
        for(let index in images){
            let image = images[index]
            image.selected = false
        }
        images[index].selected = true
        let image = images[index]
        this.setState({
            currentImage:image,
            images:images,
        })
        setTimeout(()=>{
            this.setState({
                slideActive: true
            })
        },this.props.animationDelay===undefined ? 500: this.props.animationDelay)
    }

    gotoNext = () => {
        console.log("next")
        this.setState({
            currentImage: this.state.images[this.state.currentIndex+1],
            currentIndex: this.state.currentIndex+1
        })
    }

    gotoPrevious = () => {
        console.log("previous")
        this.setState({
            currentImage: this.state.images[this.state.currentIndex-1],
            currentIndex: this.state.currentIndex-1
        })
    }

    render() {
        return (
            <div>
                <div id="main">

                    <header id="header">
                        <h1>{this.props.galleryName}</h1>
                        <p>{this.props.slogan}</p>
                        <ul className="icons">
                            {
                                (this.props.socials!==undefined) &&
                                Object.entries(this.props.socials).map((social)=>{
                                    return(
                                        <li key={social["1"].socialNetwork.toString()+social["1"].socialHandle}>
                                            <a
                                                rel={"external nofollow"}
                                                href={"https://www."+social["1"].socialNetwork+".com/"+social["1"].socialHandle}
                                                className={"icon brands fa-"+social["1"].socialNetwork}>
                                                    <span className="label">
                                                        {social["1"].socialNetwork}
                                                    </span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </header>

                    <section id="thumbnails">
                        {
                            this.state.images.map((image,index)=>{
                                return(
                                    <article
                                        className={image.selected ? "active" : ""}
                                        key={image.url.toString()+image.title}
                                        onClick={()=>{this.setCurrent(index)}}>
                                        <a className="thumbnail">
                                            <img src={image.url.toString()} alt=""/>
                                        </a>
                                        <h2>{image.title}</h2>
                                        <p>{image.details}</p>
                                    </article>

                                )
                            })
                        }
                    </section>

                    <footer id="footer">
                        <ul className="copyright">
                            <li>&copy; {this.props.owner}</li>
                            {
                                (this.props.licenseTitle!==undefined && this.props.licenseLink!==undefined)
                                &&
                                <li>More on Licensing :
                                    <a
                                        rel={"external nofollow"}
                                        href={this.props.licenseLink.toString()}>
                                        {this.props.licenseTitle}
                                    </a>.
                                </li>
                            }
                        </ul>
                    </footer>

                </div>


                <div id="viewer">
                    <div className="inner">
                        {
                            /*
                        <div
                            className="nav-next"
                            onClick={()=>{this.gotoNext()}}/>
                        <div
                            className="nav-previous"
                            onClick={()=>{this.gotoPrevious()}}/>
                        <div className="toggle"/>
                             */
                        }
                        {
                            this.state.currentImage!==undefined ?
                                <div>
                                    <div
                                        className={this.state.slideActive ? "slide active" : "slide"}>
                                        <div className={"caption"}>
                                            <h2>
                                                {this.state.currentImage.title}
                                            </h2>
                                            <p>
                                                {this.state.currentImage.details}
                                            </p>
                                        </div>
                                        <div className={"image"}>
                                            <img src={this.state.currentImage.url.toString()} alt=""/>
                                        </div>
                                    </div>
                                </div> :
                                <div/>
                        }
                    </div>
                </div>

            </div>)
    }
}

interface IGalleryProp{
    galleryName: String
    owner: String
    slogan: String
    images: Array<IImage>
    licenseTitle?: String
    licenseLink?: String
    socials?: Array<ISocialDetails>
    animationDelay?: number
}
interface IGalleryState{
    currentIndex: number
    currentImage: IImage
    images: Array<IImage>
    slideActive: boolean
}

interface ISocialDetails{
    socialNetwork: String
    socialHandle: String
}

interface IImage{
    url: String
    title: String
    details: String
    selected?: Boolean
}

export default Gallery;
