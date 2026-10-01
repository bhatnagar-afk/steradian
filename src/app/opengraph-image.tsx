import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: 'linear-gradient(180deg, #241f17 0%, #17140f 55%, #0f0c08 100%)',
          color: '#f3e9d2',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#e0a868',
            marginBottom: 32,
          }}
        >
          Architecture — Interiors — Design-Build
        </div>
        <div style={{ display: 'flex', fontFamily: 'serif', fontSize: 92, lineHeight: 1 }}>
          Steradian Architects
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontSize: 34,
            color: '#ece3d0',
            marginTop: 28,
          }}
        >
          Architecture that holds its ground in time.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#8c8170',
            marginTop: 56,
          }}
        >
          Est. 1984 — Moradabad, India
        </div>
      </div>
    ),
    size,
  )
}
