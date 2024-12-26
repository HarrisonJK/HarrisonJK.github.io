export function NameAnimation() {
  return (
    <div className="nameAnimationContainer">
      <svg className="nameAnimationSVG">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Harrison Katapodis
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="nameAnimationHK"></use>
          <use xlinkHref="#s-text" className="nameAnimationHK"></use>
          <use xlinkHref="#s-text" className="nameAnimationHK"></use>
          <use xlinkHref="#s-text" className="nameAnimationHK"></use>
        </g>
      </svg>
    </div>
  );
}
