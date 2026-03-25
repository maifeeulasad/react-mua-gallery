import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExampleGallery } from './ExampleGallery'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExampleGallery />
  </StrictMode>,
)
