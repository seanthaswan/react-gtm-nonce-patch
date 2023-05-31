// Type definitions for react-gtm-module-nonce-patch
// Project: https://github.com/alinemorelli/react-gtm
// Definitions by: Marc Veens <https://github.com/marcveens> and updated by Sean Swanson <https://github.com/seanthaswan
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
declare module "react-gtm-module-nonce-patch";

declare const TagManager: {
  dataLayer: (dataLayerArgs: DataLayerArgs) => void;
  initialize: (tagManagerArgs: TagManagerArgs) => void;
};

export interface TagManagerArgs extends DataLayerArgs {
  /**
   * GTM id, must be something like GTM-000000.
   */
  gtmId: string;
  /**
   * Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js'.
   */
  events?: object | undefined;
  /**
   * Used to set environments.
   */
  auth?: string | undefined;
  /**
   * Used to set environments, something like env-00.
   */
  preview?: string | undefined;
  /**
   * Used to add a nonce which should be an unguessable, random value that the server generates individually for each response.
   */
  nonce?: string | undefined;
}

export interface DataLayerArgs {
  /**
   * Object that contains all of the information that you want to pass to Google Tag Manager.
   */
  dataLayer?: object | undefined;
  /**
   * Custom name for dataLayer object.
   */
  dataLayerName?: string | undefined;
}

export default TagManager;
