import './FeatureItem.scss';

export default function FeatureItem({img, alt, title, description}) {
    return (
        <article className="feature-item">
            <img
                src={img}
                alt={alt}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </article>
    )
}