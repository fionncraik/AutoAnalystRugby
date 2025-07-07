import React, { useRef, useState } from 'react'

export default function VideoAnnotator() {
  const [videoURL, setVideoURL] = useState(null)
  const videoRef = useRef()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setVideoURL(URL.createObjectURL(file))
  }

  const handleSubmit = () => {
    alert('📦 Video + box would be sent to backend here')
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 max-w-2xl mx-auto">
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoURL && (
        <>
          <video
            ref={videoRef}
            controls
            width="100%"
            className="my-4 border rounded"
            src={videoURL}
          />
          <p className="text-sm text-gray-500">
            (Draw box tool will go here in next step)
          </p>
        </>
      )}
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Upload + Analyze
      </button>
    </div>
  )
}
