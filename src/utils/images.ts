// Utility functions for placeholder images
export const getPlaceholderImage = (width: number, height: number, text?: string, bgColor?: string, textColor?: string) => {
  const bg = bgColor || '1B5E7E';
  const color = textColor || 'FFFFFF';
  const label = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://placehold.co/${width}x${height}/${bg}/${color}${label}`;
};

export const getPlayerAvatar = (name: string, size: number = 64) => {
  const initial = name.charAt(0).toUpperCase();
  return getPlaceholderImage(size, size, initial, '1B5E7E', 'FFFFFF');
};

export const getTeamImage = (teamName: string, size: number = 200) => {
  return getPlaceholderImage(size, size, teamName.substring(0, 2).toUpperCase(), '1B5E7E', 'FFFFFF');
};

export const getEventImage = (eventType: string, size: number = 400) => {
  const colors: Record<string, string> = {
    'match': 'EF4444',
    'practice': '10B981',
    'camp': 'D4AF37',
    'other': '6B7280',
  };
  const bg = colors[eventType] || '6B7280';
  return getPlaceholderImage(size, size, eventType, bg, 'FFFFFF');
};
