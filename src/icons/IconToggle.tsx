function IconToggle() {
  const style = { transformOrigin: 'center' };

  return (
    <svg viewBox="0 0 30 30" width="30" aria-hidden="true">
      <circle cx="15" cy="15" r="12.188" />
      <polyline
        points="10.313,15 19.687,15"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.875"
        style={style}
      />
      <polyline
        points="10.313,15 19.687,15"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.875"
        style={style}
      />
    </svg>
  );
}

export default IconToggle;
