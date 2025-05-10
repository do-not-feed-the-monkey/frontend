export interface IEvent {
  createdAt: string;
  description: string;
  id: string;
  newsCount: number;
  sentiment: number;
  startedAt: string;
  title: string;
  weight: number;
  acknowledged: boolean
}