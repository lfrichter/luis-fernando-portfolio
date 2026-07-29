import profileData from '@/data/profile.json';
import type { IProfile } from '@/types';

export function useProfile(): IProfile {
  return profileData as IProfile;
}
