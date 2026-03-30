import React, { useState } from 'react'
import { mockSpeakers } from '../mocks/scheduleData'

export const SpeakersPage: React.FC = () => {
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">👥 Palestrantes</h1>
        <p className="text-gray-600">Conheça os especialistas que apresentarão neste congresso</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer"
            onClick={() =>
              setExpandedSpeaker(expandedSpeaker === speaker.id ? null : speaker.id)
            }
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {speaker.name[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{speaker.name}</h3>
                <p className="text-sm text-gray-600">{speaker.bio}</p>
              </div>
            </div>

            {expandedSpeaker === speaker.id && (
              <div className="space-y-3 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Email:</span> {speaker.email}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Redes Sociais:</p>
                  <div className="flex gap-2">
                    {Object.entries(speaker.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
