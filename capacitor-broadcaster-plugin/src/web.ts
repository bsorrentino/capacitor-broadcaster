import { WebPlugin } from '@capacitor/core';
import { BroadcasterPluginPlugin } from './definitions';

export class BroadcasterPluginWeb extends WebPlugin implements BroadcasterPluginPlugin {
  constructor() {
    super({
      name: 'BroadcasterPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const BroadcasterPlugin = new BroadcasterPluginWeb();

export { BroadcasterPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BroadcasterPlugin);
