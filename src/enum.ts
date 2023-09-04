export enum AudienceType{
      VVIP,
      VIP,
      SILVER,
      GOLD,
      PLATINUM
}

export type Audience = {
      id: number;
      name: string;
      type: AudienceType
}