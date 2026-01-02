export interface Invoice {
  id: string;
  memberName: string;
  amount: number;
  currency: 'AED' | 'EUR';
  status: 'Paid' | 'Open' | 'Past Due' | 'Uncollectible';
  dueDate: string;
  invoiceDate: string;
  type: 'Subscription' | 'Installment' | 'One-time';
}

export interface PaymentReport {
  total: number;
  paid: number;
  open: number;
  pastDue: number;
  uncollectible: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  media?: string[];
  timestamp: string;
  type: 'announcement' | 'event' | 'general';
  teamId?: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'match' | 'practice' | 'camp' | 'other';
  startTime: string;
  endTime: string;
  location: string;
  teamId?: string;
  attendance?: AttendanceRecord[];
}

export interface AttendanceRecord {
  playerId: string;
  playerName: string;
  status: 'attended' | 'didnt_attend' | 'no_response';
}

export interface Player {
  id: string;
  name: string;
  position?: string;
  teamId: string;
  stats?: PlayerStats;
  goals?: Goal[];
  developmentPlan?: DevelopmentPlan;
}

export interface PlayerStats {
  matchesPlayed: number;
  goals: number;
  assists: number;
  attendanceRate: number;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  status: 'in_progress' | 'done';
  dueDate?: string;
}

export interface DevelopmentPlan {
  id: string;
  playerId: string;
  focusAreas: string[];
  assessments: Assessment[];
}

export interface Assessment {
  id: string;
  date: string;
  category: string;
  score: number;
  notes: string;
}

export interface Team {
  id: string;
  name: string;
  sport: string;
  ageGroup?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
  teamId?: string;
}
