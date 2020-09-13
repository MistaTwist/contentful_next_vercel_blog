export default function Post( { alt, date, image, title, url}) {
    return(
        <div className="container">
            <a href={url}>
                <img alt={alt} src={image} />
            </a>
            <div className="text">
                <h2>{title}</h2>
                <h4>{date}</h4>
            </div>
            <style jsx>{`
                .container{
                    cursor: pointer;
                    height: 453px;
                    margin-bottom: 48px;
                }
                .text{
                    margin-top: -160px;
                    padding: 24px;
                    position: absolute;
                }
            `}                
            </style>
        </div>
    )
}
