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
                a, a:hover {
                    border-bottom: none;
                }
                h2 {
                    color: white;
                    font-size:24px;
                    margin-bottom:0;
                }
                h4 {
                    color:rgba(255, 255, 255, 0.8);
                    font-size:18px;
                    font-weight: 500;
                    margin-top: 8px;
                }
            `}                
            </style>
        </div>
    )
}
