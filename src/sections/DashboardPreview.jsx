export default function DashboardPreview() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 810"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '16px',
        boxShadow: '0 24px 64px rgba(15,23,42,0.12), 0 4px 16px rgba(15,23,42,0.06)',
        border: '1px solid rgba(98, 156, 68, 0.15)',
      }}
    >
      <image
        href="/dashboard.png"
        x="0"
        y="0"
        width="1440"
        height="810"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
}
