declare module "@capacitor/core" {
  interface PluginRegistry {
    BroadcasterPlugin: BroadcasterPluginPlugin;
  }
}

export interface BroadcasterPluginPlugin {
  addNativeEventListener( options: { eventName: string }): Promise<void>;
  removeNativeEventListener( options: { eventName: string }): Promise<void>;
  fireNativeEvent( options: { eventName: string, data:any } ): Promise<void>;
}
