import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    titulo: Schema.Attribute.Component<'home.banner-item', false>;
  };
}

export interface HomeBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_items';
  info: {
    displayName: 'banner_item';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.Blocks;
    url_boton: Schema.Attribute.String;
  };
}

export interface HomeCategoriaRecomendad extends Struct.ComponentSchema {
  collectionName: 'components_home_categoria_recomendads';
  info: {
    displayName: 'Categoria Recomendad';
  };
  attributes: {
    recommended_category_item: Schema.Attribute.Component<
      'home.recommended-category-item',
      false
    >;
  };
}

export interface HomeHiperaliaInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_hiperalia_infos';
  info: {
    displayName: 'hiperalia_info';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo_1: Schema.Attribute.Blocks;
    subtitulo_2: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_home_info_cards';
  info: {
    displayName: 'info_card';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeLoMasVendidoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_lo_mas_vendido_sections';
  info: {
    displayName: 'lo_mas_vendido_section';
  };
  attributes: {
    productos: Schema.Attribute.Component<'home.product-card', true>;
    titulo_seccion: Schema.Attribute.Blocks;
  };
}

export interface HomeNewsletterBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_newsletter_blocks';
  info: {
    displayName: 'newsletter_block';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeProductCard extends Struct.ComponentSchema {
  collectionName: 'components_home_product_cards';
  info: {
    displayName: 'product_card';
  };
  attributes: {
    id_producto_prestashop: Schema.Attribute.Integer;
    nombre_prestashop: Schema.Attribute.String;
  };
}

export interface HomeRecommendedCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_home_recommended_category_items';
  info: {
    displayName: 'recommended_category_item';
  };
  attributes: {
    background_color: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.banner': HomeBanner;
      'home.banner-item': HomeBannerItem;
      'home.categoria-recomendad': HomeCategoriaRecomendad;
      'home.hiperalia-info': HomeHiperaliaInfo;
      'home.info-card': HomeInfoCard;
      'home.lo-mas-vendido-section': HomeLoMasVendidoSection;
      'home.newsletter-block': HomeNewsletterBlock;
      'home.product-card': HomeProductCard;
      'home.recommended-category-item': HomeRecommendedCategoryItem;
    }
  }
}
