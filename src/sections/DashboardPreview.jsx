import { Box, Typography } from '@mui/material';

const candidates = [
  { name: 'Victor Tran',       exp: '10 yrs', updated: '22/10/2025', score: 70, level: 'high', active: true },
  { name: 'Mariam Konate',     exp: '7 yrs',  updated: '22/10/2025', score: 65, level: 'mid' },
  { name: 'Ethan Murphy',      exp: '13 yrs', updated: '22/10/2025', score: 65, level: 'mid' },
  { name: 'Isabella Rossi',    exp: '11 yrs', updated: '22/10/2025', score: 65, level: 'mid' },
  { name: 'Markus Schneider',  exp: '12 yrs', updated: '22/10/2025', score: 65, level: 'mid' },
  { name: 'Robert Novak',      exp: '6 yrs',  updated: '22/10/2025', score: 40, level: 'mid' },
  { name: 'Carlos Romero',     exp: '4 yrs',  updated: '22/10/2025', score: 20, level: 'low' },
  { name: 'Emily Wang',        exp: '5 yrs',  updated: '22/10/2025', score: 20, level: 'low' },
  { name: 'Julia Nwosu',       exp: '5 yrs',  updated: '22/10/2025', score: 20, level: 'low' },
];

const scoreColor = { high: '#16a34a', mid: '#d97706', low: '#dc2626' };

function Ring({ value, label }) {
  const level = value >= 60 ? 'high' : value >= 40 ? 'mid' : 'low';
  const color = scoreColor[level];
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        style={{ '--v': value, '--c': color }}
        sx={{
          width: { xs: 68, md: 78 },
          height: { xs: 68, md: 78 },
          borderRadius: '50%',
          background: 'conic-gradient(var(--c) calc(var(--v) * 1%), #e2e8f0 0)',
          position: 'relative',
          mx: 'auto',
          mb: '8px',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '8px',
            borderRadius: '50%',
            background: '#fff',
          },
        }}
      >
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 1,
          display: 'grid', placeItems: 'center',
          fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' }, color: '#0f172a',
        }}>
          {value}
        </Box>
      </Box>
      <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {label}
      </Typography>
    </Box>
  );
}

function Panel({ title, children }) {
  return (
    <Box sx={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      p: '16px 18px',
      mb: '12px',
      '&:last-child': { mb: 0 },
    }}>
      <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', textAlign: 'center', mb: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function DashboardPreview() {
  return (
    <Box sx={{
      width: '100%',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      boxShadow: '0 24px 64px rgba(15,23,42,0.10), 0 4px 16px rgba(15,23,42,0.04)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '260px 1fr' },
    }}>

      {/* ── Sidebar ── */}
      <Box sx={{
        background: '#fff',
        borderRight: { md: '1px solid #e2e8f0' },
        borderBottom: { xs: '1px solid #e2e8f0', md: 'none' },
        display: 'flex',
        flexDirection: 'column',
        order: { xs: 2, md: 1 },
      }}>
        {/* Sidebar header */}
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          px: '16px', py: '12px',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky', top: 0, background: '#fff', zIndex: 1,
        }}>
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Reports
          </Typography>
          <Typography sx={{ color: '#94a3b8', fontSize: '1.25rem', lineHeight: 1 }}>↓</Typography>
        </Box>

        {/* Candidate list */}
        <Box sx={{ overflowY: 'auto', maxHeight: { xs: '240px', md: '100%' } }}>
          {candidates.map((c, i) => (
            <Box key={i} sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto',
              alignItems: 'center',
              gap: '8px',
              px: '16px',
              py: '10px',
              borderBottom: '1px solid #f1f5f9',
              position: 'relative',
              background: c.active ? '#f0fdf4' : 'transparent',
              transition: 'background 0.15s',
              '&:hover': { background: c.active ? '#f0fdf4' : '#f8fafc' },
              '&::before': c.active ? {
                content: '""',
                position: 'absolute',
                left: 0, top: '8px', bottom: '8px',
                width: '3px',
                borderRadius: '0 3px 3px 0',
                background: '#16a34a',
              } : {},
            }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{
                  fontSize: '0.85rem', fontWeight: c.active ? 700 : 500,
                  color: c.active ? '#0f172a' : '#334155',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  mb: '2px',
                }}>
                  {c.name}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {c.exp} exp · {c.updated}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: scoreColor[c.level], minWidth: 36, textAlign: 'right' }}>
                {c.score}%
              </Typography>
              <Typography sx={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1, userSelect: 'none' }}>⋮</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Main content ── */}
      <Box sx={{
        overflowY: 'auto',
        maxHeight: { md: '600px' },
        p: '18px 16px',
        order: { xs: 1, md: 2 },
      }}>
        {/* Candidate header */}
        <Box sx={{ textAlign: 'center', pb: '14px', borderBottom: '1px solid #e2e8f0', mb: '18px' }}>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 700, color: '#0f172a', mb: '6px' }}>
            Victor Tran &nbsp;·&nbsp; 10 years experience
          </Typography>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Box component="svg" viewBox="0 0 24 24" fill="none" sx={{ width: 15, height: 15, stroke: '#64748b', strokeWidth: 2, flexShrink: 0 }}>
              <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v10A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" />
              <path d="M8 6V4.8A1.8 1.8 0 0 1 9.8 3h4.4A1.8 1.8 0 0 1 16 4.8V6" />
            </Box>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>
              Senior Java Architect
            </Typography>
          </Box>
        </Box>

        {/* Score rings */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          mb: '18px',
          px: { md: 2 },
        }}>
          <Ring value={70} label="Summary" />
          <Ring value={75} label="Skills" />
          <Ring value={80} label="Experience" />
        </Box>

        {/* Candidate Profile */}
        <Panel title="Candidate Profile">
          <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, textAlign: 'center', mb: '14px' }}>
            Highly experienced senior backend developer with 10+ years of expertise in Java and scalable systems design.
          </Typography>
          <Box sx={{ borderTop: '1px solid #f1f5f9', pt: '12px' }}>
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textAlign: 'center', mb: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Java', 'Spring Boot', 'Kafka', 'Elasticsearch', 'MongoDB', 'Kubernetes'].map(skill => (
                <Box key={skill} sx={{
                  px: '10px', py: '4px', borderRadius: '999px',
                  background: '#f1f5f9', color: '#334155',
                  fontSize: '0.8rem', fontWeight: 500,
                  border: '1px solid #e2e8f0',
                }}>
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>
        </Panel>

        {/* Summary */}
        <Panel title="Summary">
          <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, textAlign: 'center' }}>
            Strong background in Java and backend development but lacks some critical skills required for the Senior Java Architect position.
          </Typography>
          <Typography sx={{ mt: '10px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a' }}>
            Score: 70 / 100
          </Typography>
          <Typography sx={{ mt: '12px', mb: '6px', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>
            Areas to Improve
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: '18px', fontSize: '0.85rem', color: '#475569', lineHeight: 1.75 }}>
            <li>Gain experience with Java 17+ and Spring Cloud.</li>
            <li>Develop knowledge of cloud platforms (AWS, Azure, or GCP).</li>
            <li>Enhance understanding of software security principles.</li>
          </Box>
        </Panel>

        {/* Experience Match */}
        <Panel title="Experience Match">
          <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, textAlign: 'center' }}>
            10 years of Java development aligns well with the 10+ year requirement. However, no mention of leading architecture reviews or mentoring — key responsibilities for this role.
          </Typography>
          <Typography sx={{ mt: '10px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#16a34a' }}>
            Match Level: 80%
          </Typography>
        </Panel>

        {/* Skills Match */}
        <Panel title="Skills Match">
          <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, textAlign: 'center' }}>
            Java, Spring Boot, and microservices skills align well, but gaps exist in cloud platform experience and specific technologies listed in the job description.
          </Typography>
          <Typography sx={{ mt: '10px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#d97706' }}>
            Match Level: 75%
          </Typography>
        </Panel>

        {/* Missing Skills */}
        <Panel title="Missing Skills">
          <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, textAlign: 'center' }}>
            Lacks experience with Java 17+, cloud platforms (AWS, Azure, GCP), and software security principles required for this position.
          </Typography>
        </Panel>
      </Box>
    </Box>
  );
}
