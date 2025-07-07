import React, { useState } from 'react'
import VideoAnnotator from './components/VideoAnnotator'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">AutoAnalystRugby</h1>
      <VideoAnnotator />
    </div>
  )
}
