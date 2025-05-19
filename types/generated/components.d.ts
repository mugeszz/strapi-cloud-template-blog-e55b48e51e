import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hooks.hook': HooksHook;
    }
  }
}
