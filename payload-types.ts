/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    projects: Project;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'header-menu': HeaderMenu;
    'footer-menu': FooterMenu;
  };
  globalsSelect: {
    'header-menu': HeaderMenuSelect<false> | HeaderMenuSelect<true>;
    'footer-menu': FooterMenuSelect<false> | FooterMenuSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  headerImage?: (string | null) | Media;
  SEO?: {
    title?: string | null;
    description?: string | null;
  };
  layout?:
    | (
        | {
            about?:
              | {
                  date?: string | null;
                  endDate?: string | null;
                  position?: string | null;
                  company?: string | null;
                  stacks?:
                    | {
                        stack?: string | null;
                        id?: string | null;
                      }[]
                    | null;
                  responsibilities?:
                    | {
                        responsibility?: string | null;
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'about-block';
          }
        | {
            accolade?:
              | {
                  award?: string | null;
                  awardingBody?: string | null;
                  date?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'accolades-block';
          }
        | {
            Content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content-block';
          }
        | {
            subheadingBlock?:
              | {
                  subheading?: string | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'subheading-block';
                }[]
              | null;
            title?: string | null;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'section-block';
          }
        | {
            title?: string | null;
            description?: string | null;
            cards?:
              | {
                  title?: string | null;
                  image?: (string | null) | Media;
                  link?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'slider-block';
          }
        | {
            subheading?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'subheading-block';
          }
        | {
            images?:
              | {
                  image?: (string | null) | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-grid-block';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  altText: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  heroImage: string | Media;
  title: string;
  date?: string | null;
  stacks?:
    | {
        title?: string | null;
        items?:
          | {
              item?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'list-block';
      }[]
    | null;
  description: {
    Content?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    id?: string | null;
    blockName?: string | null;
    blockType: 'content-block';
  }[];
  typeface?:
    | {
        typeface?: string | null;
        image?: (string | null) | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'typeface';
      }[]
    | null;
  slug?: string | null;
  showcase?:
    | {
        images?:
          | {
              image?: (string | null) | Media;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'image-grid-block';
      }[]
    | null;
  SEO?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'projects';
        value: string | Project;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  headerImage?: T;
  SEO?:
    | T
    | {
        title?: T;
        description?: T;
      };
  layout?:
    | T
    | {
        'about-block'?:
          | T
          | {
              about?:
                | T
                | {
                    date?: T;
                    endDate?: T;
                    position?: T;
                    company?: T;
                    stacks?:
                      | T
                      | {
                          stack?: T;
                          id?: T;
                        };
                    responsibilities?:
                      | T
                      | {
                          responsibility?: T;
                          id?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'accolades-block'?:
          | T
          | {
              accolade?:
                | T
                | {
                    award?: T;
                    awardingBody?: T;
                    date?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'content-block'?:
          | T
          | {
              Content?: T;
              id?: T;
              blockName?: T;
            };
        'section-block'?:
          | T
          | {
              subheadingBlock?:
                | T
                | {
                    'subheading-block'?:
                      | T
                      | {
                          subheading?: T;
                          id?: T;
                          blockName?: T;
                        };
                  };
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        'slider-block'?:
          | T
          | {
              title?: T;
              description?: T;
              cards?:
                | T
                | {
                    title?: T;
                    image?: T;
                    link?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'subheading-block'?:
          | T
          | {
              subheading?: T;
              id?: T;
              blockName?: T;
            };
        'image-grid-block'?:
          | T
          | {
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  heroImage?: T;
  title?: T;
  date?: T;
  stacks?:
    | T
    | {
        'list-block'?:
          | T
          | {
              title?: T;
              items?:
                | T
                | {
                    item?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  description?:
    | T
    | {
        'content-block'?:
          | T
          | {
              Content?: T;
              id?: T;
              blockName?: T;
            };
      };
  typeface?:
    | T
    | {
        typeface?:
          | T
          | {
              typeface?: T;
              image?: T;
              id?: T;
              blockName?: T;
            };
      };
  slug?: T;
  showcase?:
    | T
    | {
        'image-grid-block'?:
          | T
          | {
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  SEO?:
    | T
    | {
        title?: T;
        description?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  altText?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        desktop?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        mobile?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header-menu".
 */
export interface HeaderMenu {
  id: string;
  headerMenu?:
    | {
        linkText?: string | null;
        linkUrl?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer-menu".
 */
export interface FooterMenu {
  id: string;
  footerMenu?:
    | {
        footerMenuItem?: {
          footerMenuItemText?: string | null;
          footerLinks?:
            | {
                footerLink?: string | null;
                footerLinkUrl?: string | null;
                id?: string | null;
              }[]
            | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header-menu_select".
 */
export interface HeaderMenuSelect<T extends boolean = true> {
  headerMenu?:
    | T
    | {
        linkText?: T;
        linkUrl?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer-menu_select".
 */
export interface FooterMenuSelect<T extends boolean = true> {
  footerMenu?:
    | T
    | {
        footerMenuItem?:
          | T
          | {
              footerMenuItemText?: T;
              footerLinks?:
                | T
                | {
                    footerLink?: T;
                    footerLinkUrl?: T;
                    id?: T;
                  };
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}