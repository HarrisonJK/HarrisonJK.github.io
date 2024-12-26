export function NameAnimation() {
  return (
    <div className="HKHeader">
      <svg className="svg">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Harrison Katapodis
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="HK"></use>
          <use xlinkHref="#s-text" className="HK"></use>
          <use xlinkHref="#s-text" className="HK"></use>
          <use xlinkHref="#s-text" className="HK"></use>
        </g>
      </svg>
    </div>
  );
}
