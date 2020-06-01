declare module "@capacitor/core" {
  interface PluginRegistry {
    BroadcasterPlugin: BroadcasterPluginPlugin;
  }
}

export interface BroadcasterPluginPlugin {
  addNativeEventListener( options: { eventName: string }): Promise<void>;
  removeNativeEventListener( options: { listenrId: string }): Promise<void>;
  fireNativeEvent( options: { eventName: string, dtata:any } ): Promise<void>;
}
