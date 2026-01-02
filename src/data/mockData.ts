import type { Invoice, PaymentReport, RevenueData, Post, Event, Player, Team, ChatMessage } from '../types';

export const mockInvoices: Invoice[] = [
  {
    id: 'INV-001',
    memberName: 'Ahmed Al Mansoori',
    amount: 2500,
    currency: 'AED',
    status: 'Paid',
    dueDate: '2024-01-15',
    invoiceDate: '2024-01-01',
    type: 'Subscription'
  },
  {
    id: 'INV-002',
    memberName: 'Fatima Al Zaabi',
    amount: 1800,
    currency: 'AED',
    status: 'Open',
    dueDate: '2024-01-20',
    invoiceDate: '2024-01-05',
    type: 'Installment'
  },
  {
    id: 'INV-003',
    memberName: 'Mohammed Al Shamsi',
    amount: 3200,
    currency: 'AED',
    status: 'Past Due',
    dueDate: '2023-12-30',
    invoiceDate: '2023-12-15',
    type: 'Subscription'
  },
  {
    id: 'INV-004',
    memberName: 'Sara Al Dhaheri',
    amount: 1500,
    currency: 'AED',
    status: 'Paid',
    dueDate: '2024-01-10',
    invoiceDate: '2024-01-01',
    type: 'One-time'
  },
  {
    id: 'INV-005',
    memberName: 'Khalid Al Nuaimi',
    amount: 2200,
    currency: 'AED',
    status: 'Open',
    dueDate: '2024-01-25',
    invoiceDate: '2024-01-08',
    type: 'Installment'
  },
  {
    id: 'INV-006',
    memberName: 'Omar Al Suwaidi',
    amount: 2800,
    currency: 'AED',
    status: 'Paid',
    dueDate: '2024-01-12',
    invoiceDate: '2024-01-01',
    type: 'Subscription'
  },
  {
    id: 'INV-007',
    memberName: 'Jean-Pierre Dubois',
    amount: 650,
    currency: 'EUR',
    status: 'Paid',
    dueDate: '2024-01-18',
    invoiceDate: '2024-01-01',
    type: 'Subscription'
  },
  {
    id: 'INV-008',
    memberName: 'Maria Schmidt',
    amount: 480,
    currency: 'EUR',
    status: 'Open',
    dueDate: '2024-01-22',
    invoiceDate: '2024-01-05',
    type: 'Installment'
  },
  {
    id: 'INV-009',
    memberName: 'Luca Rossi',
    amount: 750,
    currency: 'EUR',
    status: 'Paid',
    dueDate: '2024-01-15',
    invoiceDate: '2024-01-01',
    type: 'One-time'
  },
];

export const mockPaymentReport: PaymentReport = {
  total: 11200,
  paid: 4000,
  open: 4000,
  pastDue: 3200,
  uncollectible: 0,
};

export const mockRevenueData: RevenueData[] = [
  { date: '2024-01-01', revenue: 8500 },
  { date: '2024-01-02', revenue: 9200 },
  { date: '2024-01-03', revenue: 7800 },
  { date: '2024-01-04', revenue: 10500 },
  { date: '2024-01-05', revenue: 9800 },
  { date: '2024-01-06', revenue: 11200 },
  { date: '2024-01-07', revenue: 12500 },
];

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    author: 'Coach Ali',
    content: 'Great practice session today! Remember to hydrate well and rest for tomorrow\'s match.',
    timestamp: '2024-01-07T18:30:00',
    type: 'announcement',
    teamId: 'team-1'
  },
  {
    id: 'post-2',
    author: 'Club360 UAE Admin',
    content: 'Registration for the Spring Academy is now open! Limited spots available.',
    timestamp: '2024-01-07T14:00:00',
    type: 'event'
  },
  {
    id: 'post-3',
    author: 'Coach Sarah',
    content: 'Match schedule updated for next week. Please check the calendar.',
    timestamp: '2024-01-06T16:45:00',
    type: 'announcement',
    teamId: 'team-2'
  },
];

export const mockEvents: Event[] = [
  {
    id: 'event-1',
    title: 'U-16 Match vs Al Wahda FC',
    type: 'match',
    startTime: '2024-01-08T18:00:00',
    endTime: '2024-01-08T19:30:00',
    location: 'Falcon Sports UAE, Dubai Sports City',
    teamId: 'team-1',
    attendance: [
      { playerId: 'p1', playerName: 'Ahmed Al Mansoori', status: 'attended' },
      { playerId: 'p2', playerName: 'Mohammed Al Shamsi', status: 'attended' },
      { playerId: 'p3', playerName: 'Khalid Al Nuaimi', status: 'didnt_attend' },
    ]
  },
  {
    id: 'event-2',
    title: 'Training Session',
    type: 'practice',
    startTime: '2024-01-09T17:00:00',
    endTime: '2024-01-09T18:30:00',
    location: 'Training Field A, Abu Dhabi',
    teamId: 'team-1',
  },
  {
    id: 'event-3',
    title: 'Summer Camp Registration',
    type: 'camp',
    startTime: '2024-01-10T09:00:00',
    endTime: '2024-01-10T17:00:00',
    location: 'Main Office, Sharjah',
  },
  {
    id: 'event-4',
    title: 'U-14 Friendly vs Al Nasr Academy',
    type: 'match',
    startTime: '2024-01-11T16:00:00',
    endTime: '2024-01-11T17:30:00',
    location: 'Al Nasr Stadium, Dubai',
    teamId: 'team-2',
  },
];

export const mockTeams: Team[] = [
  { id: 'team-1', name: 'U-16 Elite', sport: 'Football', ageGroup: 'U-16' },
  { id: 'team-2', name: 'U-14 Academy', sport: 'Football', ageGroup: 'U-14' },
  { id: 'team-3', name: 'Senior Team', sport: 'Football', ageGroup: 'Senior' },
  { id: 'team-4', name: 'U-12 Development', sport: 'Football', ageGroup: 'U-12' },
];

export const mockPlayers: Player[] = [
  {
    id: 'p1',
    name: 'Ahmed Al Mansoori',
    position: 'Forward',
    teamId: 'team-1',
    stats: {
      matchesPlayed: 12,
      goals: 8,
      assists: 5,
      attendanceRate: 92
    },
    goals: [
      { id: 'g1', title: 'Improve shooting accuracy', description: 'Target 80% accuracy', status: 'in_progress' },
      { id: 'g2', title: 'Increase speed', description: 'Complete speed training program', status: 'done' },
    ]
  },
  {
    id: 'p2',
    name: 'Mohammed Al Shamsi',
    position: 'Midfielder',
    teamId: 'team-1',
    stats: {
      matchesPlayed: 15,
      goals: 3,
      assists: 12,
      attendanceRate: 88
    },
  },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    senderId: 'coach-1',
    senderName: 'Coach Ali',
    content: 'Practice moved to 6 PM today',
    timestamp: '2024-01-07T10:00:00',
    read: true,
    teamId: 'team-1'
  },
  {
    id: 'msg-2',
    senderId: 'player-1',
    senderName: 'Ahmed Al Mansoori',
    content: 'Understood, coach!',
    timestamp: '2024-01-07T10:05:00',
    read: true,
    teamId: 'team-1'
  },
];
