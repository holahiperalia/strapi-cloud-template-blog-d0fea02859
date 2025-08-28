import type { Schema, Struct } from '@strapi/strapi';

export interface FooterEnlace extends Struct.ComponentSchema {
  collectionName: 'components_footer_enlaces';
  info: {
    displayName: 'Enlace';
  };
  attributes: {
    items: Schema.Attribute.Component<'footer.item', true>;
    titulo_grupo: Schema.Attribute.String;
  };
}

export interface FooterItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    texto: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeaderDescuento extends Struct.ComponentSchema {
  collectionName: 'components_header_descuentos';
  info: {
    displayName: 'Descuento';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.RichText;
  };
}

export interface HeaderDescuentoCategoria extends Struct.ComponentSchema {
  collectionName: 'components_header_descuento_categorias';
  info: {
    displayName: 'Descuento_Categoria';
  };
  attributes: {
    descuentos: Schema.Attribute.Component<'header.descuento', true>;
    id_categoria_prestashop: Schema.Attribute.Integer;
  };
}

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
    imagen_background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imagen_top: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    imagen_background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imagen_top: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    titulo: Schema.Attribute.Blocks;
  };
}

export interface PdpCamposPrincipales extends Struct.ComponentSchema {
  collectionName: 'components_pdp_campos_principales';
  info: {
    displayName: 'Campos Principales PDP';
  };
  attributes: {
    id_producto_prestashop: Schema.Attribute.String;
    informacion_nutricional: Schema.Attribute.RichText;
    ingredientes: Schema.Attribute.RichText;
  };
}

export interface PdpOtrosClientesCompraron extends Struct.ComponentSchema {
  collectionName: 'components_pdp_otros_clientes_comprarons';
  info: {
    displayName: 'Otros Clientes Tambi\u00E9n Compraron';
  };
  attributes: {
    productos: Schema.Attribute.Component<'home.product-card', true>;
    titulo_seccion: Schema.Attribute.Blocks;
  };
}

export interface RecetasCamposDetalle extends Struct.ComponentSchema {
  collectionName: 'components_recetas_campos_detalles';
  info: {
    displayName: 'Campos Detalle';
  };
  attributes: {
    ingredients: Schema.Attribute.Component<'recetas.ingrediente', true>;
    steps: Schema.Attribute.Component<'recetas.paso', true>;
    tips: Schema.Attribute.RichText;
  };
}

export interface RecetasCamposPrincipales extends Struct.ComponentSchema {
  collectionName: 'components_recetas_campos_principales';
  info: {
    displayName: 'Campos Principales';
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.Enumeration<
      [
        'Platos principales',
        'Entrantes',
        'Postres',
        'Bebidas',
        'Sopas',
        'Ensaladas',
        'Panes',
        'Salsas',
      ]
    >;
    cover_image: Schema.Attribute.Media<'images'>;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.RichText;
    difficulty: Schema.Attribute.Enumeration<
      ['F\u00E1cil', 'Intermedio', 'Dif\u00EDcil']
    > &
      Schema.Attribute.Required;
    servings: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'title'>;
    time: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RecetasCamposSeo extends Struct.ComponentSchema {
  collectionName: 'components_recetas_campos_seos';
  info: {
    displayName: 'Campos SEO';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images'>;
  };
}

export interface RecetasIngrediente extends Struct.ComponentSchema {
  collectionName: 'components_recetas_ingredientes';
  info: {
    displayName: 'Ingrediente';
  };
  attributes: {
    name: Schema.Attribute.String;
    note: Schema.Attribute.Text;
    quantity: Schema.Attribute.String;
    section: Schema.Attribute.String;
  };
}

export interface RecetasPaso extends Struct.ComponentSchema {
  collectionName: 'components_recetas_pasos';
  info: {
    displayName: 'Paso';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    order: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.enlace': FooterEnlace;
      'footer.item': FooterItem;
      'header.descuento': HeaderDescuento;
      'header.descuento-categoria': HeaderDescuentoCategoria;
      'home.banner': HomeBanner;
      'home.banner-item': HomeBannerItem;
      'home.categoria-recomendad': HomeCategoriaRecomendad;
      'home.hiperalia-info': HomeHiperaliaInfo;
      'home.info-card': HomeInfoCard;
      'home.lo-mas-vendido-section': HomeLoMasVendidoSection;
      'home.newsletter-block': HomeNewsletterBlock;
      'home.product-card': HomeProductCard;
      'home.recommended-category-item': HomeRecommendedCategoryItem;
      'pdp.campos-principales': PdpCamposPrincipales;
      'pdp.otros-clientes-compraron': PdpOtrosClientesCompraron;
      'recetas.campos-detalle': RecetasCamposDetalle;
      'recetas.campos-principales': RecetasCamposPrincipales;
      'recetas.campos-seo': RecetasCamposSeo;
      'recetas.ingrediente': RecetasIngrediente;
      'recetas.paso': RecetasPaso;
    }
  }
}
