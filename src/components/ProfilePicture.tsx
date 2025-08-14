interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({ className = '' }: ProfilePictureProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-600">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pfp.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
