import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const TailwindTest = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-primary-600 mb-4">
        Tailwind CSS Test
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-100 p-4 rounded-lg border border-primary-200">
          <h3 className="text-lg font-semibold text-primary-800">
            Primary Colors
          </h3>
          <p className="text-primary-600">
            This should be styled with primary colors
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Gray Colors</h3>
          <p className="text-gray-600">
            This should be styled with gray colors
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-4 h-4 bg-primary-500 rounded"></div>
        <div className="w-4 h-4 bg-red-500 rounded"></div>
        <div className="w-4 h-4 bg-green-500 rounded"></div>
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
      </div>

      <p className="text-sm text-gray-500">
        If you see styled colors and layout above, Tailwind CSS is working! 🎉
      </p>
    </div>
  )
}

const meta: Meta<typeof TailwindTest> = {
  title: 'Testing/Tailwind CSS',
  component: TailwindTest,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
