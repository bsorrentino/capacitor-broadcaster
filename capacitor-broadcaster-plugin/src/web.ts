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

  }

  async removeNativeEventListener(options: { listenrId: string; }): Promise<void> {
  }

  async fireNativeEvent(options: { eventName: string; dtata: any; }): Promise<void> {
 
  }

}

const BroadcasterPlugin = new BroadcasterPluginWeb();

export { BroadcasterPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BroadcasterPlugin);
