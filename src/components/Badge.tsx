import Image from 'next/image';

interface BadgeProps {
  label: string;
  logo?: string;
  logoColor?: string;
  color?: string;
  labelColor?: string;
  style?: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' | 'social';
  link?: string;
}

export default function Badge({ 
  label, 
  logo, 
  logoColor = 'white',
  color = 'blue',
  labelColor,
  style = 'flat',
  link 
}: BadgeProps) {
  // For square badges with just logos, use a simpler URL structure
  const badgeUrl = label 
    ? `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=${style}${logo ? `&logo=${logo}` : ''}${logoColor ? `&logoColor=${logoColor}` : ''}${labelColor ? `&labelColor=${labelColor}` : ''}`
    : `https://img.shields.io/badge/-${color}?style=${style}&logo=${logo}&logoColor=${logoColor}`;
  
  // Use square dimensions for logo-only badges
  const isSquare = !label;
  const width = isSquare ? 40 : 120;
  const height = isSquare ? 40 : 28;
  
  const badgeElement = (
    <Image 
      src={badgeUrl} 
      alt={label || logo || 'Badge'}
      width={width}
      height={height}
      className={`inline-block ${isSquare ? 'w-10 h-10' : 'h-7'}`}
      style={isSquare ? { width: '40px', height: '40px' } : { width: 'auto', minWidth: '120px' }}
      unoptimized // shields.io badges are already optimized
    />
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {badgeElement}
      </a>
    );
  }

  return badgeElement;
}
