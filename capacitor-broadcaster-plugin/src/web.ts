import { WebPlugin } from '@capacitor/core';
import { BroadcasterPluginPlugin } from './definitions';

export class BroadcasterPluginWeb extends WebPlugin implements BroadcasterPluginPlugin {
  constructor() {
    super({
      name: 'BroadcasterPlugin',
      platforms: ['web']
    });
  }
  

  async addNativeEventListener(options: { eventName: string; }): Promise<void> {
    console.log( 'addNativeEventListener', options.eventName );
    return null;
  }

  async removeNativeEventListener(options: { eventName: string; }): Promise<void> {
    console.log( 'removeNativeEventListener', options.eventName );
    return null;
  }

  async dispatchNativeEvent(options: { eventName: string; data: any; }): Promise<void> {
    console.log( 'dispatchNativeEvent', options.eventName );
    return null; 
  }

}

const BroadcasterPlugin = new BroadcasterPluginWeb();

export { BroadcasterPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BroadcasterPlugin);
