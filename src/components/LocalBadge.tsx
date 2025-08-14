import Image from 'next/image';

interface LocalBadgeProps {
  name: string;
  imagePath: string;
  color: string;
  className?: string;
}

export default function LocalBadge({ name, imagePath, className = '' }: LocalBadgeProps) {
  return (
    <div className={`group relative ${className}`}>
      {/* Gradient border background */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-[2px] transition-all duration-300 hover:scale-105">
        <div className="bg-gray-900 rounded-lg p-4 h-full">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 relative">
              <Image 
                src={imagePath}
                alt={name}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <p className="text-xs font-medium text-center text-white">
              {name.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
