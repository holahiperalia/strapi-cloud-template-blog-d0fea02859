import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBannerLeft extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_lefts';
  info: {
    displayName: 'BannerLeft';
  };
  attributes: {
    Subtitle: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.banner-left': HomeBannerLeft;
    }
  }
}
