declare module "@capacitor/core" {
  interface PluginRegistry {
    BroadcasterPlugin: BroadcasterPluginPlugin;
  }
}

export interface BroadcasterPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
