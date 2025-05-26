import type { Schema, Struct } from '@strapi/strapi';

export interface ColourProductcolour extends Struct.ComponentSchema {
  collectionName: 'components_colour_productcolours';
  info: {
    description: '';
    displayName: 'Productcolour';
    icon: 'cup';
  };
  attributes: {
    colour: Schema.Attribute.String;
  };
}

export interface HooksHook extends Struct.ComponentSchema {
  collectionName: 'components_hooks_hooks';
  info: {
    displayName: 'Hook';
    icon: 'check';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Head: Schema.Attribute.String;
  };
}

export interface ImagesProducImage extends Struct.ComponentSchema {
  collectionName: 'components_images_produc_images';
  info: {
    description: '';
    displayName: 'Produc Image';
    icon: 'sun';
  };
  attributes: {
    colorname: Schema.Attribute.String;
    productimagecolour: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SizesProductsizes extends Struct.ComponentSchema {
  collectionName: 'components_sizes_productsizes';
  info: {
    description: '';
    displayName: 'Productsizes';
    icon: 'clock';
  };
  attributes: {
    size: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'colour.productcolour': ColourProductcolour;
      'hooks.hook': HooksHook;
      'images.produc-image': ImagesProducImage;
      'sizes.productsizes': SizesProductsizes;
    }
  }
}
