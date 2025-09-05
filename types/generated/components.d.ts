import type { Schema, Struct } from '@strapi/strapi';

export interface FooterEnlace extends Struct.ComponentSchema {
  collectionName: 'components_footer_enlaces';
  info: {
    displayName: 'Enlace';
  };
  attributes: {
    Items: Schema.Attribute.Component<'footer.item', true>;
    Titulo_del_Grupo: Schema.Attribute.String;
  };
}

export interface FooterItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    Texto: Schema.Attribute.String;
    Url: Schema.Attribute.Text;
  };
}

export interface HeaderDescuento extends Struct.ComponentSchema {
  collectionName: 'components_header_descuentos';
  info: {
    displayName: 'Descuento';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitulo: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.Blocks;
  };
}

export interface HeaderDescuentoCategoria extends Struct.ComponentSchema {
  collectionName: 'components_header_descuento_categorias';
  info: {
    displayName: 'Descuento Categoria';
  };
  attributes: {
    Descuentos: Schema.Attribute.Component<'header.descuento', true>;
    ID_Categoria_Prestashop: Schema.Attribute.Integer;
    Nombre_Categoria_Prestashop: Schema.Attribute.Text;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    Banner: Schema.Attribute.Component<'home.banner-item', false>;
  };
}

export interface HomeBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_items';
  info: {
    displayName: 'Banner Item';
  };
  attributes: {
    Imagen_Fondo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Imagen_Superior: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Subtitulo: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.Blocks;
    Url_boton: Schema.Attribute.String;
  };
}

export interface HomeCategoriaRecomendad extends Struct.ComponentSchema {
  collectionName: 'components_home_categoria_recomendads';
  info: {
    displayName: 'Categoria Recomendas';
  };
  attributes: {
    Item_Categoria_Recomendada: Schema.Attribute.Component<
      'home.recommended-category-item',
      false
    >;
  };
}

export interface HomeHiperaliaInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_hiperalia_infos';
  info: {
    displayName: 'Hiperalia Informacion';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Parrafo_Derecha: Schema.Attribute.Blocks;
    Parrafo_Izquierda: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_home_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitulo: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeLoMasVendidoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_lo_mas_vendido_sections';
  info: {
    displayName: 'Seccion Lo m\u00E1s vendido';
  };
  attributes: {
    Productos: Schema.Attribute.Component<'home.product-card', true>;
    Titulo_Seccion: Schema.Attribute.Blocks;
  };
}

export interface HomeNewsletterBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_newsletter_blocks';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitulo: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeProductCard extends Struct.ComponentSchema {
  collectionName: 'components_home_product_cards';
  info: {
    displayName: 'Tarjeta de producto';
  };
  attributes: {
    Prestashop_ID_Producto: Schema.Attribute.Integer;
    Prestashop_Nombre_Producto: Schema.Attribute.String;
  };
}

export interface HomeRecommendedCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_home_recommended_category_items';
  info: {
    displayName: 'Categorias Recomendadas Item';
  };
  attributes: {
    Color_Fondo_Hex: Schema.Attribute.String;
    Imagen_Fondo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Imagen_Superior: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Titulo: Schema.Attribute.Blocks;
  };
}

export interface PdpCamposPrincipales extends Struct.ComponentSchema {
  collectionName: 'components_pdp_campos_principales';
  info: {
    displayName: 'Campos Principales PDP';
  };
  attributes: {
    Informacion_Nutricional_Lista: Schema.Attribute.Component<
      'pdp.informacion-nutricional-lista',
      true
    >;
    Ingredientes: Schema.Attribute.Blocks;
    Prestashop_ID_Producto: Schema.Attribute.String;
    Prestashop_Nombre_Producto: Schema.Attribute.Text;
  };
}

export interface PdpInformacionNutricional extends Struct.ComponentSchema {
  collectionName: 'components_pdp_informacion_nutricionals';
  info: {
    displayName: 'Informacion Nutricional';
  };
  attributes: {
    Informacion_Nutricional: Schema.Attribute.Component<
      'pdp.informacion-nutricional-lista',
      true
    >;
  };
}

export interface PdpInformacionNutricionalLista extends Struct.ComponentSchema {
  collectionName: 'components_pdp_informacion_nutricional_listas';
  info: {
    displayName: 'Informacion Nutricional Lista';
  };
  attributes: {
    Item: Schema.Attribute.Text;
    Valor: Schema.Attribute.Text;
  };
}

export interface PdpOtrosClientesCompraron extends Struct.ComponentSchema {
  collectionName: 'components_pdp_otros_clientes_comprarons';
  info: {
    displayName: 'Otros Clientes Tambi\u00E9n Compraron';
  };
  attributes: {
    Productos: Schema.Attribute.Component<'home.product-card', true>;
    Titulo_Seccion: Schema.Attribute.Blocks;
  };
}

export interface PdpPreguntasFrecuentes extends Struct.ComponentSchema {
  collectionName: 'components_pdp_preguntas_frecuentes';
  info: {
    displayName: 'Preguntas Frecuentes';
  };
  attributes: {
    Preguntas_Frecuentes: Schema.Attribute.Component<
      'pdp.preguntas-frecuentes-lista',
      true
    >;
  };
}

export interface PdpPreguntasFrecuentesLista extends Struct.ComponentSchema {
  collectionName: 'components_pdp_preguntas_frecuentes_listas';
  info: {
    displayName: 'Preguntas Frecuentes Lista';
  };
  attributes: {
    Pregunta: Schema.Attribute.Text;
    Respuesta: Schema.Attribute.Text;
  };
}

export interface RecetasCamposDetalle extends Struct.ComponentSchema {
  collectionName: 'components_recetas_campos_detalles';
  info: {
    displayName: 'Campos Detalle';
  };
  attributes: {
    Ingredientes: Schema.Attribute.Component<'recetas.ingrediente', true>;
    Pasos: Schema.Attribute.Component<'recetas.paso', true>;
    Tips: Schema.Attribute.RichText;
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
    Cantidad: Schema.Attribute.String;
    Nombre: Schema.Attribute.String;
    Nota: Schema.Attribute.Text;
    Seccion: Schema.Attribute.String;
  };
}

export interface RecetasPaso extends Struct.ComponentSchema {
  collectionName: 'components_recetas_pasos';
  info: {
    displayName: 'Paso';
  };
  attributes: {
    Contenido: Schema.Attribute.RichText;
    Orden: Schema.Attribute.Integer;
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
      'pdp.informacion-nutricional': PdpInformacionNutricional;
      'pdp.informacion-nutricional-lista': PdpInformacionNutricionalLista;
      'pdp.otros-clientes-compraron': PdpOtrosClientesCompraron;
      'pdp.preguntas-frecuentes': PdpPreguntasFrecuentes;
      'pdp.preguntas-frecuentes-lista': PdpPreguntasFrecuentesLista;
      'recetas.campos-detalle': RecetasCamposDetalle;
      'recetas.campos-principales': RecetasCamposPrincipales;
      'recetas.campos-seo': RecetasCamposSeo;
      'recetas.ingrediente': RecetasIngrediente;
      'recetas.paso': RecetasPaso;
    }
  }
}
