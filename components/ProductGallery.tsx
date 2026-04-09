'use client'

import { useState } from 'react'

interface ProductGalleryProps {
  images: { src: string; alt: string }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [active, setActive] = useState(0)

  // Clamp to max 3
  const slots = images.slice(0, 3)

  return (
    <div style={{ width: '100%', maxWidth: '440px' }}>

      {/* Main image */}
      <div
        className="product-frame float"
        style={{ width: '100%', aspectRatio: '1/1', marginBottom: '16px' }}
      >
        {slots.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: active === i ? 1 : 0,
              transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
      </div>

      {/* Thumbnails — only shown if more than 1 image */}
      {slots.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
        }}>
          {slots.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '8px',
                overflow: 'hidden',
                padding: 0,
                cursor: 'pointer',
                border: active === i
                  ? '1px solid rgba(201,168,76,0.8)'
                  : '1px solid rgba(201,168,76,0.15)',
                background: '#0f0f12',
                transition: 'border-color 0.2s',
                flexShrink: 0,
              }}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: active === i ? 1 : 0.4,
                  transition: 'opacity 0.2s',
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
