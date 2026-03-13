"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { usePerformance } from "../hooks/usePerformance"

export function WebGLShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tier = usePerformance()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    let animationId: number

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false }) // Antialias off para performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Cap pixel ratio for high-DPI screens

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time: { value: 0.0 },
      xScale: { value: 2.5 },     // Menos frecuencia para ondas más suaves
      yScale: { value: 0.6 },     // Menos amplitud para que no sea tan agresivo
      distortion: { value: 0.04 }, // Menos distorsión para un look más premium
      colorR: { value: new THREE.Color("#7c5cfc") }, // Accent Purple
      colorG: { value: new THREE.Color("#4c1d95") }, // Violet
      colorB: { value: new THREE.Color("#1e3a8a") }, // Deep Blue
    }

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision mediump float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      uniform vec3 colorR;
      uniform vec3 colorG;
      uniform vec3 colorB;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        // Use highp only for high tier, others get reduced precision/complexity
        #ifdef GL_FRAGMENT_PRECISION_HIGH
          precision highp float;
        #else
          precision mediump float;
        #endif

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        // Suavizamos las líneas aumentando el grosor (0.15 en lugar de 0.08) 
        // y añadiendo un decaimiento más suave
        float r = 0.12 / (abs(p.y + sin((rx + time * 0.2) * xScale) * yScale) + 0.05);
        float g = 0.12 / (abs(p.y + sin((gx + time * 0.25) * xScale) * yScale) + 0.05);
        float b = 0.12 / (abs(p.y + sin((bx + time * 0.3) * xScale) * yScale) + 0.05);

        vec3 col = (r * colorR) + (g * colorG) + (b * colorB);
        
        // Añadimos un viñeteado suave para que no corte brusco en los bordes
        float vignette = 1.0 - length(p * 0.5);
        col *= max(0.0, vignette);

        gl_FragColor = vec4(col, 0.4); // Opacidad más baja para integración sutil
      }
    `

    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([
      -1, -1, 0, 1, -1, 0, -1, 1, 0,
      1, -1, 0, 1, 1, 0, -1, 1, 0
    ])
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending, // Mezcla aditiva para mejor brillo sobre fondo oscuro
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const animate = () => {
      uniforms.time.value += 0.008
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    const onResize = () => {
      // Dynamic scale based on performance tier and mobile detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const baseScale = tier === "high" ? 1.0 : tier === "mid" ? 0.75 : 0.5
      const scale = isMobile ? baseScale * 0.7 : baseScale

      const w = canvas.clientWidth * scale
      const h = canvas.clientHeight * scale

      renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(w, h, false)
      uniforms.resolution.value = [w, h]
    }

    onResize()
    animate()

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
